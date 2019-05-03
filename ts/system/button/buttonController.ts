import * as PIXI from 'pixi.js';
import { controllerBase } from '../controller/controllerBase';

export class buttonController extends controllerBase {

    private _layout: PIXI.Graphics | null = null;
    private _sprite: PIXI.Sprite | null = null;
    private _path: string | null = null;
    private _width: number = 0;
    private _height: number = 0;
    private _onClick: () => void = () => {};
    private _loadFlag: boolean = false;

    public get layout(): PIXI.Container | null {
        return this._layout;
    }
    
    public get sprite(): PIXI.Sprite | null {
        return this._sprite;
    }

    public get isLoad(): boolean {
        return this._loadFlag;
    }

    constructor() {
        super();
    }

    public initialize(_path: string, _width: number, _height: number, _onClick: () => void) {
        this._path = _path;
        this._onClick = _onClick;
        this._width = _width;
        this._height = _height;
    }

    public load() {
        this._layout = new PIXI.Graphics();
        this._layout.width = this._width;
        this._layout.height = this._height;
        this._layout.x = this._width / 2;
        this._layout.y = this._height / 2;
        this._layout.beginFill(0xFFFFFF);
        this._layout.drawRect(-this._layout.x, -this._layout.y, this._width, this._height);
        this._layout.endFill();
        this._layout.interactive = true;
        // Pointers normalize touch and mouse
        this._layout.on('pointerdown', () => {
            if (this._onClick) {
                this._onClick();
            }
        });
        if (this._path) {
            this._sprite = PIXI.Sprite.fromImage(this._path);
        }
        if (this._sprite) {
            this._layout.addChild(this._sprite);
            // Set the initial position
            this._sprite.anchor.set(0.5);
            this._loadFlag = true;
        }
    }

    public setting() {
        if (this._sprite) {
            const _heightRate: number = this._height / this._sprite.height;
            const _widthCheck: number = this._sprite.width * _heightRate;
            if (this._width < _widthCheck) {
                const _widthRate: number = this._width / this._sprite.width;
                this._sprite.width *= _widthRate;
                this._sprite.height *= _widthRate;
            }
            else {
                this._sprite.width *= _heightRate;
                this._sprite.height *= _heightRate;
            }
        }
    }
}