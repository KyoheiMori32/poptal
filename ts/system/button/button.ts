import { buttonController } from "./buttonController";
import { stateManager } from "../state/stateManager";
import { buttonStateManager } from "./state/buttonStateManager";

export class button {
    private _controller: buttonController = new buttonController();
    private _buttonStateManager: buttonStateManager = new buttonStateManager();

    public get controller(): buttonController {
        return this._controller;
    }

    public initialize(_path: string, _onClick: () => void) {
        this._controller.initialize(_path, () => {
            this._buttonStateManager.onClick(_onClick);
        });
        this._buttonStateManager.start(buttonStateManager.eState.init);
    }

    public update(dt: number) {
        this._buttonStateManager.update(this._controller, dt);
    }
}