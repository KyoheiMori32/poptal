import { commandExecution } from "../../command/commandExecution";
import { sceneCommandData } from "./sceneCommandData";
import { controllerBase } from "../../controller/controllerBase";
import { sceneManager } from "../sceneManager";

export class sceneCommandExecution extends commandExecution {

    protected execute(_controller: controllerBase, _type: sceneCommandExecution.eType, _info: sceneCommandData.sceneInfo) {
        if (_type == sceneCommandExecution.eType.AddChild) {
            this.addChild(_info as sceneCommandExecution.addChildInfo);
        }
        else if (_type == sceneCommandExecution.eType.ResizeWindow) {
            this.resizeWindow(_info as sceneCommandExecution.resizeWindowInfo);
        }
        else if (_type == sceneCommandExecution.eType.ChangeScene) {
            this.changeScene(_controller, _info as sceneCommandExecution.changeSceneInfo);
        }
    }

    private addChild(_info: sceneCommandExecution.addChildInfo) {
        if (_info._root && _info._container) {
            _info._root.addChild(_info._container);
        }
    }

    private resizeWindow(_info: sceneCommandExecution.resizeWindowInfo) {
        if (_info._renderer) {
            _info._renderer.autoResize = true;
            _info._renderer.resize(_info._width, _info._height);
        }
    }

    private changeScene(_controller: controllerBase, _info: sceneCommandExecution.changeSceneInfo) {
        const _sceneManager: sceneManager = _controller as sceneManager;
        _sceneManager.changeScene(_info._nextScene);
    }

}

export namespace sceneCommandExecution {
    export enum eType {
        None = 0,
        AddChild,
        ResizeWindow,
        ChangeScene,
        Max
    }

    export class addChildInfo implements sceneCommandData.sceneInfo {
        public _renderer: PIXI.SystemRenderer | null = null;
        public _root: PIXI.Container | null = null;
        public _container: PIXI.Container | null = null;
    }

    export class resizeWindowInfo implements sceneCommandData.sceneInfo {
        public _renderer: PIXI.SystemRenderer | null = null;
        public _root: PIXI.Container | null = null;
        public _width: number = 0;
        public _height: number = 0;
    }

    export class changeSceneInfo implements sceneCommandData.sceneInfo {
        public _renderer: PIXI.SystemRenderer | null = null;
        public _root: PIXI.Container | null = null;
        public _nextScene: number = 0;
    }
}
