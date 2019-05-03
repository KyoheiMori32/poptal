import { buttonController } from "./buttonController";
import { buttonStateManager } from "./state/buttonStateManager";

export class button {
    private _controller: buttonController = new buttonController();
    private _buttonStateManager: buttonStateManager = new buttonStateManager();

    public get controller(): buttonController {
        return this._controller;
    }

    public initialize(_path: string, _width: number, _height: number, _onClick: () => void) {
        this._controller.initialize(_path, _width, _height, () => {
            this._buttonStateManager.onClick(_onClick);
        });
        this._buttonStateManager.start(buttonStateManager.eState.init);
    }

    public update(dt: number) {
        this._buttonStateManager.update(this._controller, dt);
    }
}