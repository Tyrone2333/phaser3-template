
// 游戏场景
import preloadScene from "./scene/preloadScene"
import pigLevelScene from "./scene/pigLevelScene"

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    // type: Phaser.AUTO,
    type: Phaser.WEBGL,
    // pixelArt: true,
    roundPixels: true,
    parent: 'phaser-app',
    title: 'Phaser3 Mario',
    // width: window.innerWidth,
    // height: window.innerHeight,
    width: 800,
    height: 600,
    zoom: 1,
    resolution: window.devicePixelRatio,
    autoResize: true,
    transparent: true,
    fps: 30,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: true // 调试开启 arcade sprite 会有边框提示
        }
    },

    scene: [
        preloadScene,
        pigLevelScene,
    ]
};

let game = new Phaser.Game(config);
