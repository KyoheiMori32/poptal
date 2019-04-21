import * as PIXI from 'pixi.js';

export class buttonController {

    private _sprite: PIXI.Sprite | null = null;
    
    public get sprite(): PIXI.Sprite | null {
        return this._sprite;
    }

    constructor(_path: string, _onClick: () => void) {
        this._sprite = PIXI.Sprite.fromImage(_path);
        // Set the initial position
        this._sprite.anchor.set(0.5);
        this._sprite.x = 0;
        this._sprite.y = 0;
        // Opt-in to interactivity
        this._sprite.interactive = true;
        // Shows hand cursor
        this._sprite.buttonMode = true;
        // Pointers normalize touch and mouse
        this._sprite.on('pointerdown', _onClick);
    }

}