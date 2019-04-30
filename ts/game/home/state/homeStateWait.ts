import { homeState } from "./homeState";
import { homeSceneController } from "../scene/homeSceneController";
import { button } from "../../../system/button/button";

export class homeStateWait extends homeState {

    protected initialize(_controller: homeSceneController | null) {
    }

    protected execute(_controller: homeSceneController | null, dt: number) {
    }

    protected end(_controller: homeSceneController | null) {
    }

    public clickButtonEvent(_button: button) {
        console.log('aaaaaaaaaaaa');
    }
}