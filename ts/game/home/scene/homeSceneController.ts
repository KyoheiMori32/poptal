import { sceneController } from '../../../system/sceneController/sceneController';
import { buttonController } from '../../../system/button/buttonController';

export class homeSceneController extends sceneController {

    public initialize() {
        const button: buttonController = new buttonController('assets/pipo-map001_at-yama3.png', () => {
            console.log('aaaaaaaaaaaaaaa');
        });
        this.addChild(button.sprite);
    }

}