import { commandData } from "./commandData";

export class commandExecution {
    public update(_renderer: PIXI.SystemRenderer, _root: PIXI.Container, _type: commandExecution.eType, _info: commandData.commonInfo) {
        if (_type == commandExecution.eType.AddChild) {
            this.addChild(_root, _info as commandExecution.addChildInfo);
        }
        else if (_type == commandExecution.eType.ResizeWindow) {
            this.resizeWindow(_renderer, _info as commandExecution.resizeWindowInfo);
        }
    }

    private addChild(_root: PIXI.Container, _info: commandExecution.addChildInfo) {
        if (_info._container) {
            _root.addChild(_info._container);
        }
    }

    private resizeWindow(_renderer: PIXI.SystemRenderer, _info: commandExecution.resizeWindowInfo) {
        _renderer.autoResize = true;
        _renderer.resize(_info._width, _info._height);
    }
}

export namespace commandExecution {
    export enum eType {
        None = 0,
        AddChild,
        ResizeWindow,
    }

    export class addChildInfo implements commandData.commonInfo {
        public _container: PIXI.Container | null = null;
    }

    export class resizeWindowInfo implements commandData.commonInfo {
        public _width: number = 0;
        public _height: number = 0;
    }
}