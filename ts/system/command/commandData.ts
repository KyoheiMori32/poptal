export class commandData {

    private _type: number = 0;
    private _info: commandData.commonInfo = {};

    public get type(): number {
        return this._type;
    }

    public get info(): commandData.commonInfo {
        return this._info;
    }

    constructor(_type: number, _info: commandData.commonInfo) {
        this._type = _type;
        this._info = _info;
    }
}

export namespace commandData {
    export interface commonInfo {
    }
}