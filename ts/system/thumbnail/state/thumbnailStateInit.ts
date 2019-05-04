import { thumbnailState } from "./thumbnailState";
import { thumbnailController } from "../thumbnailController";
import { thumbnailStateManager } from "./thumbnailStateManager";

export class thumbnailStateInit extends thumbnailState {

    private _loopCount: number = 0;

    protected initialize(_controller: thumbnailController | null) {
        if (_controller) {
            _controller.load();
        }
        this._loopCount = 0;
    }

    protected execute(_controller: thumbnailController | null, dt: number) {
        if (this._loopCount > 1) {
            if (_controller) {
                _controller.setting();
            }
            this._nextState = thumbnailStateManager.eState.wait;
        }
        ++this._loopCount;
    }

    protected end(_controller: thumbnailController | null) {
        this._loopCount = 0;
    }

}