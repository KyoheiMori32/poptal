import { sceneController } from '../../../system/sceneController/sceneController';

export class homeSceneController extends sceneController {

    public initialize() {
        const sprite: PIXI.Sprite = PIXI.Sprite.from('assets/pipo-map001_at-yama3.png');
        this.addChild(sprite);
    }

}