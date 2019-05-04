import { controllerBase } from "../controller/controllerBase";

export class thumbnailController extends controllerBase {

    private _background: PIXI.Graphics | null = null;
    private _sprite: PIXI.Sprite | null = null;
    private _path: string | null = null;
    private _width: number = 0;
    private _height: number = 0;
    private _loadFlag: boolean = false;

    public get background(): PIXI.Container | null {
        return this._background;
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

    public initialize(_path: string, _width: number, _height: number) {
        this._path = _path;
        this._width = _width;
        this._height = _height;
    }

    public load() {
        this._background = new PIXI.Graphics();
        this._background.width = this._width;
        this._background.height = this._height;
        this._background.x = this._width / 2;
        this._background.y = this._height / 2;
        this._background.beginFill(0xFFFFFF);
        this._background.drawRect(-this._background.x, -this._background.y, this._width, this._height);
        this._background.endFill();
        this._background.interactive = true;
        if (this._path) {
            this._sprite = PIXI.Sprite.fromImage(this._path);
        }
        if (this._sprite) {
            this._background.addChild(this._sprite);
            // Set the initial position
            this._sprite.anchor.set(0.5);
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
        this._loadFlag = true;
    }

}