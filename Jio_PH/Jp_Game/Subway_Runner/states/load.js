var background;
var splash;
var title;
var loadState = {
   
    
    preload: function(){
        /*---------------------------------IMAGES------------------------------*/
        game.load.image('bg', "assets/bg.png"); 
         game.load.image('bgSun', "assets/bgSun.png"); 
         game.load.image('splash', 'assets/splash.png');
        game.load.image('layer1', 'assets/layer1.png');
        game.load.image('layer2', 'assets/layer2.png');
        
        game.load.image('playerShadow', 'assets/shadow.png');
        
        game.load.image('leftTree', 'assets/leftTree.png');
        game.load.image('rightTree', 'assets/rightTree.png');
        
        game.load.image('sunrise', 'assets/sunrise.png');
        game.load.image('path', 'assets/path.png');
        
        game.load.image('leftTrain', 'assets/leftTrain.png');
        game.load.image('midTrain', 'assets/midTrain.png');
         game.load.image('rightTrain', 'assets/rightTrain.png');
        
        game.load.image('leftBridge', 'assets/leftBridge.png');
        game.load.image('midBridge', 'assets/midBridge.png');
        game.load.image('rightBridge', 'assets/rightBridge.png');
        
         game.load.image('leftHurdle', 'assets/leftHurdle.png');
        game.load.image('midHurdle', 'assets/midHurdle.png');
        game.load.image('rightHurdle', 'assets/rightHurdle.png');
        
         game.load.image('leftHud', 'assets/leftHud.png');
        game.load.image('midHud', 'assets/midHud.png');
        game.load.image('rightHud', 'assets/rightHud.png');
        
                 game.load.image('leftHud', 'assets/leftHud.png');

        
        game.load.spritesheet('mPlayer',"assets/Rajini_Run.png",21,52);
        game.load.spritesheet('leftPlayer',"assets/Left_Run.png",25,52);
        game.load.spritesheet('rightPlayer',"assets/Right_Run.png",25,52);
        
        game.load.spritesheet('lPlayer',"assets/Rajini_Left.png",24,52);
        game.load.spritesheet('rPlayer',"assets/Rajini_Right.png",24,52);
        
        game.load.spritesheet('playerDeath',"assets/Rajni_Death.png",29,52);
        game.load.spritesheet('leftDeath',"assets/Rajini_Left _Death.png",36,52);
        game.load.spritesheet('rightDeath',"assets/Rajini_Right _Death.png",42,52);

        game.load.spritesheet('jump',"assets/Rajini_Jump.png",29,52);
        game.load.spritesheet('leftJump',"assets/Rajini_Left _Jump.png",30,52);
        game.load.spritesheet('rightJump',"assets/Rajini_Right _Jump.png",30,52);

        game.load.spritesheet('slide',"assets/Rajini_Slide.png",20,52);
        game.load.spritesheet('leftSlide',"assets/Rajini_Left _Slide.png",28,52);
        game.load.spritesheet('rightSlide',"assets/Rajini_Right _Slide.png",26,52);
        
        game.load.spritesheet('coin',"assets/coin.png",18,35);

        game.load.audio('crashSound', 'assets/crash.mp3');
        game.load.audio('playMusic', 'assets/music.mp3');
      
    },
     
    create:function(){
        
		timer = game.time.create(1000, false);
        background = game.add.tileSprite(0, 0,
        240, 320, 'splash');
       // title = game.add.tileSprite(26, 0, 187,115,'title');
        
        console.log("create splash.....")
        game.time.events.add(1000,this.menuPage);
		 
        },
    
     menuPage: function() {
         game.time.events.add(500,function () {
             game.state.start('help'); 
            // game.state.start('gameplay'); 
         }, this);     
     }
    
    
}