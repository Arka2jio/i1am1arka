class instruct extends Phaser.Scene
{
    constructor()
    {
        super("instruct");
    }
    
    preload()
    {
        this.scene.bringToTop();
        ResetKeys();
        this.load.image('insbgImg', 'images/bg.png');
		this.load.audio('InsMusic', 'audio/BGM.mp3');
		this.load.audio('InsClickSFX', 'audio/hookFish.mp3');
    }
    
    create()
    {
        this.bgMusic = this.sound.add('InsMusic', {
	        mute: false,
	        volume: 1,
	        rate: 1,
	        seek: 0,
	        loop: true,
	        delay: 0
	    });
	    this.bgMusic.play();
        
        this.add.image(config.width/2, config.height/2, 'insbgImg').setOrigin(0.5).setScale(0.75);
        var str = ["Use 5 or centre key to catch the fish and score points",
                   "",
                   "But watch out for those pesky eels and sharks!",
                   "",
                   "It's game over if you hook them in",
                   "",
                   "Happy Fishing!!"
                  ];
        this.textHolder = this.add.container(0,0);
        this.textHolder.add(this.add.text(config.width/2,config.height/2,'',{ font: "bold 12px Arial", fill:"#FFFFFF", align:"center", wordWrap: { width: 300 }}).setOrigin(0.5).setText(str));

        this.add.text(config.width/2, config.height - 30, '', { font: 'bold 10px Arial', fill: '#000040', align: 'center'}).setOrigin(0.5).setText("press 5 to play");
        this.add.text(0, config.height - 30, '', { font: 'bold 10px Arial', fill: '#000040', align: 'center'}).setOrigin(0, 0.5).setText("press 2 to go back")


        keyCallback.enter = function(){
            game.scene.getScene('instruct').sound.play('InsClickSFX');
	    	game.scene.getScene('instruct').bgMusic.destroy();
            game.scene.start('gamescene');
        }
        keyCallback.dUp = function(){
            game.scene.getScene('instruct').sound.play('InsClickSFX');
            game.scene.getScene('instruct').bgMusic.destroy();
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































