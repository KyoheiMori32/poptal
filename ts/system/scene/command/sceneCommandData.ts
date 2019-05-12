import { commandData } from "../../command/commandData";

export class sceneCommandData extends commandData {
}

export namespace sceneCommandData {
    export interface sceneInfo extends commandData.commonInfo {
        _renderer: PIXI.SystemRenderer | null;
        _root: PIXI.Container | null;
    }
}
