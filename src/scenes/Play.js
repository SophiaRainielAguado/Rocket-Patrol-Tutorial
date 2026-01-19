class Play extends Phaser.Scene{
    constructor(){
        super("playScene")
    }

    create(){
        // Background
        // Tile Sprite
        this.starfield = this.add.tileSprite(0, 0, 640, 480, "starfield") //places tile sprite
            .setOrigin(0, 0)

        // Green UI Background
        this.add.rectangle(0, borderUISize + borderPadding, 
            game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0)

        // White Borders
        this.add.rectangle(0, 0, game.config.width, borderUISize,
            game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0)
        this.add.rectangle(0, game.config.height - borderUISize,
            game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0)
        this.add.rectangle(0, 0, borderUISize, game.config.height, 
            0xFFFFFF).setOrigin(0, 0)
        this.add.rectangle(game.config.width - borderUISize, 0, 
            borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0)


        // Objects
        // add rocket (p1)
        this.p1Rocket = new Rocket(this, game.config.width/2, 
            game.config.height - borderUISize - borderPadding, "rocket")
            .setOrigin(0.5, 0)


        //Key Binds
        // define keys
        keyFIRE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)
        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    }

    update(){
        this.starfield.tilePositionX -= 4   // moves 4 px evert frame
        this.p1Rocket.update()
    }
}