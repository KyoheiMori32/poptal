import { sceneController } from "../sceneController/sceneController";

export class stateBase {

    protected _nextState: number = 0;

    protected initialize(_controller: sceneController | null) {
    }

    protected execute(_controller: sceneController | null, dt: number) {
    }

    protected end(_controller: sceneController | null) {
    }

    public start(_controller: sceneController | null) {
        this.initialize(_controller);
    }

    public update(_controller: sceneController | null, dt: number) {
        this.execute(_controller, dt);
    }

    public exit(_controller: sceneController | null) {
        this.end(_controller);
    }

    public getNextState(): number {
        return this._nextState;
    }
}