import { stateManager } from "../../../system/state/stateManager";
import { homeState } from "./homeState";
import { homeStateInit } from "./homeStateInit";
import { homeStateWait } from "./homeStateWait";

export class homeStateManager extends stateManager {

    constructor() {
        super();
        this.addState(new homeState());
        this.addState(new homeStateInit());
        this.addState(new homeStateWait());
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