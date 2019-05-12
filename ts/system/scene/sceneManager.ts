import * as PIXI from 'pixi.js';
import { sceneBase } from "./sceneBase";
import { sortingLayer } from '../sortingLayer';
import { commandData } from '../command/commandData';
import { sceneCommandExecution } from './command/sceneCommandExecution';
import { sceneCommandData } from './command/sceneCommandData';
import { controllerBase } from '../controller/controllerBase';

export class sceneManager extends controllerBase {

    private _groups: PIXI.Container[] = [];
    private _scene: sceneBase | null = null;
    private _sceneList: sceneBase[] = [];
    private _initFlag: boolean = false;

    public get scene(): sceneBase | null {
        return this._scene;
    }

    public get sceneList(): sceneBase[] {
        return this._sceneList;
    }

    constructor(_renderer: PIXI.SystemRenderer, _stage: PIXI.Container) {
        super();
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
                this._scene.start();
                this._initFlag = false;
            }
            const _dataList: commandData[] = this._scene.update(dt);
            _dataList.forEach((_data: commandData) => {
                if(_data.type > 0) {
                    const _commandExecution: sceneCommandExecution = new sceneCommandExecution();
                    const _info: sceneCommandData.sceneInfo = _data.info as sceneCommandData.sceneInfo;
                    _info._renderer = _renderer;
                    _info._root = _container;
                    _commandExecution.update(this, _data.type, _info);
                }
            });
        }
    }

    public addScene(_scene: sceneBase) {
        this._sceneList.push(_scene);
    }

    public changeScene(_nextScene: number) {
        if (_nextScene > 0 && _nextScene < this._sceneList.length ) {
            if (this._scene) {
                this._scene.exit();
            }
            this._scene = this._sceneList[_nextScene];
            this._initFlag = true;
        }
    }

    public resizeWindow(_width: number, _height: number) {
        if (this._scene) {
            this._scene.resizeWindow(_width, _height);
        }
    }
}