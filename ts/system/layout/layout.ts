import * as PIXI from 'pixi.js';

export class layout {

    private _root: PIXI.Container = new PIXI.Container();
    private _childList: PIXI.Container[] = [];
    private _width: number = 0;
    private _height: number = 0;
    private _column: number = 0;
    private _row: number = 0;

    public get row(): number {
        return this._row;
    }

    constructor(_column: number, _width: number, _height: number) {
        this._column = _column;
        this._width = _width;
        this._height = _height;
    }

    public addChild(_container: PIXI.Container) {
        const _index: number = this._childList.length;
        const _col: number = _index % this._column;
        this._row = Math.floor(_index / this._column);
        this._root.addChild(_container);
        _container.x = _col * this._width + this._width / 2;
        _container.y = this._row * this._height + this._height / 2;
        this._childList.push(_container);
    }

    public resetPosition(_column: number, _width: number, _height: number) {
        this._column = _column;
        this._width = _width;
        this._height = _height;
        
        const _div: number = Math.floor(this._childList.length / this._column);
        const _rem: number = this._childList.length % this._column;
        this._row = 0;
        for (let i: number = 0; i < this._childList.length; ++i) {
            const _container: PIXI.Container = this._childList[i];
            const _col: number = i % this._column;
            this._row = Math.floor(i / this._column);
            _container.x = _col * this._width + this._width / 2;
            _container.y = this._row * this._height + this._height / 2;
        }
        ++this._row;
    }
}