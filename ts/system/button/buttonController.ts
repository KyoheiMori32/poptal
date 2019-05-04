import * as PIXI from 'pixi.js';
import { controllerBase } from '../controller/controllerBase';
import { thumbnail } from '../thumbnail/thumbnail';

export class buttonController extends controllerBase {

    private _thumbnail: thumbnail = new thumbnail();
    private _onClick: () => void = () => {};

    public get thumbnail(): thumbnail {
        return this._thumbnail;
    }

    public get isLoad(): boolean {
        return this._thumbnail.controller.isLoad;
    }

    constructor() {
        super();
    }

    public initialize(_path: string, _width: number, _height: number, _onClick: () => void) {
        this._thumbnail.initialize(_path, _width, _height);
        this._onClick = _onClick;
    }

    public setting() {
        if (this._thumbnail.controller.background) {
            // Pointers normalize touch and mouse
            this._thumbnail.controller.background.on('pointerdown', () => {
                if (this._onClick) {
                    this._onClick();
                }
            });
        }
    }
}