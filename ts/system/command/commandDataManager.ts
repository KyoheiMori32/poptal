import { commandData } from "./commandData";

export class commandDataManager {
    private _commandDataList: Array<commandData> = [];

    public addCommand(_type: number, _data: commandData.commonInfo) {
        const _commandData: commandData = new commandData(_type, _data);
        this._commandDataList.push(_commandData);
    }

    public popCommand(): commandData {
        const _commandData: commandData | undefined = this._commandDataList.shift();
        if (_commandData) {
            return _commandData;
        }
        return new commandData(0, {});
    }
}