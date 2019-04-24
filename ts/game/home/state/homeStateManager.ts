import { stateManager } from "../../../system/state/stateManager";
import { homeState } from "./homeState";
import { homeStateInit } from "./homeStateInit";
import { homeStateWait } from "./homeStateWait";
import { button } from "../../../system/button/button";

export class homeStateManager extends stateManager {

    constructor() {
        super();
        this.addState(new homeState());
        this.addState(new homeStateInit());
        this.addState(new homeStateWait());
    }

    public clickButtonEvent(_button: button) {
        const _homeState: homeState = this.getCurrentState() as homeState;
        if (_homeState) {
            _homeState.clickButtonEvent(_button);
        }
    }
}

export namespace homeStateManager {
    export enum eState {
        none = 0,
        init,
        wait,
        max
    }
}