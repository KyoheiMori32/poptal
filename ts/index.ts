import * as PIXI from 'pixi.js';
import { sceneManager } from './system/scene/sceneManager';
import { sceneType } from './sceneType';
import { sceneBase } from './system/scene/sceneBase';
import { homeScene } from './game/home/scene/homeScene';

// tickerをつくる
const _ticker: PIXI.ticker.Ticker = new PIXI.ticker.Ticker();
// rendererをつくる（WebGLがつかえたらWebGLをつかう）
const _renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
// stageをつくる
const _stage: PIXI.Container = new PIXI.Container();
// SceneManagerを作る
const _sceneManager: sceneManager = new sceneManager(_renderer, _stage);
// Canvasを配置
document.body.appendChild(_renderer.view);
// Layer設定

let delta: number = _ticker.lastTime;
_ticker.add(() => {
    delta = _ticker.lastTime - delta;
    _sceneManager.update(_renderer, _stage, delta);
    _renderer.render(_stage);
    delta = _ticker.lastTime;
});

_sceneManager.addScene(new sceneBase());
_sceneManager.addScene(new homeScene());
_sceneManager.start(sceneType.eScene.Home);

// tickerをスタート
_ticker.start();