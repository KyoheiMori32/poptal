import * as PIXI from 'pixi.js';

export class layout {

    private _root: PIXI.Container = new PIXI.Container();
    private _width: number = 0;
    private _height: number = 0;
    private _column: number = 0;
    private _row: number = 0;

    public get root(): PIXI.Container {
        return this._root;
    }

    public get row(): number {
        return this._row;
    }

    constructor(_column: number, _width: number, _height: number) {
        this._column = _column;
        this._width = _width;
        this._height = _height;
    }

    public addChild(_container: PIXI.Container) {
        const _index: number = this._root.children.length;
        this._root.addChild(_container);
        this.resetPositionContainer(_container, _index);
    }

    public resetPosition(_column: number, _width: number, _height: number) {
        this._column = _column;
        this._width = _width;
        this._height = _height;
        
        this._row = 0;
        for (let i: number = 0; i < this._root.children.length; ++i) {
            const _container: PIXI.Container = this._root.getChildAt(i);
            this.resetPositionContainer(_container, i);
        }
        ++this._row;
    }

    private resetPositionContainer(_container: PIXI.Container, index: number) {
        const _col: number = index % this._column;
        this._row = Math.floor(index / this._column);
        _container.setTransform((_col * this._width) + (this._width / 2) - (this._column * this._width / 2),
            (this._row * this._height) + (this._height / 2));
    }
}