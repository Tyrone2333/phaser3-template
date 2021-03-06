export default class Preload extends Phaser.Scene {
    constructor() {
        super({
            key: 'Preload'
        })
    }

     preload() {

        // resource 会和 static 文件夹一样被复制
        this.load.multiatlas('cityscene', './resource/image/walk.json', './resource/image/');

        // set callback for loading progress updates
        this.load.on('progress', this.onProgress, this)
        // this.load.on('fileprogress', this.onFileProgress, this)
        this.load.on('complete', function () {
            console.log("preloadScene 预加载完成")
        })
    }

    sleep(t) {
        return new Promise(resolve => {
            setTimeout(resolve, t)
        })
    }

    async  create() {
        console.log("Promise babel test!!")
        await this.sleep(100)
        this.scene.start('pigLevelScene')
    }


    onProgress(value) {
        console.log("preloadScene 加载进度: " + value)
    }

    onFileProgress(file) {
        // debugger
        console.log('正在加载: ' + file.src)
    }
}
