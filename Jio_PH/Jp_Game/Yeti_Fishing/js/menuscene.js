class menuscene extends Phaser.Scene
{
    constructor()
    {
        super("menuscene");
    }
    
    preload()
    {
        this.scene.bringToTop();
        ResetKeys();
        this.load.image('mmbgImg','images/bg.png');
        this.load.image('mmyetiImg','images/Yeti.png');
        this.load.image('mmlineImg','images/line.png');
        this.load.image('mmhookImg','images/Hook.png');
        this.load.image('mmtitleImg','images/gameName.png');
        this.load.image('mmbtnImg','images/btn.png');
        this.load.audio('MenuMusic','audio/BGM.mp3')
        this.load.audio('mmClickSFX','audio/hookFish.mp3')
    }
    
    create()
    {
        this.bgMusic = this.sound.add('MenuMusic', {
	        mute: false,
	        volume: 1,
	        rate: 1,
	        seek: 0,
	        loop: true,
	        delay: 0
	    });
	    this.bgMusic.play();
        
        this.bg = this.add.image(config.width/2,config.height/2,'mmbgImg').setOrigin(0.5).setScale(0.5);
        this.yeti = this.add.image(config.width/2,config.height/2-30,'mmyetiImg').setOrigin(0.5,1).setScale(0.15);
        
        this.hookLine = this.add.container(config.width/2+35,5);
        this.line = this.add.container(0,0);
        this.line.add(this.add.image(0,0,'mmlineImg').setOrigin(0.5,0).setScale(0.01,0.3));
        this.hookLine.add(this.line);
        
        this.hook = this.add.image(0, this.line.getAt(0).displayHeight, 'mmhookImg').setOrigin(0.5,0).setScale(0.2);
        this.hookLine.add(this.hook);
    
        this.title = this.add.image(config.width/2,config.height/2+15,'mmtitleImg').setOrigin(0.5).setScale(0.15).setAngle(-10);
        
        this.optIndex = 0;
    	this.Options = new Array(0)
	    this.Options.push(this.add.group());
	    this.Options.push(this.add.group());
	    var str = ["PLAY", "INSTRUCTIONS"];
	    for(var i = 0; i < this.Options.length; i++)
	    {
	        this.Options[i].add(this.add.image(config.width/2 - 75 + (i*150), config.height - 30, 'mmbtnImg').setOrigin(0.5).setScale(0.27,0.25))
	        this.Options[i].add(this.add.text(config.width/2 - 75 + (i*150), config.height - 30, '', { font: 'bold 12px Arial', fill: '#FFFFFF', align: 'center'}).setOrigin(0.5).setText(str[i]));
	    }

	    this.ScrollOptions(0,true);

	    keyCallback.dUp = function(){
	    	game.scene.getScene('menuscene').ScrollOptions(-1)
	    }
	    keyCallback.dDown = function(){
	    	game.scene.getScene('menuscene').ScrollOptions(1)
	    }
	    keyCallback.enter = function(){
	    	game.scene.getScene('menuscene').SelectScene();
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

    update()
    {

    }

    DestroyAllVars()
    {
    	this.Options.pop().clear(true,true);
    	this.Options.pop().clear(true,true);
    	this.Options = null;
    	this.optIndex = -1;
    	this.bgMusic.destroy();
    }

    SelectScene()
    {
    	switch(this.optIndex)
    	{
    		case 0:
    			this.DestroyAllVars();
    			game.scene.start('gamescene');
    			break;
			case 1:
    			this.DestroyAllVars();
    			game.scene.start('instruct');
    			break;
    		default:
    			break;
    	}
    }

    ScrollOptions(next, init = false)
    {
    	if(this.Options.length <= 0)
	        return;
	    if(!init)
	    {
	        this.Options[this.optIndex].getChildren()[0].setScale(0.27,0.25);
	        this.Options[this.optIndex].getChildren()[1].setFontSize(12);
            this.sound.play('mmClickSFX');
	    }
	    this.optIndex += next;
	    if(this.optIndex < 0)
	        this.optIndex = this.Options.length - 1;
	    else if(this.optIndex >= this.Options.length)
	        this.optIndex = 0;
	    
	    this.Options[this.optIndex].getChildren()[0].setScale(0.3,0.27);
	    this.Options[this.optIndex].getChildren()[1].setFontSize(14);;
    }
}
class blank extends Phaser.Scene
{
    constructor()
    {
        super("blank");
	}
	
	create()
	{
		adobj = new SceneAD('menuscene', true);
		this.isReady = false;
	}

	update()
	{
		
	}
}





























