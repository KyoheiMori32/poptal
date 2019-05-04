import { thumbnailController } from "./thumbnailController";
import { thumbnailStateManager } from "./state/thumbnailStateManager";

export class thumbnail {
    private _controller: thumbnailController = new thumbnailController();
    private _thumbnailStateManager: thumbnailStateManager = new thumbnailStateManager();

    public get controller(): thumbnailController {
        return this._controller;
    }

    public initialize(_path: string, _width: number, _height: number) {
        this._controller.initialize(_path, _width, _height);
        this._thumbnailStateManager.start(thumbnailStateManager.eState.init);
    }

    public update(dt: number) {
        this._thumbnailStateManager.update(this._controller, dt);
    }
}