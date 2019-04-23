import { stateBase } from "../../state/stateBase";

export class buttonState extends stateBase {

    protected clickEvent(_cb: () => void) {
    }

    public onClick(_cb: () => void) {
        this.clickEvent(_cb);
    }
}