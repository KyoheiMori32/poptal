import { buttonState } from "./buttonState";
import { buttonController } from "../buttonController";

export class buttonStateWait extends buttonState {

    private _clickEventCallback: (() => void) | null = null;

    protected initialize(_controller: buttonController | null) {
    }

    protected execute(_controller: buttonController | null, dt: number) {
        if (this._clickEventCallback) {
            this._clickEventCallback()
        }
        this._clickEventCallback = null;
    }

    protected end(_controller: buttonController | null) {
    }

    protected clickEvent(_cb: () => void) {
        this._clickEventCallback = _cb;
    }

}