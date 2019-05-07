import { stateBase } from '../../../system/state/stateBase';
import { button } from '../../../system/button/button';
import { homeSceneController } from '../scene/homeSceneController';
import { commandExecution } from '../../../system/command/commandExecution';

export class homeState extends stateBase {

    protected changeWindow(_controller: homeSceneController | null, _width: number, _height: number) {
        if (_controller) {
            const _div: number = Math.floor(_width / 100);
            const _col: number = _div > 7 ? 8 : _div;
            _controller.layout.resetPosition(_col, 100, 100);
            // キャンバスサイズ変更コマンド登録
            const _info: commandExecution.resizeWindowInfo = {
                _width: _width,
                _height: _controller.layout.row * 100,
            }
            _controller.addCommand(commandExecution.eType.ResizeWindow, _info);
        }
    }

    public clickButtonEvent(_button: button) {
    }
}