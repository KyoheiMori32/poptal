import { controllerBase } from "../controller/controllerBase";

export class stateBase {

    protected _nextState: number = 0;

    protected initialize(_controller: controllerBase | null) {
    }

    protected execute(_controller: controllerBase | null, dt: number) {
    }

    protected end(_controller: controllerBase | null) {
    }

    public start(_controller: controllerBase | null) {
        this.initialize(_controller);
    }

    public update(_controller: controllerBase | null, dt: number) {
        this.execute(_controller, dt);
    }

    public exit(_controller: controllerBase | null) {
        this.end(_controller);
    }

    public getNextState(): number {
        return this._nextState;
    }
}