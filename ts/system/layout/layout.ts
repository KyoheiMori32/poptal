import * as PIXI from 'pixi.js';

export class layout {

    private _root: PIXI.Container = new PIXI.Container();
    private _width: number = 0;
    private _height: number = 0;
    private _column: number = 0;
    private _row: number = 0;

    constructor(_col: number, _width: number, _height: number) {
        this._column = _col;
        this._width = _width;
        this._height = _height;
    }

    public addChild(_container: PIXI.Container) {
        const _index: number = this._root.children.length;
        const _col: number = _index % this._column;
        this._row = Math.floor(_index / this._column);
        this._root.addChild(_container);
        _container.x = _col * this._width + this._width / 2;
        _container.y = this._row * this._height + this._height / 2;
    }

    public resetPosition(_col: number, _width: number, _height: number) {
        this._column = _col;
        this._width = _width;
        this._height = _height;
        
        const _div: number = Math.floor(this._root.children.length / this._column);
        const _rem: number = this._root.children.length % this._column;
        this._row = (_rem > 0) ? (_div + 1) : _div;
        this._root.children.forEach((value: PIXI.DisplayObject, index: number) => {
            const _col: number = index % this._column;
            const _row: number = Math.floor(index / this._row);
            value.x = _col * this._width + this._width / 2;
            value.y = _row * this._height + this._height / 2;
        });
    }
}