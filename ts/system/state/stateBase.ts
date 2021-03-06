import { controllerBase } from "../controller/controllerBase";

export class stateBase {

    protected _nextState: number = 0;
    private _changeWindowFlag: boolean = false;
    private _changeWindowWidth: number = 0;
    private _changeWindowHeight: number = 0;

    protected initialize(_controller: controllerBase | null) {
    }

    protected execute(_controller: controllerBase | null, dt: number) {
    }

    protected end(_controller: controllerBase | null) {
    }

    protected changeWindow(_controller: controllerBase | null, _width: number, _height: number) {
    }

    public start(_controller: controllerBase | null) {
        this.initialize(_controller);
    }

    public update(_controller: controllerBase | null, dt: number) {
        if (this._changeWindowFlag) {
            this.changeWindow(_controller, this._changeWindowWidth, this._changeWindowHeight);
        }
        this.execute(_controller, dt);
        this._changeWindowFlag = false;
    }

    public exit(_controller: controllerBase | null) {
        this.end(_controller);
    }

    public getNextState(): number {
        return this._nextState;
    }

    public resizeWindow(_width: number, _height: number) {
        this._changeWindowFlag = true;
        this._changeWindowWidth = _width;
        this._changeWindowHeight = _height;
    }
}