import * as PIXI from 'pixi.js';
import { sceneManager } from './game/sceneManager';

class Container {

    private _sceneManager: sceneManager = new sceneManager();

    constructor () {
    }

    createRenderer(element: HTMLElement) {
        /**
         * STEP.1 元となるコンテナを用意。画面に描画される要素は全てこの下にぶら下がる
         */
        var stage = new PIXI.Container();

        /**
         * STEP.2 描画するためのレンダラーを用意。引数は描画領域の幅、高さ、オプション
         */
        var renderer = PIXI.autoDetectRenderer(640, 360, {
            antialias:        true,     // アンチエイリアスをONに
            backgroundColor : 0x00ffd4, // 背景色
            //  transparent:      true,     // 背景を透過にしたい場合はこちらを指定
        });

        /**
         * STEP.3 #stage のDOM要素に view を追加
         */
        element.appendChild(renderer.view);

        let prevTime = 0;

        /**
         * animation関数を定義
         */
        var animation = (time: number) => {

            if (prevTime > 0) {
                this._sceneManager.update(time - prevTime);
            }
            prevTime = time;
            // 再帰的に次のアニメーションフレームで animation関数を呼び出す
            requestAnimationFrame(animation);

            // 描画
            renderer.render(stage);
        };

        /**
         * animation関数を呼び出す
         */
        animation(0);
    }
}

const contentsElem: HTMLElement | null = document.getElementById('stage');
if(!!contentsElem) {
    const container = new Container();
    container.createRenderer(contentsElem);
}
