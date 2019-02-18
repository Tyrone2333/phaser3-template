let capguy
export default class pigLevelScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'pigLevelScene'
        })
    }

    preload() {
    }

    create() {
        // enable "Trim sprite names" in TexturePacker if you prefer sprite names without .png extension
        var background = this.add.sprite(0,0, 'cityscene', 'background');

         capguy = this.add.sprite(0,400, 'cityscene', 'sprite/0001').setScale(0.5,0.5)
        // animation
        var frameNames = this.anims.generateFrameNames('cityscene', {
            start: 1, // 索引从 1 开始
            end: 8,    // 到 8 结束
            // zeroPad: 4,// 用 0 填充每个帧名,直到 4位长 如 0001
            prefix: 'sprite/000',
            suffix: ''
        });
        console.log(frameNames)
        this.anims.create({key: 'walk', frames: frameNames, frameRate: 10, repeat: -1});
        capguy.anims.play('walk');
    }
    update(time, delta){
        capguy.x += delta / 8;
        if (capguy.x > 800) {
            capguy.x = -50;
        }
    }

}