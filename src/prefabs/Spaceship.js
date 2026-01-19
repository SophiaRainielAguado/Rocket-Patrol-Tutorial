// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame)
        
        scene.add.existing(this) // add to existing scene
        this.points = pointValue
        this.moveSpeed = 3
    }

    update(){
        //move spaceship LEFT
        this.x -= this.moveSpeed

        //warp from LEFT to RIGHT edge
        if(this.x <= 0 - this.width){
            this.x = game.config.width
        }
    }
}