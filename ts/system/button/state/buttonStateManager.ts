import { stateManager } from "../../state/stateManager";
import { buttonState } from "./buttonState";
import { buttonStateInit } from "./buttonStateInit";
import { buttonStateWait } from "./buttonStateWait";

export class buttonStateManager extends stateManager {

    constructor() {
        super();
        this.addState(new buttonState());
        this.addState(new buttonStateInit());
        this.addState(new buttonStateWait());
    }

    public onClick(_cb: () => void) {
        const _state: buttonState | null = this.getCurrentState() as buttonState;
        if (_state) {
            _state.onClick(_cb);
        }
    }
}

export namespace buttonStateManager {
    export enum eState {
        none = 0,
        init,
        wait,
        max
    }
}