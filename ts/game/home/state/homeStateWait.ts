import { homeState } from "./homeState";
import { homeSceneController } from "../scene/homeSceneController";
import { button } from "../../../system/button/button";
import { commandExecution } from "../../../system/command/commandExecution";

export class homeStateWait extends homeState {

    private _clickFlag: boolean = false;

    protected initialize(_controller: homeSceneController | null) {
        this._clickFlag = false;
    }

    protected execute(_controller: homeSceneController | null, dt: number) {
        if (this._clickFlag) {
            if (_controller) {
                const _info: commandExecution.resizeWindowInfo = {
                    _width: 500,
                    _height: 500,
                }
                _controller.addCommand(commandExecution.eType.ResizeWindow, _info);
            }
        }
        this._clickFlag = false;
    }

    protected end(_controller: homeSceneController | null) {
        this._clickFlag = false;
    }

    public clickButtonEvent(_button: button) {
        this._clickFlag = true;
    }
}