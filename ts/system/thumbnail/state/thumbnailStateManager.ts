import { stateManager } from "../../state/stateManager";
import { thumbnailState } from "./thumbnailState";
import { thumbnailStateInit } from "./thumbnailStateInit";
import { thumbnailStateWait } from "./thumbnailStateWait";

export class thumbnailStateManager extends stateManager {

    constructor() {
        super();
        this.addState(new thumbnailState());
        this.addState(new thumbnailStateInit());
        this.addState(new thumbnailStateWait());
    }
}

export namespace thumbnailStateManager {
    export enum eState {
        none = 0,
        init,
        wait,
        max
    }
}