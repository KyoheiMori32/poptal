import { commandDataManager } from "../command/commandDataManager";
import { commandData } from "../command/commandData";

export class controllerBase {
    
    private _commandDataManager: commandDataManager = new commandDataManager();

    public addCommand(_type: number, _data: commandData.commonInfo) {
        this._commandDataManager.addCommand(_type, _data);
    }

    public popCommand(): commandData {
        return this._commandDataManager.popCommand();
    }
}