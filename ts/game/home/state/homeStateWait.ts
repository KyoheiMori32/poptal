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
            console.log('click');
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