var TukTukGo = TukTukGo || {
};

TukTukGo.Game = function () {

  //Variables
  //Player
  this.player = null;
  this.playerBlast = null;
  this.playerTransformation = null;
  this.playerBlastAnim = null;
  this.playerTransformAnim = null;
  this.deathTween = null;
  this.autoCrashSmokeTween = null;
  this.autoCrashSparkTween = null;
  this.playerAlive = null;
  this.playerShadow = null;
  this.playerAnimation = null;
  this.isGrounded = null;
  this.scoreText = null;
  this.score = null;
  this.scoreLabel = null;
  this.bestScoreText = null;
  this.highScoreText = null;
  this.highScoreFontSize = null;
  this.kilometersText = null;

  this.backgroundColor = null;

  this.tukTukGoLogo = null;

  //Collectables Coins
  this.coins = null;
  this.coinsCollected = null;
  this.coinsCollectedText = null;
  this.coinsLabel = null;
  this.coinDistanceCalculator = null;
  this.coinSpawnBuffer = null;
  this.coinBufferIndex = null;
  this.coinPatternIndex = null;
  this.canSpawnCoin = null;
  this.coinSet = null;
  this.coinSetCalculator = null;
  this.rateOfCollection = null;
  this.lastCollected = null;
  this.timer = null;
  this.lastTimer = null;

  //Static Obstacle
  this.obstacleBull = null;
  this.obstacleDog = null;
  this.obstaclePatrol = null;
  this.obstacleManHole = null;
  this.obstaclePipe = null;
  this.obstacleBarricade = null;
  this.obstacleTarDrum = null;
  this.obstacleCrow = null;
  this.aliveObstacleCrow = null;
  this.crashBuffer = null;
  this.obstacleCrowCount = null;

  //Post Obstacle
  this.obstacleBannerBack = null;
  this.obstacleBannerFront = null;
  this.obstacleElectricPostBack = null;
  this.obstacleElectricPostFront = null;
  this.obstacleBillBoardBack = null;
  this.obstacleBillBoardFront = null;

  this.obstacleSpawnDistance = null;
  this.obstacleIndex = null;
  this.obstacleCount = null;
  this.spawnedObstacleCount = null;


  //Obstacle Alert
  this.obstacleAlert = null;
  this.obstacleAlertAnimation = null;

  //Level
  this.levelSpeed = null;
  this.currentSpeed = null;
  this.totalDistanceTravelled = null;
  this.patternDistanceTravelled = null;

  //Power Ups
  this.powerUpRandomIndex = null;
  this.jetpackPowerup = null;
  this.rocketPowerup = null;
  this.magnetPowerup = null;
  this.wingPowerup = null;
  this.crowJammerPowerup = null;
  this.carPowerUp = null;
  this.powerupIndex = null;
  this.randomPowerup = null;
  this.onPowerup = null;
  this.powerUpTestCalculator = 0;
  this.powerupIntervalCalculator = null;
  this.powerupIntervalCount = null;

  //RandomPowerup Generator
  this.powerupLastIndex = null;

  //PauseMenuVariables
  //this.pauseMenuImage = null;
  this.pauseGame = null;
  this.homeText = null;
  this.homeButton = null;
  this.resumeGameText = null;
  this.resumeGameButton = null;

  //gameOver
  this.gameOverImage = null;
  this.gameOverText = null;
  this.gameOver = null;

  this.util = null;
  this.randomValue = null;
  this.scoreJSON = null;
  this.coinPatternData = null;

  this.objDebug = null;
  this.coinObject = null;

  //Spritesheets
  this.autoCrashSmoke = null;
  this.autoCrashSpark = null;

  //Coin Collector Collider
  this.coinCollector = null;
  //SFX
  this.coinFX = null;
  this.autoHitFX = null;
  this.crowFX = null;
  this.gameOverFX = null;
  this.powerUpFX = null;
  this.powerDownFX = null;
  this.autoLoopFX = null;
  this.mainBGM = null;
  this.jumpSFX = null;
  this.flappingSFX = null;

  //Gadget Propertis
  this.gadgetTimer = null;
  this.onGadgetPowerup = null;
  this.onCrowJammer = null;
  this.gadgetBar = null;

  //Game Start
  this.gameStartText = null;
  this.gameStartTextTimer = null;
  this.startButton = null;
  this.startButtonAnim = null;
  this.tutorialSprite = null;
  this.tutorialSpriteAnim = null;
  this.bestScoreSprite = null;
  this.bestScoreAnim = null;


  //GameOver
  this.gameOverLabelText = null;
  this.gameRetryText = null;
  this.gameOverCoin = null;
  this.gameOverCoinCount = null;

  //Cursor
  this.cursors = null;
  this.centerKey = null;

  this.audioSourceContainer = null;

  this.audioElem= null;
  this.FPSBuffer = null;

};

TukTukGo.Game.prototype = {
  preload: function () {
    this.game.time.advancedTiming = true;
  },

  create: function () {
    
    document.getElementById("ads-banner").style.bottom = "265px";
    ShowBannerAds();

    this.game.time.desiredFps = 30;
    this.FPSBuffer = this.game.time.desiredFps / 60;
    
    
    
    // this.game.globalScore = localStorage.getItem('hammerplay_crazycricket_tutorial')

     if (localStorage.getItem('score') === null) {
      localStorage.setItem('score', 0)
      highScore = 0;
      console.log(highScore);
    } else {
      highScore = localStorage.getItem('score')
      console.log(highScore);

    }


     //this.gameSDK = gameSDK;//new window.Jiogames(this.gameID);

     //this.cacheAds(); 

     //window.topScore = highScore;

    this.game.stage.backgroundColor = "#8fcef8";

    //Parse the file
    this.coinPatternData = JSON.parse(this.game.cache.getText('CoinWave'));

    //Game Properties
    this.coinsCollected = 0;
    this.totalDistanceTravelled = 0;
    this.patternDistanceTravelled = 0;
    this.coinBufferIndex = 0;
    this.coinDistanceCalculator = 0;
    this.coinPatternIndex = 0;
    this.powerUpRandomIndex = 0;
    this.score = 0;
    this.coinSet = 0;
    this.coinSetCalculator = 0;
    this.coinSpawnBuffer = 50;
    this.rateOfCollection = 500;
    this.lastTimer = 0.0;
    this.timer = this.game.time.create(false);
    this.timer.start();
    this.backgroundBuffer = 240;


    this.obstacleCount = 0;
    this.spawnedObstacleCount = 0;
    this.obstacleSpawnDistance = 0;
    this.levelSpeed = 0;
    this.levelSpeedMultiplyer = 30;
    this.crashBuffer = 0;

    this.playerAlive = true;
    this.canSpawnCoin = false;
    this.onPowerup = false;
    this.gameOver = false;
    this.gameStart = false;

    //Gadget
    this.gadgetTimer = 0;
    this.gadgetTimerLimit = 100;
    this.onGadgetPowerup = false;
    this.onCrowJammer = false;
    this.powerupIntervalCalculator = 2;
    this.powerupIntervalCount = 2;
    this.powerupLastIndex = 0;
    this.powerUpTestCalculator = 0;


    //audio
    this.coinFX = this.game.add.audio('collectedcoin');
    this.autoHitFX = this.game.add.audio('hit');
    this.crowFX = this.game.add.audio('crowalert');
    this.gameOverFX = this.game.add.audio('gameover');
    this.powerUpFX = this.game.add.audio('powerupvariation');
    this.powerDownFX = this.game.add.audio('powerdownvariation');
    this.autoLoopFX = this.game.add.audio('autoridingfour');
    this.mainBGM = this.game.add.audio('gameBGM');
    this.hovering = this.game.add.audio('hover');
    this.crowDeath = this.game.add.audio('crowcollideanddeath');
    this.jumpSFX = this.game.add.audio('autojump');
    this.flappingSFX = this.game.add.audio('flapping');
    //this.coinFX = this.game.add.audio('coin');

    this.audioSourceContainer = [this.coinFX, this.crowFX, this.gameOverFX, this.powerUpFX, this.autoHitFX,
    this.powerDownFX, this.powerDownFX, this.hovering, this.crowDeath, this.jumpSFX, this.flappingSFX, this.autoLoopFX]

    for (var i = 0; i < this.audioSourceContainer.length; i++) {
      this.audioSourceContainer[i].volume = globalVolume;
    }

    this.mainBGM.play('', 0, globalVolume * 0.15, true);            

    this.gameMask = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 180, 'Mask');
    this.gameMask.scale.setTo(1);
    this.gameMask.anchor.setTo(0.5);
    this.gameMask.visible = true;

    this.scoreLabel = this.game.add.sprite(this.game.world.centerX - 20, 20, 'ScoreLabel');
    this.scoreLabel.alpha = 0;
    this.scoreText = this.game.add.bitmapText(this.game.world.centerX, 70, 'numbers', '0', 70);
    this.scoreText.anchor.setTo(0.5);
    this.scoreText.alpha = 0;

    this.parallax = new Parallax(this.game);

    //BestScoreSprite
    this.bestScoreSprite = this.game.add.sprite(this.game.world.centerX + 2, this.game.world.centerY + 49, 'BestScore');
    this.bestScoreSprite.anchor.setTo(0.5);
    this.bestScoreAnim = this.bestScoreSprite.animations.add('BestScore', [0, 1]);
    this.bestScoreAnim.play(2, true);


    //Create Platform
    this.topPlatform = this.game.add.sprite(0, -60, 'TarRoad');
    this.platform = this.game.add.tileSprite(0, 268, 240, 66, 'TarRoad');


    this.bestScoreText = this.game.add.bitmapText(this.game.world.centerX - 40, this.game.world.centerY + 18, 'numbers', 'BEST: ', 22);
    this.highScoreText = this.game.add.bitmapText(this.game.world.centerX - 15, this.game.world.centerY + 18, 'numbers', '', 22);
    this.bestScoreText.anchor.setTo(0.5);
    this.highScoreText.anchor.setTo(0, 0.5);
    console.log("Highscore before display" + highScore);
    this.highScoreText.setText(highScore + ' KMS');    
    console.log("Highscore After display" + highScore);

    this.game.physics.arcade.enable(this.platform);
    this.platform.body.immovable = true;
    this.platform.alpha = 0;

    this.game.physics.arcade.enable(this.topPlatform);
    this.topPlatform.body.immovable = true;
    this.topPlatform.alpha = 0;

    /*this.foreGroundSprites = this.game.add.group();
    this.foreGroundSprites.y = 355;*/


    //Init Collectables and obstacle
    this.coins = this.initGroupObjects(25, 'Coins');
    this.jetpackPowerup = this.initGroupObjects(2, 'JetPackPowerup');
    this.magnetPowerup = this.initGroupObjects(2, 'JetPackPowerup');
    this.rocketPowerup = this.initGroupObjects(2, 'JetPackPowerup');
    this.wingPowerup = this.initGroupObjects(2, 'JetPackPowerup');
    this.crowJammerPowerup = this.initGroupObjects(2, 'JetPackPowerup');
    this.carPowerUp = this.initGroupObjects(2, 'JetPackPowerup');
    this.obstacleBannerBack = this.initGroupObjects(2, 'BannerBack');
    this.obstacleElectricPostBack = this.initGroupObjects(2, 'ElectricPostBack');
    this.obstacleBillBoardBack = this.initGroupObjects(2, 'BillBoardBack');
    this.obstacleBull = this.initGroupObjects(2, 'bull');
    this.obstaclePatrol = this.initGroupObjects(2, 'police');
    this.obstacleManHole = this.initGroupObjects(2, 'ManHole');
    this.obstacleTarDrum = this.initGroupObjects(2, 'TarDrum');
    this.obstacleDog = this.initGroupObjects(2, 'Dog');
    this.obstaclePipe = this.initGroupObjects(2, 'Pipe');
    this.obstacleBarricade = this.initGroupObjects(2, 'Barricade');
    this.obstacleCrowCount = 0;

    //create player
    this.player = this.game.add.sprite(10, 270, 'Auto');
    this.playerShadow = this.game.add.sprite(5, 268, 'playerShadow');
    this.playerShadow.visible = true;
    this.playerCarShadow = this.game.add.sprite(5, 268, 'playerCarShadow');
    this.playerCarShadow.visible = false;
    this.playerAnimation = this.player.animations.add('Auto', [0, 1, 2, 3]);
    this.player.anchor.setTo(0, 1);

    //this.playerAnimation.play(10,true);

    //Seperate collider for coin magnet
    this.coinCollector = this.game.add.sprite(0, 0, 'Auto');
    this.coinCollector.alpha = 0.0;
    this.game.physics.arcade.enable(this.coinCollector);
    this.coinCollector.body.setCircle(20, 10, -40);
    this.player.addChild(this.coinCollector);

    //enable physics on the player
    this.game.physics.arcade.enable(this.player);

    //player gravity
    this.player.body.gravity.y = 1000;

    //player collider
    this.player.body.setSize(50, 38, 5, 17);

    this.obstacleBannerFront = this.initGroupObjects(2, 'BannerFront');
    this.obstacleElectricPostFront = this.initGroupObjects(2, 'ElectricPostFront');
    this.obstacleBillBoardFront = this.initGroupObjects(2, 'BillBoardFront');

    //the camera will follow the player in the world
    //this.game.camera.follow(this.player);

    //move player with cursor keys
    this.cursors = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    this.obstacleAlert = this.initAlertNotification(5, 'AlertNotification');
    this.obstacleCrow = this.initGroupObjects(2, 'Crow');

    //Gadget Loading Bar
    this.gadgetBar = this.game.add.sprite(12, 270, 'GadgetBar');
    this.gadgetBar.scale.setTo(1);
    this.gadgetBar.visible = false;

    //Destroyed Auto
    this.playerBlast = this.game.add.sprite(25, 240, 'Blast');
    this.playerBlast.anchor.setTo(0.5);
    this.playerBlast.visible = false;
    this.playerBlastAnim = this.playerBlast.animations.add('Blast', [0, 1, 2, 3, 4, 5, 6, 7]);

    this.autoCrashSmoke = this.game.add.sprite(25, 225, 'AutoCrashSmoke');
    this.autoCrashSmoke.anchor.setTo(0.5);
    this.autoCrashSmoke.visible = false;
    this.autoCrashSmokeAnim = this.autoCrashSmoke.animations.add('AutoCrashSmoke', [0, 1, 2, 3, 4, 5]);

    this.autoCrashSpark = this.game.add.sprite(75, 265, 'AutoCrashSpark');
    this.autoCrashSpark.anchor.setTo(0.5);
    this.autoCrashSpark.visible = false;
    this.autoCrashSparkAnim = this.autoCrashSpark.animations.add('AutoCrashSpark', [0, 1, 2, 3]);


    //Player TransformParticle
    this.playerTransformation = this.game.add.sprite(150, 150, "TransformParticle");
    this.playerTransformation.anchor.setTo(0.5);
    this.playerTransformation.visible = false;
    this.playerTransformAnim = this.playerTransformation.animations.add('TransformParticle', [0, 1, 2, 3, 4, 5, 6, 7]);

    this.playerBlastAnim.onComplete.addOnce(function () {
      this.playerBlast.visible = false;
      this.autoCrashSmoke.visible = true;
      this.autoCrashSpark.visible = true;
    }, this);


    //Game Start
    this.gameStartTextTimer = 0;
    this.gameStartText = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY + 115, 'numbers', 'PRESS CENTER TO START', 21);
    this.gameStartText.anchor.setTo(0.5);

    this.startButton = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 80, 'JumpButton');
    this.startButton.anchor.setTo(0.5);
    this.startButton.scale.setTo(0.8);
    this.startButtonAnim = this.startButton.animations.add('JumpButton', [0, 1]);
    this.startButtonAnim.play(2, true);

    this.tukTukGoLogo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 55, 'TukTukGoLogo');
    this.tukTukGoLogo.anchor.setTo(0.5);
    this.tukTukGoLogo.scale.setTo(0.7);

    
    this.parallax.initForeground();

    //this.pauseMenuImage = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'JumpButton');
    //this.pauseMenuImage.anchor.setTo(0.5);
    //this.pauseMenuImage.visible = false;
    this.pauseGame = false;

    this.pauseButton = this.game.add.sprite( 240 , 320, 'EmptyButton')
    this.pauseButton.anchor.setTo(1);
    this.pauseButton.visible = false;

    this.pauseButtonText = this.game.add.bitmapText(this.game.world.centerX + 70, this.game.world.centerY + 135, 'numbers', ' PAUSE', 15);
    this.pauseButtonText.anchor.setTo(0);
    this.pauseButtonText.visible = false;

    this.resumeButton = this.game.add.sprite( 240 , 320, 'EmptyButton')
    this.resumeButton.anchor.setTo(1);
    this.resumeButton.visible = false;

    this.homeButton = this.game.add.sprite(0, 288, 'EmptyButton')
    this.homeButton.anchor.setTo(0)
    this.homeButton.visible = false;

    this.resumeGameText = this.game.add.bitmapText(this.game.world.centerX - 117, this.game.world.centerY + 135, 'numbers', ' HOME', 15);
    this.resumeGameText.anchor.setTo(0);
    this.resumeGameText.visible = false;

    this.homeGameText = this.game.add.bitmapText(this.game.world.centerX + 70, this.game.world.centerY + 135, 'numbers', 'RESUME', 15);
    this.homeGameText.anchor.setTo(0);
    this.homeGameText.visible = false;


    this.muteButton = this.game.add.sprite(0, 288, 'EmptyButton')
    this.muteButton.anchor.setTo(0);
    this.muteButton.visible = false;

    this.muteButtonText = this.game.add.bitmapText(27, 302, 'numbers', 'MUTE', 12);
    this.muteButtonText.anchor.setTo(0.5);
    this.muteButtonText.visible = false;


    this.coinsCollectedText = this.game.add.bitmapText(223, 20, 'numbers', '0', 20);
    this.coinsCollectedText.anchor.setTo(1);
    this.coinsCollectedText.alpha = 0;

    this.coinsLabel = this.game.add.sprite(230, 10, "Coins");
    this.coinsLabel.anchor.setTo(0.5);
    this.coinsLabel.visible = false;

    //if(highScore === 0){
    this.tutorialSprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "TutorialSprite");
    this.tutorialSprite.anchor.setTo(0.5);
    this.tutorialSpriteAnim = this.tutorialSprite.animations.add('TutorialSprite', [0, 1]);
    this.tutorialSpriteAnim.onLoop.add(function (sprite, animation) {
      if (animation.loopCount > 1) {
        this.tutorialSprite.visible = false;
      }
    }, this);
    this.tutorialSprite.visible = false;
    //  }

    this.buttonHighlight = this.game.add.sprite( this.game.world.centerX, this.game.world.centerY - 130, 'ButtonHighlight')
    this.buttonHighlight.anchor.setTo(0.5);
    this.buttonHighlight.scale.setTo(2,1.4);
    this.buttonHighlight.visible = false;

    this.canStartGame = true;
    this.pauseMenuControl = true;

    //Game over


    this.centerKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.pauseKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ZERO);
    this.homeKey = this.game.input.keyboard.addKey(Phaser.Keyboard.H);
    this.increaseVolume = this.game.input.keyboard.addKey(Phaser.Keyboard.THREE);
    this.decreaseVolume = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE);

    this.centerKey.onUp.add(function () {
      if (this.playerAlive) {
        /*if(this.game.paused){
            this.restartGame();
            return;
        }
        */
        if (!this.gameStart && !this.gameOver) {
          if(this.canStartGame){   
            this.startGame();
          } else{
            ClickBannerAds()
          }

        }

        if(!this.pauseMenuControl){
          ClickBannerAds()
        }
      }
    }, this);

    window.addEventListener('keydown', function (e) {      
      if (e.keyCode === 8) { 
           window.close()
      }    
    })

    this.game.input.keyboard.addCallbacks(this, function (event) {
      if (event.key == "SoftLeft") {
        console.log('Pause Menu Control is' + this.pauseMenuControl)
        if (this.playerAlive) {
          if (!this.gameStart ) {
              this.OnMuteButton();
            // Pass soft left function here
          }
       
          if (this.playerAlive) {
            if (this.game.paused) {
              if(this.pauseMenuControl == true){
              // console.log('Soft Right')
              if (this.gameStart && !this.gameOver) {
                  this.game.paused = false;              
                  this.mainBGM.stop();
                  this.autoLoopFX.stop();
                  this.playerAnimation.stop(null, true);
                  this.powerupIndex = null;
                  this.player.loadTexture('Auto');
                  this.game.state.start('Game');
                }
              }
            }
          }    
        }
      }
      
      if (event.key == "SoftRight") {        
        
        if (this.playerAlive) {
          if (this.gameStart && !this.gameOver) {
            if (this.game.paused) {              
              if(this.pauseMenuControl == true){
              this.game.paused = false;
              HideBannerAds()
              this.buttonHighlight.visible = false;
              this.homeButton.visible = false;
              this.resumeButton.visible = false;
              this.pauseGame = false;
              this.resumeGameText.visible = false;
              this.homeGameText.visible = false;
              this.pauseButton.visible = true;
              this.pauseButtonText.visible = true;
              }
            }
            else {
              if (this.tutorialSprite != null) {
                this.tutorialSprite.visible = false;
              }
              this.game.paused = true;
              ShowBannerAds();
              //this.pauseMenuImage.visible = true;
              this.homeButton.visible = true;
              this.resumeButton.visible = true;
              this.pauseGame = true;
              this.resumeGameText.visible = true;
              this.homeGameText.visible = true;
              this.pauseButton.visible = false;
              this.pauseButtonText.visible = false;
            }
          }
        }

      }

      if (event.key === 'ArrowUp') {
        
        if(bannerAdsReady){
          this.onUpArrowClicked()
        }
      }
      if (event.key === 'ArrowDown') {
        if(bannerAdsReady){
          this.onDownArrowClicked()
        }
      }


      if (event.keyCode == 8) {
        // console.log('Audio Stopped')
        this,game.pause = false
        this.autoLoopFX.stop();
        this.mainBGM.stop();
      }
    });

    this.pauseKey.onUp.add(function () {
      if (this.playerAlive) {
        if (this.gameStart && !this.gameOver) {
          if (this.game.paused) {
            this.game.paused = false;
            HideBannerAds()
            //this.pauseMenuImage.visible = false;
            this.homeButton.visible = false;
            this.resumeButton.visible = false;
            this.pauseGame = false;
            this.resumeGameText.visible = false;
            this.homeGameText.visible = false;
            this.pauseButton.visible = true;
            this.pauseButtonText.visible = true;
          }
          else {
            if (this.tutorialSprite != null) {
              this.tutorialSprite.visible = false;
            }
            this.game.paused = true;
            ShowBannerAds();
            //this.pauseMenuImage.visible = true;
            this.homeButton.visible = true;
            this.resumeButton.visible = true;
            this.pauseGame = true;
            this.resumeGameText.visible = true;
            this.homeGameText.visible = true;
            this.pauseButton.visible = false;
            this.pauseButtonText.visible = false;
          }
        }
      }
    }, this);


    this.homeKey.onUp.add(function () {
      this.restartGame();
    }, this);


    //GameOverScreen
    this.gameOverImage = this.game.add.sprite(25, 325, 'GameOverScreen');
    this.gameOverImage.scale.setTo(0.8);
    this.gameOverImage.anchor.setTo(0);
    this.gameOverImage.visible = false;

    this.gameOverLabelText = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY - 90, 'numbers', 'GAME OVER', 30);
    this.gameOverLabelText.anchor.setTo(0.5);
    this.gameOverLabelText.scale.setTo(0.8);
    this.gameOverLabelText.visible = false;

    this.gameOverText = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY - 34, 'numbers', '0000', 28);
    this.gameOverText.scale.setTo(0.8);
    this.gameOverText.anchor.setTo(0.5);
    this.gameOverText.visible = false;

    this.gameOverCoinCount = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY + 15, 'numbers', '00', 28);
    this.gameOverCoinCount.scale.setTo(0.8);
    this.gameOverCoinCount.anchor.setTo(0.5);
    this.gameOverCoinCount.visible = false;

    this.gameRetryText = this.game.add.sprite(this.game.world.centerX - 2, this.game.world.centerY + 68, 'GameRetryText');
    this.gameRetryText.scale.setTo(0.8);
    this.gameRetryText.anchor.setTo(0.5);
    this.gameRetryText.visible = false;
    this.gameRetryTextAnim = this.gameRetryText.animations.add('GameRetryText', [0, 1]);

    
    this.muteButton.visible = true;
    this.muteButtonText.visible = true;


    
    if(gameMute) {      
      this.game.sound.mute= true      
      this.muteButtonText.setText("UNMUTE")    
    } else {      
      this.game.sound.mute= false      
      this.muteButtonText.setText("MUTE")    
    }
    
  },

  onUpArrowClicked : function () {
    if (this.game.paused) {  
        this.buttonHighlight.visible = true  
        this.pauseMenuControl = false
    } else if(this.gameStart == false) {      
      this.buttonHighlight.visible = true  
      this.canStartGame = false
    }
  },

  onDownArrowClicked : function(){
    if (this.game.paused) {  
      this.buttonHighlight.visible = false  
      this.pauseMenuControl = true
    } else if(this.gameStart == false) {      
      this.buttonHighlight.visible = false  
      this.canStartGame = true
    }
  },

  OnMuteButton : function() {     
    if(this.game.sound.mute) {      
      gameMute = false      
      this.game.sound.mute= false      
      this.muteButtonText.setText("MUTE")    
    } else {      
      gameMute = true      
      this.game.sound.mute= true      
      this.muteButtonText.setText("UNMUTE")    
    }  
  },

  startGame: function () {
    //this.autoLoopFX.play('', 0, 1, true);
    HideBannerAds();
    this.muteButton.visible = false;
    this.muteButtonText.visible = false;
    this.autoLoopFX.play('', 0, globalVolume, true);
    this.gameStart = true;
    this.levelSpeed = -450;
    this.playerAnimation.play(10, true);
    this.gameStartText.visible = false;
    this.startButton.visible = false;

    this.scoreLabel.alpha = 1;
    this.scoreText.alpha = 1;
    this.bestScoreText.visible = true;
    this.highScoreText.visible = true;
    if (this.tutorialSprite != null) {
      this.tutorialSprite.visible = true;
      this.tutorialSpriteAnim.play(2, true);
    }
    // this.coinFX.volume = 0.5;
    this.coinsCollectedText.alpha = 1;
    this.coinsLabel.visible = true;
    this.game.add.tween(this.tukTukGoLogo).to({ y: (110), }, 100, Phaser.Easing.Linear.None, true).onComplete.add(this.tweenLogo, this);
    this.pauseButton.visible = true;
    this.pauseButtonText.visible = true;

    // GameAnalytics("addProgressionEvent", "Start", "Journey");
  },

  restartGame: function() {
    if (this.game.paused) {
      this.game.paused = false;
      this.autoLoopFX.stop();
      this.mainBGM.stop();
      this.playerAnimation.stop(null, true);
      this.powerupIndex = null;
      this.player.loadTexture('Auto');
      this.game.state.start('Game');
    }
  },

  tweenLogo: function () {
    this.game.add.tween(this.tukTukGoLogo).to({ y: (-265), }, 750, Phaser.Easing.Linear.None, true);
  },

  playPlayerTransform: function (posX, posY) {
    this.playerTransformation.x = posX;
    this.playerTransformation.y = posY;
    this.playerTransformation.visible = true;
    this.playerTransformAnim.play(20, false);
    this.playerTransformAnim.onComplete.addOnce(function () {
      this.playerTransformation.visible = false;
    }, this);
  },

  //Group Objects init function template
  initGroupObjects: function (count, sprite) {
    object = this.game.add.group();
    object.enableBody = true;
    object.createMultiple(count, sprite);
    object.setAll('checkWorldBounds', true);
    object.setAll('outOfBoundsKill', true);
    return object;
  },

  //Create Game object
  createObject: function (gameObjectReference, posX, posY, speed, spriteSheet, animationFrames, animationFrameRate, animationLoop, collW, collH, collOffX, collOffY) {
    gameObject = gameObjectReference.getFirstExists(false);
    if (gameObject) {
      if (spriteSheet != null) {
        gameObjectAnim = gameObject.animations.add(spriteSheet, animationFrames);
        gameObjectAnim.play(animationFrameRate, animationLoop);
      }

      gameObject.reset(posX, posY);
      if (collW != null) {
        gameObject.body.setSize(collW, collH, collOffX, collOffY);
      }
      gameObject.body.velocity.x = speed;
      gameObject.body.velocity.y = 0;
      gameObject.body.immovable = true;
      this.dummyObstacle = gameObject;

    }
  },

  initAlertNotification: function (count, sprite) {
    alertSigh = this.game.add.group();
    alertSigh.createMultiple(count, sprite);
    return alertSigh;
  },

  spawnAlertNotification: function (posY) {
    alertSign = this.obstacleAlert.getFirstExists(false);
    if (alertSign) {
      this.crowFX.play();
      alertSign.reset(215, this.player.y);
      alertSignAnim = alertSign.animations.add('AlertNotification', [0, 1]);
      alertSignAnim.play(10, true);

      alertSignAnim.onLoop.add(function (sprite, animation) {
        if (animation.loopCount < 3) {//10 ){
          posY = alertSign.y = this.player.y - 50;
        }
        else {
          animation.loop = false;
        }
      }, this);

      alertSignAnim.onComplete.add(function () {
        alertSign.kill();
        if (this.onPowerup || this.onCrowJammer) {
          this.aliveObstacleCrow = this.createObject(this.obstacleCrow, 220, posY, -300, "Crow", [0, 1, 2, 3, 4], 10, true, null, null, null, null);
          this.obstacleCrowCount += 1;
        }
      }, this);
    }
  },

  resetobstacleCrowCount: function () {
    this.obstacleCrowCount = 0;
    // console.log('Obstacle Crow Count : ' + this.obstacleCrowCount);
  },

  globalVolumeController : function () {
    if (this.increaseVolume.isDown) {
      if (globalVolume < 1) {
        globalVolume += 0.01;
        for (var i = 0; i < this.audioSourceContainer.length; i++) {
          this.audioSourceContainer[i].volume = globalVolume;
        }
        this.mainBGM.volume = globalVolume * 0.15;
      } 
    }else if (this.decreaseVolume.isDown) {
      if (globalVolume > 0) {
        globalVolume -= 0.01;
        for (var i = 0; i < this.audioSourceContainer.length; i++) {
          this.audioSourceContainer[i].volume = globalVolume;
        }
        this.mainBGM.volume = globalVolume * 0.15;
      }     
    }
  },

  update: function () {

    // this.globalVolumeController();
    //Collision
    this.game.physics.arcade.collide(this.player, this.platform, this.playerHit, null, this);
    this.game.physics.arcade.collide(this.player, this.topPlatform, this.playerHit, null, this);

    if (this.playerAlive) {
      this.parallax.update(Math.abs(this.levelSpeed / 60));
      //Coin Collision
      this.game.physics.arcade.overlap(this.coinCollector, this.coins, this.coinMagnet, null, this);
      this.game.physics.arcade.overlap(this.player, this.coins, this.coinCollection, null, this);

      if (this.gameStart && !this.gameOver) {

        //Obstacle Collision
        this.game.physics.arcade.overlap(this.player, this.obstacleBull, this.obstacleHit, null, this);
        this.game.physics.arcade.overlap(this.player, this.obstacleManHole, this.obstacleHit, null, this);
        this.game.physics.arcade.overlap(this.player, this.obstaclePatrol, this.obstacleHit, null, this);
        this.game.physics.arcade.overlap(this.player, this.obstacleBannerFront, this.obstacleHit, null, this);
        this.game.physics.arcade.overlap(this.player, this.obstacleElectricPostFront, this.obstacleHit, null, this);
        this.game.physics.arcade.overlap(this.player, this.obstacleTarDrum, this.obstacleHit, null, this);
        this.game.physics.arcade.overlap(this.player, this.obstacleBillBoardFront, this.obstacleHit, null, this);
        this.game.physics.arcade.overlap(this.player, this.obstacleDog, this.obstacleHit, null, this);
        this.game.physics.arcade.overlap(this.player, this.obstaclePipe, this.obstacleHit, null, this);
        this.game.physics.arcade.overlap(this.player, this.obstacleBarricade, this.obstacleHit, null, this);

        if (this.onPowerup) {
          this.game.physics.arcade.overlap(this.player, this.obstacleCrow, this.obstacleHit, null, this);
        } else {
          this.game.physics.arcade.overlap(this.player, this.obstacleCrow, this.crowObstacleHandler, null, this);
        }

        //PowerUp
        this.game.physics.arcade.overlap(this.player, this.jetpackPowerup, this.powerupJetpack, null, this);
        this.game.physics.arcade.overlap(this.player, this.rocketPowerup, this.powerupRocket, null, this);
        this.game.physics.arcade.overlap(this.player, this.magnetPowerup, this.powerupMagnet, null, this);
        this.game.physics.arcade.overlap(this.player, this.wingPowerup, this.powerupBird, null, this);
        this.game.physics.arcade.overlap(this.player, this.crowJammerPowerup, this.powerupCrowJammer, null, this);
        this.game.physics.arcade.overlap(this.player, this.carPowerUp, this.powerupCar, null, this);


        //Score Update
        this.score += 0.01;
        this.updateScore(this.score);

        //Calculate Total Distance
        this.totalDistanceTravelled ++;

        this.patternDistanceTravelled ++;

        // this.platform.tilePosition.x += this.levelSpeed * 0.017;

        if (this.bestScoreText.x > -this.bestScoreText.width) {
          this.bestScoreText.x += this.levelSpeed * 0.017;
        }

        if (this.highScoreText.x > -this.highScoreText.width) {
          this.highScoreText.x += this.levelSpeed * 0.017;
        }

        if (this.bestScoreSprite.x > -this.bestScoreSprite.width) {
          this.bestScoreSprite.x += this.levelSpeed * 0.017;
        }

        //Input Handler
        if (this.cursors.isDown) {
          this.playerJump();
        } else {
          if (this.powerupIndex == 0) {
            if (this.player.angle >= 0) {
              this.player.angle -= 0.5;
            }
          }
          else if (this.powerupIndex == 3) {
            this.isFlapping = false;
            this.player.loadTexture("AutoBird", 2);
          }

          else if (this.powerupIndex == 0) {
            this.game.camera.shake(0.1, 500);
          }
          this.flappingSFX.stop();
          this.hovering.stop();
        }

        //Coin Spawn Handler
        if (this.canSpawnCoin) {
          this.coinDistanceCalculator ++;
          this.spawnCoin();
        }
        else {
          this.coinBufferIndex = 0;
          this.coinDistanceCalculator = 0;
          this.coinSpawnBuffer = 50;
        }

        //Level Generator
        //Tinny Commented
        this.patternGenerator();

        //GadgetBarCalculator
        this.gadgetBarCalculator();

        //if(this.totalDistanceTravelled == 50){this.spawnPowerup();}

        if (this.onPowerup == true || this.onCrowJammer) {
          this.powerUpTestCalculator += 1;
          if (this.powerUpTestCalculator == 200) {
            this.powerUpTestCalculator = 0;
            //Tinny Commented
            if (this.obstacleCrowCount < 2) {
              this.spawnAlertNotification(150);
            }

            if (this.obstacleCrowCount == 2) {
              this.game.time.events.add(Phaser.Timer.SECOND * 10, this.resetobstacleCrowCount, this);
            }
            // this.tweenPlatform();
          }
        } else {
          this.powerUpTestCalculator = 0;
        }
      }
      //if(this.coinFX.volume = 1){ this.coinFX.volume = 0.5; }
      if (this.timer.ms > (this.rateOfCollection + this.lastCollected)) {
        // this.coinFX.volume = 0.5;
      }
    }
    else {
      if (this.gameOver && this.cursors.isDown && adDisplayed === 0) {
        this.game.state.start('Game');
        this.mainBGM.stop();
      }
    }
  },

  gadgetBarCalculator: function () {
    if (this.onGadgetPowerup || this.onCrowJammer) {
      if (this.gadgetTimer < this.gadgetTimerLimit) {
        this.gadgetTimer += 0.1;
        this.gadgetBar.scale.x -= 0.001;
      } else {
        this.player.body.setSize(50, 38, 5, 17);
        this.coinCollector.body.setCircle(20, 10, -40);
        this.gadgetTimer = 0;
        this.onGadgetPowerup = false;
        this.onCrowJammer = false;
        this.gadgetBar.visible = false;
        this.player.loadTexture('Auto');
        this.playerAnimation.play(10, true);
        this.playerShadow.visible = false;
        this.powerupIndex = null;
      }
    }
  },

  patternGenerator: function () {
    if (this.patternDistanceTravelled == 10) {
      this.coinSet = this.game.rnd.integerInRange(2, 3);
      this.canSpawnCoin = true;
    }
    else if (this.patternDistanceTravelled == this.obstacleSpawnDistance) {

      if (this.spawnedObstacleCount < this.obstacleCount) {
        this.spawnObstacle();
        this.spawnedObstacleCount += 1;
      }
      else {
        this.spawnPowerup();
        this.obstacleSpawnDistance = 0;
        this.patternDistanceTravelled = 0;
        this.spawnedObstacleCount = 0;
      }
    }
  },

  spawnCoin: function () {
    if (this.coinSetCalculator < this.coinSet) {
      if (this.coinBufferIndex < this.coinPatternData.coinWave[this.coinPatternIndex].SpawnCoinPos[0].length) {
        if (this.coinDistanceCalculator == this.coinSpawnBuffer) {
          this.coinSpawnBuffer += 4;
          posX = this.coinPatternData.coinWave[this.coinPatternIndex].SpawnCoinPos[0][this.coinBufferIndex];
          posY = this.coinPatternData.coinWave[this.coinPatternIndex].SpawnCoinPos[1][this.coinBufferIndex];
          this.createObject(this.coins, posX, posY, this.levelSpeed * this.FPSBuffer, 'Coins', [0, 1, 2, 3], 10, true, null);
          this.coinBufferIndex++;
        }
      } else {
        this.coinSetCalculator += 1;
        if (this.onPowerup) {
          this.coinPatternIndex = this.game.rnd.integerInRange(10, 13);
        } else {
          this.coinPatternIndex = this.game.rnd.integerInRange(0, 9);
        }
        this.coinBufferIndex = 0;
        this.coinDistanceCalculator = 0;
        this.coinSpawnBuffer = 50;
      }
    }
    else {
      this.coinSetCalculator = 0;
      this.canSpawnCoin = false;
      this.coinPatternIndex = this.game.rnd.integerInRange(0, 9);
      this.obstacleCount = this.game.rnd.integerInRange(1, 2);
      this.obstacleSpawnDistance += this.game.rnd.integerInRange(80, 120) + this.patternDistanceTravelled;
    }
  },

  spawnObstacle: function () {
    this.obstacleSpawnDistance += this.game.rnd.integerInRange(80, 120);

    if (this.onPowerup) {
      this.obstacleIndex = this.game.rnd.integerInRange(7, 9);
    } else {
      this.obstacleIndex = this.game.rnd.integerInRange(0, 10);
    }
    switch (this.obstacleIndex) {
      case 0:
        this.createObject(this.obstacleBull, 240, 220, this.levelSpeed * this.FPSBuffer, 'bull', [0, 1, 2, 3], 4, true, 30, 38, 20, 10);
        break;

      case 1:
        this.createObject(this.obstacleManHole, 240, 240, this.levelSpeed * this.FPSBuffer, null, null, null, null, 40, 40, 10, 10);
        break;

      case 2:
        this.createObject(this.obstaclePatrol, 240, 220, this.levelSpeed * this.FPSBuffer, 'police', [0, 1, 2, 1, 0], 4, true, 20, 38, 12.5, 10);
        break;

      case 3:
        this.createObject(this.obstacleTarDrum, 240, 240, this.levelSpeed * this.FPSBuffer, null, null, null, null, null, null, null, null);
        break;

      case 4:
        this.createObject(this.obstaclePipe, 240, 245, this.levelSpeed * this.FPSBuffer, null, null, null, null, null, null, null, null);
        break;

      case 5:
        this.createObject(this.obstacleBarricade, 240, 230, this.levelSpeed * this.FPSBuffer, null, null, null, null, null, null, null, null);
        break;

      case 6:
        this.createObject(this.obstacleDog, 240, 248, this.levelSpeed * this.FPSBuffer, 'Dog', [0, 1, 2, 3, 4], 4, true, null, null, null, null);
        break;

      case 7:
        this.createObject(this.obstacleElectricPostBack, 215, 95, this.levelSpeed * this.FPSBuffer, null, null, null, null, 0, 0, 0, 0);
        this.createObject(this.obstacleElectricPostFront, 200, 48, this.levelSpeed * this.FPSBuffer, 'ElectricPostFront', [3, 0, 1, 2, 3], 7, false, 173, 65, 17, 35);
        break;

      case 8:
        this.createObject(this.obstacleBannerBack, 228, 198, this.levelSpeed * this.FPSBuffer, null, null, null, null, 0, 0, 0, 0);
        this.createObject(this.obstacleBannerFront, 220, 135, this.levelSpeed * this.FPSBuffer, null, null, null, null, 40, 38, 5, 5);
        break;

      case 9:
        this.createObject(this.obstacleBillBoardBack, 225, 125, this.levelSpeed * this.FPSBuffer, null, null, null, null, 0, 0, 0, 0);
        this.createObject(this.obstacleBillBoardFront, 215, 65, this.levelSpeed * this.FPSBuffer, null, null, null, null, 50, 25, 0, 10);
        break;

      case 10:
        alertSign = this.obstacleAlert.getFirstExists(false);
        if (alertSign) {
          this.crowFX.play();
          alertSign.reset(215, this.player.y);
          alertSignAnim = alertSign.animations.add('AlertNotification', [0, 1]);
          alertSignAnim.play(10, true);

          alertSignAnim.onLoop.add(function (sprite, animation) {
            if (animation.loopCount < 3) {//10 ){
              posY = alertSign.y = this.player.y - 50;
            }
            else {
              animation.loop = false;
            }
          }, this);

          alertSignAnim.onComplete.add(function () {
            alertSign.kill();
            this.aliveObstacleCrow = this.createObject(this.obstacleCrow, 220, posY, -300, "Crow", [0, 1, 2, 3, 4], 10, true, null, null, null, null);
          }, this);
        }
        break;
    }
  },

  /*spawnCrow: function () {
    if (this.crowSetCalculator == this.crowSpawn)
      this.spawnAlertNotification(150);
  },*/

  spawnPowerup: function () {
    this.powerupRandomIndex = [0, 1, 2, 3, 4];
    if (this.levelSpeed < 500) { this.levelSpeed -= 30; }
    if (this.powerupIntervalCalculator == this.powerupIntervalCount) {
      if (!this.onGadgetPowerup && !this.onCrowJammer && !this.onPowerup) {

        this.powerupIntervalCalculator = 0;
        this.powerupRandomIndex = Phaser.ArrayUtils.shuffle(this.powerupRandomIndex);

        if (this.powerupRandomIndex[0] == this.powerupLastIndex) {
          this.randomPowerup = this.powerupRandomIndex[1];
        } else {
          this.randomPowerup = this.powerupRandomIndex[0];
        }

        this.powerupLastIndex = this.randomPowerup;
        //this.randomPowerup = 5;

        switch (this.randomPowerup) {
          case 0:
            this.createObject(this.rocketPowerup, 240, 160, this.levelSpeed * this.FPSBuffer, 'JetPackPowerup', [0, 1, 2, 3], 10, true, null, null, null, null);
            break;
          case 1:
            this.createObject(this.jetpackPowerup, 240, 160, this.levelSpeed * this.FPSBuffer, 'JetPackPowerup', [0, 1, 2, 3], 10, true, null, null, null, null);
            break;
          case 2:
            this.createObject(this.magnetPowerup, 240, 160, this.levelSpeed * this.FPSBuffer, 'JetPackPowerup', [0, 1, 2, 3], 10, true, null, null, null, null);
            break;
          case 3:
            this.createObject(this.wingPowerup, 240, 160, this.levelSpeed * this.FPSBuffer, 'JetPackPowerup', [0, 1, 2, 3], 10, true, null, null, null, null);
            break;
          case 4:
            this.createObject(this.crowJammerPowerup, 240, 160, this.levelSpeed * this.FPSBuffer, 'JetPackPowerup', [0, 1, 2, 3], 10, true, null, null, null, null);
            break;
          case 5:
            this.createObject(this.carPowerUp, 240, 160, this.levelSpeed * this.FPSBuffer, 'JetPackPowerup', [0, 1, 2, 3], 10, true, null, null, null, null);
            break;
          default:
            // console.log("Nothing to spawn now");
            break;
        }
      }
    } else {
      this.powerupIntervalCalculator += 1;
    }
  },

  //On Player Jump
  playerJump: function () {
    switch (this.powerupIndex) {
      case 0:
        this.player.body.velocity.y = +150;
        if (this.player.angle <= 10) {
          this.player.angle += 0.5;
        }
        break;
      case 1:
        this.player.body.velocity.y = -150;
        if (this.isGrounded) {
          this.player.body.setSize(80, 60, 5, 10);
          this.hovering.play('', 0, globalVolume, true);
          this.isGrounded = false;
          this.player.loadTexture("AutoJet");
          this.playerAnimation = this.player.animations.add("AutoJet", [0, 1]);
          this.playerAnimation.play(10, true);
        }
        break;
      case 2:
        if (this.player.body.touching.down && this.isGrounded) {
          this.player.body.velocity.y -= 400;
          this.playerShadow.visible = false;
          this.player.loadTexture('MagnetJump');
          this.playerAnimation = this.player.animations.add("MagnetJump", [0, 1]);
          this.playerAnimation.play(10, true);
          this.jumpSFX.play();
          this.isGrounded = false;
        }
        break;
      case 3:
        this.player.body.velocity.y = -150;
        if (!this.isFlapping) {
          this.isFlapping = true;
          this.flappingSFX.play('', 0, globalVolume, true);
          this.autoCrashSpark.visible = false;
          this.isGrounded = false;
          this.player.loadTexture("AutoBird");
          this.playerAnimation = this.player.animations.add("AutoBird", [0, 1, 2, 3]);
          this.playerAnimation.play(10, true);
        }
        break;
      case 4:
        if (this.player.body.touching.down && this.isGrounded) {
          this.player.body.velocity.y -= 400;
          this.playerShadow.visible = false;
          this.player.loadTexture('AutoJammerJump');
          this.jumpSFX.play();
          this.isGrounded = false;
        }
        break;
      case 5:
        if (this.player.body.touching.down && this.isGrounded) {
          this.player.body.velocity.y -= 400;
          this.playerShadow.visible = false;
          this.playerCarShadow.visible = false;
          this.player.loadTexture('carJump');
          this.jumpSFX.play();
          this.isGrounded = false;
        }
        break;
      default:
        if (this.player.body.touching.down && this.isGrounded && this.playerAlive) {
          if (this.tutorialSprite != null) {
            if (this.tutorialSprite.visible == true) {
              this.tutorialSprite.visible = false;
              this.startButton.visible = false;
            }
          }
          this.player.body.velocity.y -= 400;
          this.playerShadow.visible = false;
          this.player.loadTexture('playerJump');
          this.jumpSFX.play();
          this.isGrounded = false;
        }
    }
  },

  playerHit: function (player, blockedLayer) {
    switch (this.powerupIndex) {
      case 0:
        break;
      case 1:
        if (this.player.body.touching.down && !this.isGrounded) {
          this.isGrounded = true;
          this.player.body.setSize(91, 50, 0, -5);
          this.player.loadTexture("JetHover");
          this.playerAnimation = this.player.animations.add("JetHover", [0, 1, 2, 3]);
          this.playerAnimation.play(10, true);
          this.playerCarShadow.visible = false;
        }
        break;
      case 2:
        if (this.player.body.touching.down && !this.isGrounded && this.playerAlive) {
          this.isGrounded = true;
          this.playerShadow.visible = true;
          this.player.loadTexture("AutoMagnet");
          this.playerAnimation = this.player.animations.add("AutoMagnet", [0, 1, 2, 3]);
          this.playerAnimation.play(10, true);
          this.playerCarShadow.visible = false;
        }
        break;
      case 3:
        if (this.player.body.touching.down && !this.isGrounded && this.playerAlive) {
          this.isGrounded = true;
          this.autoCrashSpark.visible = true;
          this.autoCrashSparkAnim.play(10, true);
          this.playerCarShadow.visible = false;
          // console.log('Scrapeing');
          //this.player.loadTexture(" ");
          //this.playerAnimation = this.player.animations.add("AutoBird",[0,1,2,3]);
          //this.playerAnimation.play(10,true);
        }
        break;

      case 4:
        if (this.player.body.touching.down && !this.isGrounded && this.playerAlive) {
          this.isGrounded = true;
          this.playerShadow.visible = true;
          this.playerCarShadow.visible = false;
          this.player.loadTexture("AutoJammer");
          this.playerAnimation = this.player.animations.add("AutoJammer", [0, 1, 2, 3]);
          this.playerAnimation.play(10, true);
        }
        break;
      case 5:
          if (this.player.body.touching.down && !this.isGrounded && this.playerAlive) {
            this.isGrounded = true;
            this.playerShadow.visible = false;
            this.player.loadTexture("Car");
            this.playerCarShadow.visible = true;
            this.playerAnimation = this.player.animations.add("Car", [0, 1, 2, 3]);
            this.playerAnimation.play(10, true);
          }
          break;

      default:
        if (this.player.body.touching.down && !this.isGrounded && this.playerAlive) {
          this.isGrounded = true;
          if (!this.onPowerup) {
            this.playerShadow.visible = true;
            this.playerCarShadow.visible = false;
            this.player.loadTexture('Auto');
            if (this.gameStart) {
              this.playerAnimation.play(10, true);
            }
          }
        }
    }
  },

  updateScore: function (score) {
    this.scoreText.setText(Math.floor(score));
  },

  //Camera Shake on collision
  cameraShake: function () {
    this.game.camera.shake(0.01, 250);
    navigator.vibrate && navigator.vibrate([100, 200, 300]);    
  },

  //obstacle collision
  obstacleHit: function (player, obstacle) {
    //  if(player.body.touching){
    this.cameraShake();
    obstacle.body.velocity.x = 0;
    if (this.onPowerup) {
      this.player.angle = 0;
      this.powerDownFX.play();
      this.flappingSFX.stop();
      this.hovering.stop();
      this.autoLoopFX.play('', 0, globalVolume, true);
      this.playPlayerTransform(this.player.x + 20, this.player.y + 10);
      this.player.body.setSize(50, 38, 5, 17);
      this.coinCollector.body.setCircle(20, 10, -40);
      if (this.currentSpeed != 0) {
        this.levelSpeed = this.currentSpeed;
        this.currentSpeed = 0;
      }
      obstacle.kill();
      this.onPowerup = false;
      this.powerupIndex = null;
      this.player.loadTexture('Auto');
      this.autoCrashSpark.visible = false;

      this.levelSpeed = -450;
      this.playerAnimation.play(10, true);      
      this.playerCarShadow.visible = false;
      this.playerShadow.visible = false;
      this.player.body.velocity.y = -200;
      this.player.body.gravity.y = 1000;
      if (this.aliveObstacleCrow != null) {
        this.aliveObstacleCrow.kill();
      }
    } else {
      this.autoHitFX.play();
      this.autoLoopFX.stop();
      //obstacle.body.velocity.x = 0;
      this.gadgetBar.visible = false;
      this.playerAlive = false;
      this.playerBlastAnim.play(20, false);
      obstacle.kill();
      this.player.loadTexture('DestroyedAuto');
      this.player.body.setSize(50, 38, 5, 8);
      this.playerShadow.visible = false;      
      this.playerCarShadow.visible = false;
      this.playerBlast.visible = true;
      this.player.body.velocity.y = -200;
      this.autoCrashSpark.x = 75;
      this.autoCrashSpark.y = 265;
      //this.player.body.velocity.x = 100;
      this.deathTween = this.game.add.tween(this.player).to({ x: this.game.world.centerX + 25 }, 2250, Phaser.Linear, true);
      this.autoCrashSparkTween = this.game.add.tween(this.autoCrashSpark).to({ x: this.game.world.centerX + 75 }, 2250, Phaser.Linear, true);
      this.autoCrashSparkAnim.play(10, true);
      this.autoCrashSmokeTween = this.game.add.tween(this.autoCrashSmoke).to({ x: this.game.world.centerX + 25 }, 2250, Phaser.Linear, true);
      this.autoCrashSmokeAnim.play(10, true);
      // this.gameSDK.postScore(Math.floor(this.score));
      
    this.pauseButton.visible = false;
    this.pauseButtonText.visible = false; 
    
    ShowKaiAds();
      this.game.time.events.add(3000, this.gameOverCondition, this);      
      
    }
    //  }
  },

  coinMagnet: function (player, coins) {
    if (coins.body.velocity.x == this.levelSpeed * this.FPSBuffer) {
      coins.body.velocity.x = 0;
      this.game.physics.arcade.moveToXY(coins, 0, this.player.y + 0, 1000);
    }
  },

  coinCollection: function (player, coins) {
    if (player.body.touching) {
      coins.kill();
      this.coinsCollected += 1;
      this.coinsCollectedText.setText(this.coinsCollected);
      // this.coinFX.volume += 0.04;
      this.coinFX.play();
      this.lastCollected = this.timer.ms;
      //console.log('Last Collected : ' + this.lastCollected);
      //console.log('Coin Volume : ' + this.coinFX.volume);
    }
  },

  crowObstacleHandler: function (player, crow) {
    this.cameraShake();
    if (player.body.touching) {
      if (this.onCrowJammer) {
        crow.body.velocity.y = 300;
        this.crowDeath.play();
      }
      else {
        navigator.vibrate && navigator.vibrate([100, 200, 300]);
        crow.body.velocity.x = 0;
        this.autoHitFX.play();
        this.autoLoopFX.stop();
        this.gadgetBar.visible = false;
        this.playerAlive = false;
        this.playerBlastAnim.play(20, false);
        crow.kill();
        this.player.loadTexture('DestroyedAuto');
        this.player.body.setSize(50, 38, 5, 8);
        this.playerShadow.visible = false;
        this.playerBlast.visible = true;
        this.player.body.velocity.y = -200;
        this.autoCrashSpark.x = 75;
        this.autoCrashSpark.y = 265;
        //this.player.body.velocity.x = 100;
        this.deathTween = this.game.add.tween(this.player).to({ x: this.game.world.centerX + 25 }, 2250, Phaser.Linear, true);
        this.autoCrashSparkTween = this.game.add.tween(this.autoCrashSpark).to({ x: this.game.world.centerX + 75 }, 2250, Phaser.Linear, true);
        this.autoCrashSparkAnim.play(10, true);
        this.autoCrashSmokeTween = this.game.add.tween(this.autoCrashSmoke).to({ x: this.game.world.centerX + 25 }, 2250, Phaser.Linear, true);
        this.autoCrashSmokeAnim.play(10, true);
        
    this.pauseButton.visible = false;
    this.pauseButtonText.visible = false;
        this.game.time.events.add(3000, this.gameOverCondition, this);
      }
    }
  },

  //Powerup Handlers
  powerupRocket: function (player, powerup) {
    if (player.body.touching) {
      GameAnalytics("addDesignEvent", "Powerup:Rocket", 1);
      this.powerUpFX.play();
      this.playPlayerTransform(this.player.x + 45, this.player.y);
      this.player.body.setSize(80, 68, 10, 5);
      this.currentSpeed = this.levelSpeed;
      this.levelSpeed = -450;
      powerup.kill();
      this.onPowerup = true;
      this.powerupIndex = 0;
      this.player.loadTexture("AutoRocket");
      this.playerAnimation = this.player.animations.add("AutoRocket", [0, 1, 2, 3]);
      this.playerAnimation.play(10, true);
      this.player.body.gravity.y = -1000;
    }
  },

  powerupJetpack: function (player, powerup) {
    if (player.body.touching) {
      GameAnalytics("addDesignEvent", "Powerup:JetPack", 1);
      this.powerUpFX.play();
      this.autoLoopFX.pause();
      this.playPlayerTransform(this.player.x + 45, this.player.y);
      this.player.body.setSize(80, 60, 5, 10);
      this.currentSpeed = this.levelSpeed;
      this.levelSpeed = -450;
      powerup.kill();
      this.onPowerup = true;
      this.powerupIndex = 1;
      this.player.loadTexture("AutoJet");
      this.playerAnimation = this.player.animations.add("AutoJet", [0, 1]);
      this.playerAnimation.play(10, true);
    }
  },

  powerupMagnet: function (player, powerup) {
    if (player.body.touching) {
      GameAnalytics("addDesignEvent", "Powerup:Magnet", 1);
      this.powerUpFX.play();
      this.playPlayerTransform(this.player.x + 35, this.player.y + 30);
      this.player.body.setSize(50, 35, 5, 60);
      this.coinCollector.body.setCircle(60, 0, -110);
      powerup.kill();
      this.onGadgetPowerup = true;
      this.gadgetBar.scale.x = 1
      this.gadgetTimer = 0;
      this.gadgetBar.visible = true;
      this.powerupIndex = 2;
      this.player.loadTexture("AutoMagnet");
      this.playerAnimation = this.player.animations.add("AutoMagnet", [0, 1, 2, 3]);
      this.playerAnimation.play(10, true);
    }
  },

  powerupBird: function (player, powerup) {
    if (player.body.touching) {
      GameAnalytics("addDesignEvent", "Powerup:Bird", 1);
      this.powerUpFX.play();
      this.autoLoopFX.pause();
      this.playPlayerTransform(this.player.x + 40, this.player.y);
      this.player.body.setSize(80, 45, 5, 0);
      this.coinCollector.body.setCircle(15, 25, -35);
      this.currentSpeed = this.levelSpeed;
      this.levelSpeed = -450;
      powerup.kill();
      this.onPowerup = true;
      this.powerupIndex = 3;
      this.player.loadTexture("AutoBird");
      this.autoCrashSpark.x = 55;
      this.autoCrashSpark.y = 265;
      this.playerAnimation = this.player.animations.add("AutoBird", [0, 1, 2, 3]);
      this.playerAnimation.play(10, true);
    }
  },

  powerupCrowJammer: function (player, powerup) {
    if (player.body.touching) {
      GameAnalytics("addDesignEvent", "Powerup:CrowJammer", 1);
      this.powerUpFX.play();
      this.playPlayerTransform(this.player.x + 40, this.player.y);
      this.player.body.setSize(50, 35, 5, 40);//(50, 60, 5, 14);
      this.coinCollector.body.setCircle(20, 10, -40);
      powerup.kill();
      this.onCrowJammer = true;
      this.gadgetBar.scale.x = 1
      this.gadgetTimer = 0;
      this.gadgetBar.visible = true;
      this.powerupIndex = 4;
      this.player.loadTexture("AutoJammer");
      this.playerAnimation = this.player.animations.add("AutoJammer", [0, 1, 2, 3]);
      this.playerAnimation.play(10, true);
    }
  },

  powerupCar: function (player, powerup) {
    if (player.body.touching) {
      GameAnalytics("addDesignEvent", "Powerup:Car", 1);
      this.powerUpFX.play();
      this.autoLoopFX.pause();
      this.playPlayerTransform(this.player.x + 45, this.player.y);
      this.player.body.setSize(95, 50, 8, 8);
      this.currentSpeed = (this.levelSpeed * 1.2);
      this.levelSpeed = -450;
      powerup.kill();
      this.onPowerup = true;
      this.powerupIndex = 5;
      this.player.loadTexture("Car");
      this.playerAnimation = this.player.animations.add("Car", [0, 1, 2, 3]);
      this.playerAnimation.play(10, true);
    }
  },

  highScoreCalculator: function (score) {
    if (score > highScore) {
      highScore = score;  
      //window.topScore = highScore          
    }
  },

  gameOverCondition: function () {    
    this.highScoreCalculator(Math.floor(this.score));    
    localStorage.setItem('score', highScore)
    console.log(localStorage.getItem('score'))    
    console.log(highScore)
    this.parallax.update(0);
    this.gameOverFX.play();
    this.gameOver = true;
    this.powerupIndex = null;
    this.gameOverImage.visible = true;
    this.game.add.tween(this.gameOverImage).to({ y: (25), }, 100, Phaser.Easing.Linear.None, true).onComplete.add(this.tweenBack, this);
    GameAnalytics("addProgressionEvent", "Complete", "Journey", "", "", Math.floor(this.score));
    GameAnalytics("addDesignEvent", "Journey:CoinsCollected", this.coinsCollected);
  },

  tweenBack: function () {
    this.game.add.tween(this.gameOverImage).to({ y: (45), }, 100, Phaser.Easing.Linear.None, true).onComplete.add(this.tweenFront, this);
  },

  tweenFront: function () {
    this.game.add.tween(this.gameOverImage).to({ y: (25), }, 100, Phaser.Easing.Linear.None, true).onComplete.add(this.tweenGameOverScreen, this);
  },

  tweenGameOverScreen: function () {
    this.gameRetryText.visible = true;
    this.gameOverLabelText.visible = true;
    this.gameRetryTextAnim.play(2, true);
    this.gameOverText.setText(Math.floor(this.score));
    this.gameOverText.visible = true;
    //  this.gameOverCoin.visible = true;
    this.gameOverCoinCount.visible = true;
    this.gameOverCoinCount.setText(this.coinsCollected);
  },

  

  render:function(){
    // this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00");
    /* if(this.dummyObstacle != null){
   this.game.debug.body(this.dummyObstacle);}
   this.game.debug.body(this.player);
   this.game.debug.body(this.coinCollector);
   this.game.debug.body(this.platform); */
 }
};
