import * as PIXI from 'pixi.js';
import { controllerBase } from '../controller/controllerBase';

export class buttonController extends controllerBase {

    private _sprite: PIXI.Sprite | null = null;
    private _path: string | null = null;
    private _onClick: () => void = () => {};
    private _loadFlag: boolean = false;
    
    public get sprite(): PIXI.Sprite | null {
        return this._sprite;
    }

    public get isLoad(): boolean {
        return this._loadFlag;
    }

    constructor() {
        super();
    }

    public initialize(_path: string, _onClick: () => void) {
        this._path = _path;
        this._onClick = _onClick;
    }

    public load() {
        if (this._path) {
            this._sprite = PIXI.Sprite.fromImage(this._path);
        }
        if (this._sprite) {
            // Set the initial position
            this._sprite.anchor.set(0.5);
            this._sprite.x = 0;
            this._sprite.y = 0;
            // Opt-in to interactivity
            this._sprite.interactive = true;
            // Shows hand cursor
            this._sprite.buttonMode = true;
            // Pointers normalize touch and mouse
            this._sprite.on('pointerdown', () => {
                if (this._onClick) {
                    this._onClick();
                }
            });
            this._loadFlag = true;
        }
    }
}