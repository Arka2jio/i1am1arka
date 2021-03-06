//Texts
var banner,loadingText,lableScore;

//Integers
var score,loadingTime,screenWidth,screenHeight,scaleFactorY,scaleFactorX,looperTime,coinGeneratorTime;
var pathSpeed,steps,playerDir,tweenTime,totalObstacles,runTime,totalCoins,treeTotSteps,treeSteps;

//Arrays
var speedYPos = [25,28,32,38,47,60,79,107,150,197]
var scaleXVal = [0.26,0.31,0.38,0.46,0.55,0.66,0.81,1.00,1.30,1.64]
var scaleYVal = [0.16,0.17,0.25,0.31,0.38,0.55,0.76,0.94,1.37,2.09]
var playerXPos= [15,120,225];
var speedYPosConst = [25,28,32,38,47,60,79,107,150,197]
var scaleXFractions=[],scaleYFractions=[],speedGaps = [],speedGapsFraction=[];

var treeConstXpos= [23,30,39,52,73,106,159]
var treeConstYPos= [29,23,15,4,-11,-28,-38]

var treeXpos= [23,30,39,52,73,106,159]
var treeYpos= [29,23,15,4,-11,-28,-38]
/*var rightTreeXpos= [30,39,52,73,106,159]
var rightTreeYpos= [23,15,4,-11,-28,-38]*/

var treeScale= [0.17,0.27,0.42,0.62,0.90,1.13,1.41]
var treeScaleFactor=[],treeGaps=[],treeXGaps=[],treeGapsFraction=[],treeGapsXFraction=[],leftTreeGaps=[],rightTreeGaps=[];
var treeOrgnPos=115;

//Strings
var objNames=["leftTrain","midTrain","rightTrain","leftBridge","midBridge","rightBridge",/*"leftHurdle","midHurdle","rightHurdle",*/
             "leftHud","midHud","rightHud"]
var gameState,playerState;

//Boolean
var isLoaded,jumpBool,slideBool;

//keys
var leftKey,rightKey,fourKey,sixKey,zeroKey,fiveKey,enterKey,twoKey,eightKey,upKey,downKey;

//Sprites
var bg,bgSun,bgLayer1,bgLayer2,bgLayer3;
var path=[],coinSprites=[],midPlayer,leftTransSprite,rightTransSprite,shadowSprite;
var obs=[],obsType=[],obsZoomTween=[],obsInitTween=[],obsScaleInitTween=[],obsTween=[],obsScaleTween=[],obsFadeOutTween=[],
    obsScaleOutTween=[]; 
var coinType=[],coinZoomTween=[],coinInitTween=[],coinScaleInitTween=[],coinTween=[],coinScaleTween=[],coinFadeOutTween=[];
var leftTrees=[],rightTrees=[];

//Animations
var coinSpriteAnim=[],midPlayerAnim,leftTransAnim,rightTransAnim;

//Timers
var moveTimer,coinTimer;

//rectangles
var collisionRect,coinRect;

//sounds
var bgMusic,crashSound;
var scoreLabelTween;
var interstitialAd;

var gameplayState = {
    
    create: function() {   
        
       // game.physics.startSystem(Phaser.Physics.Arcade);
        
        this.score = 0;loadingTime=0;
        steps=0;treeSteps=0;treeTotSteps=9;
        isLoaded=false;   jumpBool=false; slideBool=false;
        gameState="start"
        playerDir=1;
        
        totalObstacles=5;totalCoins=6;
        runTime=0;
        looperTime=100;coinGeneratorTime=500;
        pathSpeed=1;
        screenWidth=240;screenHeight=320;
       
        for(i=0;i<speedYPos.length;i++)
        {
            speedYPos[i]=speedYPosConst[i]+screenHeight/2;
            if(i!=speedYPos.length-1)
                {
                    speedGaps[i]= speedYPos[i+1]-speedYPos[i];
                    speedGapsFraction[i]= (speedGaps[i]-speedGaps[0])/3;
                    scaleXFractions[i]= (scaleXVal[i+1]-scaleXVal[i])/3;
                    scaleYFractions[i]= (scaleYVal[i+1]-scaleYVal[i])/3;
                }
            else
                {
                    scaleXFractions[i]=0;
                    scaleYFractions[i]=0;
                    speedGaps[i]=0;
                    speedGapsFraction[i]=0;
                }
        }
        for(var i=0;i<treeXpos.length;i++)
        {
            treeYpos[i]=treeConstYPos[i];
            switch(i)
            {
                case 0:
                    treeYpos[i]+=35;
                    break;
                case 1:
                    treeYpos[i]+=28;
                    break;
                case 2:
                    treeYpos[i]+=21;
                    break;
                case 3:
                    treeYpos[i]+=12;
                    break;
                case 4:
                    treeYpos[i]+=2;
                    break;
            }
        }
        for(var i=0;i<treeXpos.length;i++)
        {
         
            if(i!=treeXpos.length-1)
            {
                treeGaps[i]= treeYpos[i+1]-treeYpos[i];
                treeXGaps[i]=treeXpos[i+1]-treeXpos[i];
                treeGapsXFraction[i] = (treeXpos[i+1]-treeXpos[i])/treeTotSteps;
                treeGapsFraction[i]= (treeYpos[i+1]-treeYpos[i])/treeTotSteps;
                treeScaleFactor[i]= (treeScale[i+1]-treeScale[i])/treeTotSteps;
            }
            else
            {
                treeScaleFactor[i]=0;
                treeGaps[i]=0;  treeXGaps[i]=0;
                treeGapsFraction[i]=0;
                treeGapsXFraction[i]=0;
            }
        }
        
        bg= game.add.sprite(0,0,"bg");
        bgSun= game.add.sprite(0,0,"bgSun");
        
        this.loadingText = game.add.text(70, 140, "Loading......",
        {
                 font: "20px Arial",
                 fill: "#000000"
        });
        
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        fourKey = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
        sixKey = game.input.keyboard.addKey(Phaser.Keyboard.SIX);
        zeroKey = game.input.keyboard.addKey(Phaser.Keyboard.ZERO);
        fiveKey = game.input.keyboard.addKey(Phaser.Keyboard.FIVE);
        enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        
        twoKey = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
        upKey= game.input.keyboard.addKey(Phaser.Keyboard.UP);
        eightKey = game.input.keyboard.addKey(Phaser.Keyboard.EIGHT);
        downKey= game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        
        bgMusic = game.sound.add('playMusic', 1, false);
        crashSound = game.sound.add('crashSound', 1, false);
    },

    loadAllImages: function()
    {   
       for(var i=0; i<treeXpos.length ; i++)
        {
            leftTrees[i]=game.add.sprite(screenWidth/2-treeXpos[i],treeOrgnPos+treeYpos[i],"leftTree");
            leftTrees[i].anchor.setTo(0.5,0.5);
            leftTrees[i].scale.setTo(treeScale[i],treeScale[i]);
            
            rightTrees[i] = game.add.sprite(screenWidth/2+treeXpos[i],treeOrgnPos+treeYpos[i],"rightTree");
            rightTrees[i].anchor.setTo(0.5,0.5);
            rightTrees[i].scale.setTo(treeScale[i],treeScale[i]);
        }
        
        bgLayer1 = game.add.sprite(0,0,"layer1");
        bgLayer1.y=screenHeight-bgLayer1.height;
        
        //horizontal track
        for(i=0;i<speedYPos.length;i++)
        {
            path[i]= game.add.sprite(0,0,"path");
            path[i].anchor.setTo(0.5, 0.5);
        }

        //vertical track
        bgLayer2 = game.add.sprite(0,0,"layer2");
        bgLayer2.y=screenHeight-bgLayer2.height;
        
        bgLayer3 = game.add.sprite(0,0,"sunrise");
        bgLayer3.anchor.setTo(0.5,0.5);
        bgLayer3.x=screenWidth/2;  bgLayer3.y=screenHeight/2;
        
        //Player
        midPlayer = game.add.sprite(playerXPos[playerDir],270,'mPlayer');
        midPlayer.anchor.setTo(0.5, 0.5);
        midPlayerAnim = midPlayer.animations.add('midPlayerAnim');
        midPlayerAnim.play(15,true);
        
        leftTransSprite = game.add.sprite(0,0,"lPlayer");
        leftTransSprite.anchor.setTo(0.5,0.5);
        leftTransAnim = leftTransSprite.animations.add('leftTransAnim');
        leftTransSprite.alpha=0;
        leftTransAnim.play(0,false);
        
        rightTransSprite = game.add.sprite(0,0,"rPlayer");
        rightTransSprite.anchor.setTo(0.5,0.5);
        rightTransAnim = rightTransSprite.animations.add('rightTransAnim');
        rightTransSprite.alpha=0;
        rightTransAnim.play(0,false);
        
        shadowSprite = game.add.sprite(playerXPos[playerDir],270,'playerShadow');
         shadowSprite.anchor.setTo(0.5, 0.5);
                
        scaleFactorY=pathSpeed/(bgLayer1.y+path[0].height);
        scaleFactorX= 0.13;

        for(var i=0;i<path.length;i++)
        {
            path[i].scale.setTo(scaleXVal[i], scaleYVal[i]);
            path[i].x= screenWidth/2;
            path[i].y=speedYPos[i];  
           // console.log(path[i].y)
        }
        
        for(var i=0; i< totalCoins;i++)
        {
            coinSprites[i] =  game.add.sprite(0,0,"coin");
            coinSpriteAnim[i] = coinSprites[i].animations.add('coinSpritesAnim');
            coinSpriteAnim[i].play(10,true);
            coinSprites[i].anchor.setTo(0.5, 0.5);
            coinSprites[i].alpha=0;
        }
        
        moveTimer = game.time.create(false);
        moveTimer.loop(looperTime, this.movePath, this);
        moveTimer.start();

        coinTimer = game.time.create(false);
        coinTimer.loop(coinGeneratorTime,this.generateCoins,this);
        coinTimer.start();
        
        tweenTime=looperTime*12;//27 is prev
        
        collisionRect =  new Phaser.Rectangle(midPlayer.x-5 ,midPlayer.y-30, 15, 15);
        coinRect =   new Phaser.Rectangle(0 ,0, 10, 20);
        //coinRect.anchor.setTo(0.5,0.5);
        
        this.generateObstacles();
        //this.generateCoins();
          this.cacheAds(); 
    },
    
    startGame : function(){

        this.loadAllImages();
        
        
        lableScore = game.add.text(120,15, "0",
        {
            font: "bold 20px Arial",
            fill: "black"
        });  
        
        scoreLabelTween = game.add.tween(lableScore.scale).to({ x: 1.5, y: 1.5}, 200, Phaser.Easing.Linear.In).to({ x: 1, y: 1}, 200, Phaser.Easing.Linear.In);

        this.banner = game.add.text(120, 120, "", {
            font: "bold 25px Arial",
            fill: "black",
            align: "center"
        });
        this.banner.anchor.setTo(0.5, 0.5);  

    /*------------------------------------------ key events--------------------------*/
         leftKey.onDown.add(this.leftShift,this);
         fourKey.onDown.add(this.leftShift,this);
        
         rightKey.onDown.add(this.rightShift,this);
         sixKey.onDown.add(this.rightShift, this);
        
        twoKey.onDown.add(this.playerJump,this);  
        upKey.onDown.add(this.playerJump,this);  
        
        eightKey.onDown.add(this.playerSlide,this);  
        downKey.onDown.add(this.playerSlide,this);  
        
        zeroKey.onDown.add(this.pauseMethod, this);

        gameState="play";
        bgMusic.play('', 0,0.5, true);
        bgMusic.onLoop.add(this.playMusic, this);
        bgMusic.volume=0.5;

    },
    playMusic : function(){
        bgMusic.play('', 0, 0.5, true);
        bgMusic.volume=0.5;
    },
    
    pauseMethod: function(){
         
         if (game.paused || gameState.localeCompare("paused")==0) {
                    gameState=playerState;
                    this.banner.setText("");
                    game && game.gameResumed();                 
                } else {
                    this.banner.setText("Game paused");
                    playerState=gameState;
                    gameState="paused";
                    game && game.gamePaused();
                }
     },
    
   
    update: function() 
    { 
		 window.onscroll = function () { window.scrollTo(0,0);}
            if(!isLoaded)
            {
                loadingTime += game.time.elapsed;
                if(loadingTime>1000)
                {
                    this.loadingText.destroy();
                    isLoaded=true;
                    this.startGame();
                }
            }
        else{
           switch(gameState)
            {
                case "paused":
                    game && game.gamePaused();
                    break;
                case "play":
                    this.runGame();
                    
                    if(midPlayer.alpha==1)
                    this.checkCollision();
                    
                    break;
            }
            bgLayer3.bringToTop();
            lableScore.text = this.score;
        }
    }, 
    movePath: function()
    {
        if(gameState.localeCompare("play")==0)
        {
            
            runTime++;
            if(runTime%2==0)
            this.score++;
        
            if(runTime>(tweenTime/70))
                {
                    runTime=0;
                    //console.log("generate obstacle");
                    this.generateObstacles();
                }
            if(path[0].y == speedYPos[1] )
            {
                steps=0;
                for(var k=0;k<path.length;k++)
                {
                    path[k].scale.setTo(scaleXVal[k], scaleYVal[k]);
                    path[k].y = speedYPos[k];
                 }
                 
            }
          //  console.log(leftTrees[0].y+"ypos"+(treeOrgnPos+treeYpos[1]))
                         steps++;

      if( treeSteps == treeTotSteps)
            {
               treeSteps=0;     
                for(var i=0;i<leftTrees.length;i++)
                {
                    leftTrees[i].scale.setTo(treeScale[i], treeScale[i]);
                     leftTrees[i].x = screenWidth/2-treeXpos[i];
                     leftTrees[i].y = treeOrgnPos+treeYpos[i];
                    
                    rightTrees[i].scale.setTo(treeScale[i], treeScale[i]);
                    rightTrees[i].x = screenWidth/2+treeXpos[i];
                     rightTrees[i].y = treeOrgnPos+treeYpos[i];
                }
            }
            treeSteps++;
             for(var i=0;i<leftTrees.length;i++)
                {
                    //console.log(treeGapsXFraction[1])
                    leftTrees[i].x -= treeGapsXFraction[i];
                    leftTrees[i].y += treeGapsFraction[i];
                    leftTrees[i].scale.setTo(treeScale[i]+(treeScaleFactor[i]*treeSteps), treeScale[i]+(treeScaleFactor[i]*treeSteps));

                    rightTrees[i].x += treeGapsXFraction[i];
                    rightTrees[i].y += treeGapsFraction[i];
                    rightTrees[i].scale.setTo(treeScale[i]+(treeScaleFactor[i]*treeSteps), treeScale[i]+(treeScaleFactor[i]*treeSteps));
                }
            
            for(var i=0;i<path.length;i++)
            { 
                path[i].y += pathSpeed+speedGapsFraction[i];
                path[i].scale.setTo(scaleXVal[i]+(scaleXFractions[i]*steps), scaleYVal[i]+(scaleYFractions[i]*steps));
            }   
           
        }
    },
    generateObstacles: function()
    {
        var randomIndex = Math.floor(Math.random() * objNames.length);
        
        var rndNo=Math.floor(Math.random() * 2);
        var isOneMore=false;
        if(rndNo==0 && this.score>10)
        {
            isOneMore=true; 
        }
        this.createObstacle(randomIndex,isOneMore);
        
    },
    createCoins: function(coinNo,placementId)
    {
       switch(placementId)
       {
           case 0: //left
                coinZoomTween[coinNo] = game.add.tween(coinSprites[coinNo].scale).to( { x: 0.15,y:0.15 }, 1000,Phaser.Easing.Linear.None, true,100);
                coinZoomTween[coinNo].onComplete.addOnce(function(){
                //obs[obsNo].y=180;
                  coinZoomTween[coinNo].stop();
                coinScaleInitTween[coinNo]=  game.add.tween(coinSprites[coinNo].scale).to( { x: 0.9,y:0.9}, tweenTime+(tweenTime/2),Phaser.Easing.Linear.None, true,0);
                coinInitTween[coinNo] = game.add.tween(coinSprites[coinNo]).to( {x:40, y: 230 }, tweenTime+(tweenTime/2),Phaser.Easing.Linear.None, true,0);
                coinInitTween[coinNo].onComplete.addOnce(function(){
                    coinScaleInitTween[coinNo].stop();
                    coinInitTween[coinNo].stop();
                    
                    //obs[obsNo].scale.x=0.65;obs[obsNo].scale.y=0.65;
                    coinScaleTween[coinNo] = game.add.tween(coinSprites[coinNo].scale).to( { x: 1,y:1 }, tweenTime-(tweenTime/2),Phaser.Easing.Linear.None, true,0);
                    coinTween[coinNo] = game.add.tween(coinSprites[coinNo]).to( {x:-5, y: 320 }, tweenTime/2+50,Phaser.Easing.Linear.None, true,0);
                    coinTween[coinNo].onComplete.addOnce(function(){
                        coinScaleTween[coinNo].stop();
                        coinTween[coinNo].stop();
                            coinFadeOutTween[coinNo]=game.add.tween(coinSprites[coinNo]).to( {x:-30, y: 380 }, 500,Phaser.Easing.Linear.None, true,0);
                            coinFadeOutTween[coinNo].onComplete.addOnce(function(){
                                    coinFadeOutTween[coinNo].stop();
                                    coinSprites[coinNo].alpha=0;
                            },this);
                    }, this);
                },this);
            },this);
            
               break;
           case 1://centre
               coinZoomTween[coinNo] = game.add.tween(coinSprites[coinNo].scale).to( { x: 0.15,y:0.15 }, 1000,Phaser.Easing.Linear.None, true,100);
                coinZoomTween[coinNo].onComplete.addOnce(function(){
                //obs[obsNo].y=180;
                  coinZoomTween[coinNo].stop();
                coinScaleInitTween[coinNo]=  game.add.tween(coinSprites[coinNo].scale).to( { x: 0.9,y:0.9}, tweenTime+(tweenTime/2),Phaser.Easing.Linear.None, true,0);
                coinInitTween[coinNo] = game.add.tween(coinSprites[coinNo]).to( { y: 230 }, tweenTime+(tweenTime/2),Phaser.Easing.Linear.None, true,0);
                coinInitTween[coinNo].onComplete.addOnce(function(){
                    coinScaleInitTween[coinNo].stop();
                    coinInitTween[coinNo].stop();
                    
                    //obs[obsNo].scale.x=0.65;obs[obsNo].scale.y=0.65;
                    coinScaleTween[coinNo] = game.add.tween(coinSprites[coinNo].scale).to( { x: 1,y:1 }, tweenTime-(tweenTime/2),Phaser.Easing.Linear.None, true,0);
                    coinTween[coinNo] = game.add.tween(coinSprites[coinNo]).to( { y: 320 }, tweenTime/2+50,Phaser.Easing.Linear.None, true,0);
                    coinTween[coinNo].onComplete.addOnce(function(){
                        coinScaleTween[coinNo].stop();
                        coinTween[coinNo].stop();
                            coinFadeOutTween[coinNo]=game.add.tween(coinSprites[coinNo]).to( { y: 380 }, 500,Phaser.Easing.Linear.None, true,0);
                            coinFadeOutTween[coinNo].onComplete.addOnce(function(){
                                 coinFadeOutTween[coinNo].stop();
                                    coinSprites[coinNo].alpha=0;
                            },this);
                    }, this);
                },this);
            },this);
            
               break;
            case 2 ://right
               coinZoomTween[coinNo] = game.add.tween(coinSprites[coinNo].scale).to( { x: 0.15,y:0.15 }, 1000,Phaser.Easing.Linear.None, true,100);
                coinZoomTween[coinNo].onComplete.addOnce(function(){
                //obs[obsNo].y=180;
                  coinZoomTween[coinNo].stop();
                coinScaleInitTween[coinNo]=  game.add.tween(coinSprites[coinNo].scale).to( { x: 0.9,y:0.9}, tweenTime+(tweenTime/2),Phaser.Easing.Linear.None, true,0);
                coinInitTween[coinNo] = game.add.tween(coinSprites[coinNo]).to( {x:200, y: 230 }, tweenTime+(tweenTime/2),Phaser.Easing.Linear.None, true,0);
                coinInitTween[coinNo].onComplete.addOnce(function(){
                    coinScaleInitTween[coinNo].stop();
                    coinInitTween[coinNo].stop();
                      
                    //obs[obsNo].scale.x=0.65;obs[obsNo].scale.y=0.65;
                    coinScaleTween[coinNo] = game.add.tween(coinSprites[coinNo].scale).to( { x: 1,y:1 }, tweenTime-(tweenTime/2),Phaser.Easing.Linear.None, true,0);
                    coinTween[coinNo] = game.add.tween(coinSprites[coinNo]).to( {x:250, y: 320 }, tweenTime/2 + 50,Phaser.Easing.Linear.None, true,0);
                    coinTween[coinNo].onComplete.addOnce(function(){ 
                        coinScaleTween[coinNo].stop();
                        coinTween[coinNo].stop();
                            coinFadeOutTween[coinNo]=game.add.tween(coinSprites[coinNo]).to( { x:270,y: 380 }, 500,Phaser.Easing.Linear.None, true,0);
                            coinFadeOutTween[coinNo].onComplete.addOnce(function(){
                                 coinFadeOutTween[coinNo].stop();
                                 coinSprites[coinNo].alpha=0;
                            },this);
                    }, this);
                },this);
            },this);
            
               break;
               
       }
    },
    createObstacle: function(randomIndex,isOneMore)
    {
        
        var obsNo=-1;
        for(var i=0;i<totalObstacles;i++)
        {
            if(obs[i]==null)
            {
                obsNo=i;
                break;
            }
        }

        //randomIndex=1; //comment it
        
        if(obsNo!=-1 && objNames[randomIndex].includes("mid"))
        {
            obsType[obsNo]=randomIndex;
            obs[obsNo] = game.add.sprite(120,183,objNames[randomIndex]);
            obs[obsNo].anchor.setTo(0.5, 0.5);
            obs[obsNo].scale.x=0.1;obs[obsNo].scale.y=0.1;
       
                obsScaleInitTween[obsNo]=  game.add.tween(obs[obsNo].scale).to( { x:2.5,y:2.5}, tweenTime*3,Phaser.Easing.Circular.In, true,0);
                obsInitTween[obsNo] = game.add.tween(obs[obsNo]).to( { y: 460 }, (tweenTime*3),Phaser.Easing.Circular.In, true,0);
                
                obsInitTween[obsNo].onComplete.addOnce(function(){
                    obsScaleInitTween[obsNo].stop();
                    obsInitTween[obsNo].stop();
                      obs[obsNo].kill();
                                    obs[obsNo]=null;               
                },this);            
            if(isOneMore)
            {
                var rndNum=Math.floor(Math.random() * 20);
                if(rndNum%2==0)        
                {    
                   randomIndex = 0 + (Math.floor(Math.random() * 3)*3); 
                }
                else
                {
                    randomIndex = 2 + (Math.floor(Math.random() * 3)*3);  
                }
                isOneMore=false;
                this.createObstacle(randomIndex,isOneMore);
            }

        }     
        else if(obsNo!=-1 && objNames[randomIndex].includes("left"))
        {
            obsType[obsNo]=randomIndex;
            obs[obsNo] = game.add.sprite(92,183,objNames[randomIndex]);
            obs[obsNo].anchor.setTo(0.5, 0.5);
        
            obs[obsNo].scale.x=0.01;obs[obsNo].scale.y=0.01;
            
            
                obsScaleInitTween[obsNo]=  game.add.tween(obs[obsNo].scale).to( { x:3,y:3}, tweenTime*3,Phaser.Easing.Circular.In, true,0);
                obsInitTween[obsNo] = game.add.tween(obs[obsNo]).to( {x:-140, y: 420 }, (tweenTime*3),Phaser.Easing.Circular.In, true,0);
                
                obsInitTween[obsNo].onComplete.addOnce(function(){
                    obsScaleInitTween[obsNo].stop();
                    obsInitTween[obsNo].stop();
                      obs[obsNo].kill();
                                    obs[obsNo]=null;               
                },this);      
    
            if(isOneMore)
            {
                var rndNum=Math.floor(Math.random() * 20);
                if(rndNum%2==0)        
                {    
                   randomIndex = 1 + (Math.floor(Math.random() * 3)*3); 
                }
                else
                {
                    randomIndex = 2 + (Math.floor(Math.random() * 3)*3);  
                }
                isOneMore=false;
                this.createObstacle(randomIndex,isOneMore);
            }
        }
        else if(obsNo!=-1 && objNames[randomIndex].includes("right"))
        {
            obsType[obsNo]=randomIndex;//140,183
            obs[obsNo] = game.add.sprite(148,183,objNames[randomIndex]);
            obs[obsNo].anchor.setTo(0.5, 0.5);
        
            obs[obsNo].scale.x=0.05;obs[obsNo].scale.y=0.05;
          
         
            obsScaleInitTween[obsNo]=  game.add.tween(obs[obsNo].scale).to( { x:3,y:3}, tweenTime*3,Phaser.Easing.Circular.In, true,0);
             
            
                obsInitTween[obsNo] = game.add.tween(obs[obsNo]).to( {x:380, y: 420 }, (tweenTime*3),Phaser.Easing.Circular.In, true,0);
                
                obsInitTween[obsNo].onComplete.addOnce(function(){
                    obsScaleInitTween[obsNo].stop();
                    obsInitTween[obsNo].stop();
                      obs[obsNo].kill();
                                    obs[obsNo]=null;               
                },this);      
            
           if(isOneMore)
            {
                var rndNum=Math.floor(Math.random() * 20);
                 if(rndNum%2==0)        
                {    
                   randomIndex = 0 + (Math.floor(Math.random() * 3)*3); 
                }
                else
                {
                    randomIndex = 1 + (Math.floor(Math.random() * 3)*3);  
                }
                isOneMore=false;
                this.createObstacle(randomIndex,isOneMore);
            } 
            
        }
        shadowSprite.bringToTop();
        midPlayer.bringToTop();
    },
    generateCoins: function()
    {        
        for(var i=0;i<totalCoins;i++)
        {
            if(coinSprites[i].alpha==0)
            {
                coinSprites[i].alpha=1;
                var rndNo=Math.floor(Math.random() * 3);//For left-0,mid-1,right-2
                switch(rndNo)
                    {
                        case 0:
                            coinSprites[i].x=92;coinSprites[i].y=183;
                            break;
                        case 1:
                            coinSprites[i].x=120;coinSprites[i].y=183;
                            break;
                        case 2:
                            coinSprites[i].x=148;coinSprites[i].y=185;
                            break;
                    }
                 for(var j=0;j<totalObstacles;j++)
                   {
                       if(obs[j]!=null && this.checkOverlapSprite(coinSprites[i],obs[j]))
                           {
                               coinSprites[i].alpha=0;
                               break;
                           }
                        else if(j== totalObstacles-1)
                           {
                                coinSprites[i].scale.x=0.01;coinSprites[i].scale.y=0.01;
                                this.createCoins(i,rndNo); 
                           }
                   }
              
                break;
            }
        }
    },
    runGame: function()
    {
        
        shadowSprite.alpha=midPlayer.alpha;
        shadowSprite.x=midPlayer.x;shadowSprite.y=midPlayer.y+30;
        collisionRect.x=playerXPos[playerDir]-5;collisionRect.y=midPlayer.y-20;
        
     //  game.debug.geom(collisionRect,'#ff0000');

        if(jumpBool)
            {
                 midPlayer.bringToTop();
            }
        if(midPlayerAnim!=null && midPlayerAnim._frameIndex==8)
        {
            if(jumpBool )
                {
                    midPlayerAnim.play(0,false);
                }
            else if(slideBool)
                {
                    slideBool=false;
                    this.changePlayerDirection();
                }
            else
            midPlayerAnim._frameIndex=0;
        }
        else if(slideBool && midPlayerAnim._frameIndex==4)
         {
                slideBool=false;
                this.changePlayerDirection();
              midPlayerAnim._frameIndex=0;
        }
    },
    playerJump: function()
    {
        if(!slideBool && !jumpBool && gameState.localeCompare("play")==0 && midPlayer.alpha==1)
        {
            jumpBool=true;
           //gameState="jump";
            midPlayerAnim.play(0,true);
            switch(playerDir)
            {
                case 0:
                    midPlayer.loadTexture('leftJump');   
                    break;
                case 1:
                    midPlayer.loadTexture('jump');   
                    break;
                case 2:
                    midPlayer.loadTexture('rightJump');   
                    break;
            }
            midPlayer.reset(playerXPos[playerDir],270);         
            midPlayerAnim=null;
            midPlayerAnim = midPlayer.animations.add('midPlayerAnim');
          
            switch(playerDir)
            {
                case 0:
                      midPlayerAnim.play(5,false); 
                    break;
                case 1:
                     midPlayerAnim.play(8,false); 
                    break;
                case 2:
                      midPlayerAnim.play(5,false);    
                    break;
            }
            
            var Tween= game.add.tween(midPlayer).to( { y: 200 }, 600,Phaser.Easing.Linear.None, true,0);
            Tween.onComplete.addOnce(function(){
                    Tween.stop();
                 var Tween1= game.add.tween(midPlayer).to( { y: 270 }, 300,Phaser.Easing.Linear.None, true,0);
                 Tween1.onComplete.addOnce(function(){
                     Tween1.stop();
                     jumpBool=false;
                     this.changePlayerDirection();
             
                       },this);
            },this);
        }
    },
    playerSlide: function()
    {
        if(!slideBool &&!jumpBool && gameState.localeCompare("play")==0)
            {
                slideBool=true;
                midPlayerAnim.play(0,true);
                switch(playerDir)
                {
                    case 0:
                        midPlayer.loadTexture('leftSlide');   
                        break;
                    case 1:
                        midPlayer.loadTexture('slide');   
                        break;
                    case 2:
                        midPlayer.loadTexture('rightSlide');   
                        break;
                }
                midPlayer.reset(playerXPos[playerDir],270);         
                midPlayerAnim=null;
                midPlayerAnim = midPlayer.animations.add('midPlayerAnim');
                midPlayerAnim.play(4,false); 
               /*  switch(playerDir)
                {
                    case 0:
                          midPlayerAnim.play(5,false); 
                        break;
                    case 1:
                          midPlayerAnim.play(6,false); 
                        break;
                    case 2:
                          midPlayerAnim.play(5,false);  
                        break;
                }*/
            }
    },
    
    leftShift: function()
    {
        if(gameState.localeCompare("play")==0 && midPlayer.alpha==1 && !jumpBool && !slideBool)
        {
            if(playerDir>0)
            {
                playerDir--; 
                this.switchPlayer("left");
            //this.changePlayerDirection();
            }
        }
    },
    rightShift: function()
    {
        if(gameState.localeCompare("play")==0 && midPlayer.alpha==1 && !jumpBool && !slideBool)
        {
            if(playerDir<2)
            {
                playerDir++;
                this.switchPlayer("right");
                //this.changePlayerDirection();
            }   
        }
    },
    changePlayerDirection: function()
    {
        midPlayerAnim.play(0,true);
        switch(playerDir)
        {
            case 0:
                midPlayer.loadTexture('leftPlayer');   
                break;
            case 1:
                midPlayer.loadTexture('mPlayer');   
                break;
            case 2:
                midPlayer.loadTexture('rightPlayer');   
                break;
        }
        midPlayer.reset(playerXPos[playerDir],270);         
        midPlayerAnim=null;
        midPlayerAnim = midPlayer.animations.add('midPlayerAnim');
        midPlayerAnim.play(15,true); 
        
        midPlayer.alpha=1;
        leftTransSprite.alpha=0;
        rightTransSprite.alpha=0;
    },
    checkCollision: function()
    {
        for(var i=0; i<totalObstacles;i++)
            {
             collisionRect.y=midPlayer.y-20;
                    if(obs[i]!=null && slideBool&& objNames[obsType[i]].includes("Bridge"))
                    {
                        obs[i].bringToTop();   
                     }
                    else if(obs[i]!=null && jumpBool && objNames[obsType[i]].includes("Bridge"))
                    {
                        collisionRect.y=midPlayer.y;
                        if(obs[i]!=null && (midPlayer.alpha==1 && this.checkOverlap(obs[i],collisionRect,3)))
                        {   
                        gameState="gameover";
                        bgMusic.stop();
                        crashSound.play('', 0, 1, false);
                       
                        game.tweens.removeAll();
                        midPlayerAnim.play(0,true);
                        this.endGame();
                        }
                    }
                    else if(playerDir!=1 && obs[i]!=null && jumpBool && objNames[obsType[i]].includes("Hud"))
                    {
                        collisionRect.y=midPlayer.y-40;
                        if(obs[i]!=null && (midPlayer.alpha==1 && this.checkOverlap(obs[i],collisionRect,4)))
                        {   
                        gameState="gameover";
                        bgMusic.stop();
                        crashSound.play('', 0, 1, false);
                       
                        game.tweens.removeAll();
                        midPlayerAnim.play(0,true);
                        this.endGame();
                        }
                    }
                    else if(obs[i]!=null && (midPlayer.alpha==1 && this.checkOverlap(obs[i],collisionRect,0)))
                    {   
                        gameState="gameover";
                        bgMusic.stop();
                        crashSound.play('', 0, 1, false);
                       
                      //  game.sound.stopAll();
                        game.tweens.removeAll();
                        midPlayerAnim.play(0,true);
                        this.endGame();
                    }
                 
               for(var j=0; j<coinSprites.length;j++)
                {
                    if(coinSprites[j]!=null && coinSprites[j].alpha==1 && coinSprites[j].y <190)
                    {
                     
                            coinRect.x= coinSprites[j].x; 
                            coinRect.y= coinSprites[j].y-10;
                        
                            if(obs[i]!=null && this.checkOverlap(obs[i],coinRect,2))
                            {
                                coinSprites[j].alpha=0;
                                   if(coinInitTween[j]!=null)
                                        coinInitTween[j].stop();
                                   if(coinScaleInitTween[j]!=null)
                                        coinScaleInitTween[j].stop();
                                   if(coinScaleTween[j]!=null)
                                        coinScaleTween[j].stop();
                                   if(coinFadeOutTween[j]!=null)
                                        coinFadeOutTween[j].stop();
                                   if(coinTween[j]!=null)
                                        coinTween[j].stop();
                                   if(coinZoomTween[j]!=null)
                                        coinZoomTween[j].stop();
                            }
                    }
                }
              
            }
        for(var i=0; i<totalCoins;i++)
            {
                if(coinSprites[i]!=null &&coinSprites[i].alpha==1 && midPlayer.alpha==1 && this.checkOverlap(coinSprites[i],collisionRect,1))
                    {    
                        coinSprites[i].alpha=0;
                        this.score= this.score+5;
                        this.createScoreAnimation(coinSprites[i].x-20,coinSprites[i].y,"+5",this.score)
                            if(coinInitTween[i]!=null)
                                coinInitTween[i].stop();
                           if(coinScaleInitTween[i]!=null)
                                coinScaleInitTween[i].stop();
                           if(coinScaleTween[i]!=null)
                                coinScaleTween[i].stop();
                           if(coinFadeOutTween[i]!=null)
                                coinFadeOutTween[i].stop();
                           if(coinTween[i]!=null)
                                coinTween[i].stop();
                           if(coinZoomTween[i]!=null)
                                coinZoomTween[i].stop();
                    }
            }
    },
    createScoreAnimation: function(x, y, message, score){
        var self = this;
        var scoreFont = "20px Arial";

        var scoreAnimation = game.add.text(x+20, y-10, message, {font: scoreFont, fill: "#39d179", stroke: "#ffffff", strokeThickness: 5});

        //Tween this score label to the total score label
        var scoreTween = game.add.tween(scoreAnimation).to({x:lableScore.x, y: lableScore.y}, 200, Phaser.Easing.Exponential.In, true);

        //When the animation finishes, destroy this score label, trigger the total score labels animation and add the score
        scoreTween.onComplete.add(function(){
            scoreAnimation.destroy();
            scoreTween.stop();
            scoreLabelTween.start();
        }, self);
    },
    checkOverlap: function(spriteA, rectB,type) {
        switch (type)
            {
                case 0:
                    if(playerDir==1 && spriteA.scale.x>0.9 && spriteA.scale.x<1.2 && midPlayer.alpha==1)
                    { 
                        //console.log(spriteA.scale.x)
                        var boundsA = spriteA.getBounds();
                        return Phaser.Rectangle.intersects(boundsA, rectB);
                    }
                    else if(playerDir!=1 && spriteA.scale.x>0.9 && spriteA.scale.x<1.2 && midPlayer.alpha==1)
                    {
                       // console.log(spriteA.scale.x)
                        var boundsA = spriteA.getBounds();
                        return Phaser.Rectangle.intersects(boundsA, rectB);  
                    }
                    break;
               
                case 1:
                    if(spriteA.scale.x>0.9 && spriteA.scale.x<1 && midPlayer.alpha==1)
                    { 
                        var boundsA = spriteA.getBounds();
                        return Phaser.Rectangle.intersects(boundsA, rectB);
                    }
                    break;
                case 2:
                      var boundsA = spriteA.getBounds();
                        return Phaser.Rectangle.intersects(boundsA, rectB);  
                    break;
                case 3:
                    if(playerDir==1 && spriteA.scale.x>0.8 && spriteA.scale.x<1.2 && midPlayer.alpha==1)
                    { 
                        //console.log(spriteA.scale.x)
                        var boundsA = spriteA.getBounds();
                        return Phaser.Rectangle.intersects(boundsA, rectB);
                    }
                    else if(playerDir!=1 && spriteA.scale.x>0.9 && spriteA.scale.x<1.2 && midPlayer.alpha==1)
                    {
                       // console.log(spriteA.scale.x)
                             var boundsA = spriteA.getBounds();
                        return Phaser.Rectangle.intersects(boundsA, rectB);  
                    }
                case 4:
                    if(playerDir!=1 && spriteA.scale.x>0.9 && spriteA.scale.x<1.2 && midPlayer.alpha==1)
                    {
                       // console.log(spriteA.scale.x)
                        var boundsA = spriteA.getBounds();
                        return Phaser.Rectangle.intersects(boundsA, rectB);  
                    }
                    break;
                 
                    break;
            }
    
    },
    checkOverlapSprite: function(spriteA, spriteB) {
        /*if(spriteA.scale.x>0.9 && spriteA.y <= 295 && spriteA.y >= 255)
            {*/
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(boundsA, boundsB);
          // }
    },
    destroyAll: function()
    {
        for(var i=0; i<totalObstacles;i++)
        {
            if(obs[i]!=null)
            {
               obs[i].kill();
                obs[i]=null;
            }
        }
        for(var i=0;i<path.length;i++)
        {
            if(path[i]!=null)
            {
                path[i].kill();
                path[i]=null;
            }
        }
        for(var i=0; i< totalCoins;i++)
        {
             if(coinSprites[i]!=null)
            {
                coinSprites[i].kill();
                coinSprites[i]=null;
            }    
        }
        
          for(var i=0; i< leftTrees.length;i++)
        {
             if(leftTrees[i]!=null)
            {
                leftTrees[i].kill();
                leftTrees[i]=null;
            }    
        }
        
          for(var i=0; i< rightTrees.length;i++)
        {
             if(rightTrees[i]!=null)
            {
                rightTrees[i].kill();
                rightTrees[i]=null;
            }    
        }
        
        if(moveTimer!=null)
        {
            moveTimer.stop();
            moveTimer=null;
        }
        
        if(coinTimer!=null)
        {
            coinTimer.stop();
            coinTimer=null;
        }
    },
    endGame : function(){
       /* clashSound.stop();
        gameOverSound.play('', 0, 1, false);*/
        this.playerDeathAnimFn();
        game.tweens.pauseAll();
        game.time.events.add(1500,function () 
        {           
            this.destroyAll();
           this.showAds();
            game.state.start('gameOver'); 
        }, this);
    },
    playerDeathAnimFn: function()
    {
        midPlayerAnim.play(0,true);
        switch(playerDir)
        {
            case 0:
                midPlayer.loadTexture('leftDeath');   
                break;
            case 1:
                midPlayer.loadTexture('playerDeath');   
                break;
            case 2:
                midPlayer.loadTexture('rightDeath');   
                break;
        }
        midPlayer.reset(playerXPos[playerDir],270);         
        midPlayerAnim=null;
        midPlayerAnim = midPlayer.animations.add('midPlayerAnim');
        midPlayerAnim.play(15,false);  
    },
    switchPlayer: function(str)
    {
        leftTransSprite.alpha=0; rightTransSprite.alpha=0;
        switch(str)
        {
            case "left":
            
                midPlayer.alpha=0;
                leftTransSprite.alpha=1;
                leftTransSprite.x=midPlayer.x;leftTransSprite.y=midPlayer.y;
                leftTransAnim.play(20,false);
                leftTransAnim.onComplete.add(this.changePlayerDirection, this);
                game.add.tween(leftTransSprite).to( { x: playerXPos[playerDir] }, 200,Phaser.Easing.Linear.None, true,0);
                break;
            case "right":
              
                midPlayer.alpha=0;
                rightTransSprite.alpha=1;
                rightTransSprite.x=midPlayer.x;rightTransSprite.y=midPlayer.y;
                rightTransAnim.play(20,false);
                rightTransAnim.onComplete.add(this.changePlayerDirection, this);
                game.add.tween(rightTransSprite).to( { x: playerXPos[playerDir] }, 200,Phaser.Easing.Linear.None,true,0);
                break;
        }
    },
     cacheAds:function() {
		 getKaiAd({
		publisher: 'dd43168c-29e9-482c-8b3e-2c45fca5afb0',
		app: 'subway runner',
		slot: 'gameover',
		onerror: err => console.error('Custom catch:', err),
		onready: ad => {
			this.interstitialAd=ad;
		//ad.call('display')
		}
	})
    },
    showAds:function() { // use this showAds func in your game levels/game over or maintain your ad frequency when to show ads
         
        	if(this.interstitialAd!=null)
			{
			this.interstitialAd.call('display')
			this.interstitialAd.on('close', () => this.interstitialAd=null )
			}
    },
}
    
   