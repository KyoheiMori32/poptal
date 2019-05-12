import { commandData } from "./commandData";
import { controllerBase } from "../controller/controllerBase";

export class commandExecution {

    protected execute(_controller: controllerBase, _type: number, _info: commandData.commonInfo) {

    }

    public update(_controller: controllerBase, _type: number, _info: commandData.commonInfo) {
        this.execute(_controller, _type, _info);
    }
}
