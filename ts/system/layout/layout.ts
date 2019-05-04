import * as PIXI from 'pixi.js';

export class layout {

    private _root: PIXI.Container = new PIXI.Container();
    private _width: number = 0;
    private _height: number = 0;
    private _column: number = 0;
    private _row: number = 0;

    constructor(_col: number) {
        this._column = _col;
    }

    public addChild(_container: PIXI.Container) {
        this._root.addChild(_container);
        const _div: number = this._root.children.length / this._column;
        const _rem: number = this._root.children.length % this._column;
        this._row = (_rem > 0) ? (_div + 1) : _div;
        this._root.children.forEach((value: PIXI.DisplayObject, index: number) => {
            
        });
    }
}