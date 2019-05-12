import { controllerBase } from '../controller/controllerBase';

export class sceneController extends controllerBase {

    protected execute(dt: number) {
    }

    public update(dt: number) {
        this.execute(dt);
    }
}