import { stateBase } from '../../../system/state/stateBase';
import { button } from '../../../system/button/button';
import { homeSceneController } from '../scene/homeSceneController';
import { sceneCommandExecution } from '../../../system/scene/command/sceneCommandExecution';

export class homeState extends stateBase {

    protected changeWindow(_controller: homeSceneController | null, _width: number, _height: number) {
        if (_controller) {
            const _div: number = Math.floor(_width / 100);
            const _col: number = _div > 7 ? 8 : _div;
            _controller.layout.resetPosition(_col, 100, 100);
            _controller.layout.root.x = _width / 2;
            // キャンバスサイズ変更コマンド登録
            const _info: sceneCommandExecution.resizeWindowInfo = {
                _renderer: null,
                _root: null,
                _width: _width,
                _height: _controller.layout.row * 100,
            }
            _controller.addCommand(sceneCommandExecution.eType.ResizeWindow, _info);
        }
    }

    public clickButtonEvent(_button: button) {
    }
}