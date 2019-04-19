import * as PIXI from 'pixi.js';
import { sceneBase } from "./sceneBase";
import { sortingLayer } from '../sortingLayer';

export class sceneManager {

    private _groups: PIXI.Container[] = [];
    private _scene: sceneBase | null = null;
    private _sceneList: sceneBase[] = [];
    private _initFlag: boolean = false;

    constructor(_stage: PIXI.Container) {
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

    public update(_container: PIXI.Container, dt: number) {
        if (this._scene) {
            if (this._initFlag) {
                this._scene.start(_container);
                this._initFlag = false;
            }
            this._scene.update(_container, dt);
            const _nextScene = this._scene.getNextScene();
            if (_nextScene > 0 && _nextScene < this._sceneList.length ) {
                this._scene.exit(_container);
                this._scene = this._sceneList[_nextScene];
                this._initFlag = true;
            }
        }
    }

    public addScene(_scene: sceneBase) {
        this._sceneList.push(_scene);
    }
}