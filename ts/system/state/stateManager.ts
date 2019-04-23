import { stateBase } from "./stateBase";
import { controllerBase } from "../controller/controllerBase";

export class stateManager {

    private _state: stateBase | null = null;
    private _stateList: stateBase[] = [];
    private _initFlag: boolean = false;

    constructor() {
    }

    public start(_stateNo: number) {
        if (!this._state) {
            if (_stateNo > 0 && _stateNo < this._stateList.length ) {
                this._state = this._stateList[_stateNo];
                this._initFlag = true;
            }
        }
    }

    public update(_controller: controllerBase | null, dt: number) {
        if (this._state) {
            if (this._initFlag) {
                this._state.start(_controller);
                this._initFlag = false;
            }
            this._state.update(_controller, dt);
            const _nextState = this._state.getNextState();
            if (_nextState > 0 && _nextState < this._stateList.length ) {
                this._state.exit(_controller);
                this._state = this._stateList[_nextState];
                this._initFlag = true;
            }
        }
    }

    public getCurrentState(): stateBase | null {
        return this._state;
    }

    protected addState(_state: stateBase) {
        this._stateList.push(_state);
    }
}