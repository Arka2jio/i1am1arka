class gameover extends Phaser.Scene
{
    constructor()
    {
        super("gameover");
    }
    
    preload()
    {
        this.scene.bringToTop();
        ResetKeys();
        this.load.image('gobgImg','images/bg.png');
    	this.load.audio('gameOverMusic', 'audio/BGM.mp3');
    }
    
    create()
    {
        this.bgMusic = this.sound.add('gameOverMusic', {
	        mute: false,
	        volume: 1,
	        rate: 1,
	        seek: 0,
	        loop: false,
	        delay: 0
	    });
	    this.bgMusic.play();
        
//        console.log("go")
        this.bg = this.add.image(config.width/2,config.height/2,'gobgImg').setOrigin(0.5).setScale(0.5);
        
        var str = "HIGHSCORE : " + scoreObject.GetHighScore() + "\nSCORE : " + scoreObject.GetScore();
		this.add.text(config.width/2,config.height/2+30, str, { font: 'bold 20px Arial', fill: '#000040', align: 'center' }).setOrigin(0.5);

        this.add.text(config.width/2, config.height - 30, '', { font: 'bold 10px Arial', fill: '#000040', align: 'center'}).setOrigin(0.5).setText("press 5 to replay");
        this.add.text(0, config.height - 30, '', { font: 'bold 10px Arial', fill: '#000040', align: 'center'}).setOrigin(0, 0.5).setText("press 2 for menu")
        
        keyCallback.enter = function(){
            game.scene.getScene('gameover').bgMusic.destroy();
	    	game.scene.start('gamescene');
	    }
        keyCallback.dUp = function(){
            game.scene.getScene('gameover').bgMusic.destroy();
	    	game.scene.start('menuscene');
        }
        PauseEvent = function(){
			game.scene.getScene('menuscene').Pause();
		}
		UnPauseEvent = function(){
			game.scene.getScene('menuscene').Resume();
		}
	}
	
	Pause()
	{
		this.sound.pauseAll();
		
	}
	
	Resume()
	{
		this.sound.resumeAll();
	}
    
}
































