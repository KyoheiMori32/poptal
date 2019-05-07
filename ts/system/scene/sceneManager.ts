import * as PIXI from 'pixi.js';
import { sceneBase } from "./sceneBase";
import { sortingLayer } from '../sortingLayer';
import { commandDataManager } from '../command/commandDataManager';
import { commandData } from '../command/commandData';
import { commandExecution } from '../command/commandExecution';

export class sceneManager {

    private _groups: PIXI.Container[] = [];
    private _scene: sceneBase | null = null;
    private _sceneList: sceneBase[] = [];
    private _initFlag: boolean = false;
    private _commandDataManager: commandDataManager = new commandDataManager();

    constructor(_renderer: PIXI.SystemRenderer, _stage: PIXI.Container) {
        for (let i: number = 0; i < sortingLayer.Layer.Max; ++i) {
            const _group: PIXI.Container = new PIXI.Container();
            _stage.addChild(_group);
            this._groups.push(_group);
        }
    }

    public start(_sceneNo: number) {
        if (!this._scene) {
            if (_sceneNo > 0 && _sceneNo < this._sceneList.length ) {
                this._scene = this._sceneList[_sceneNo];
                this._initFlag = true;
            }
        }
    }

    public update(_renderer: PIXI.SystemRenderer, _container: PIXI.Container, dt: number) {
        if (this._scene) {
            if (this._initFlag) {
                this._scene.start((_type: commandExecution.eType, _info: commandData.commonInfo) => {
                    if (this._commandDataManager) {
                        this._commandDataManager.addCommand(_type, _info);
                    }
                });
                this._initFlag = false;
            }
            this._scene.update(dt);
            const _nextScene = this._scene.getNextScene();
            if (_nextScene > 0 && _nextScene < this._sceneList.length ) {
                this._scene.exit();
                this._scene = this._sceneList[_nextScene];
                this._initFlag = true;
            }
        }
        const _data: commandData = this._commandDataManager.popCommand();
        if(_data.type > 0) {
            const _commandExecution: commandExecution = new commandExecution();
            _commandExecution.update(_renderer, _container, _data.type, _data.info);
        }
    }

    public addScene(_scene: sceneBase) {
        this._sceneList.push(_scene);
    }

    public resizeWindow(_width: number, _height: number) {
        if (this._scene) {
            this._scene.resizeWindow(_width, _height);
        }
    }
}