var TukTukGo = TukTukGo || {};

//loading the game assets
TukTukGo.Preload = function () { };

TukTukGo.Preload.prototype = {
  preload: function () {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'AutoLoadingScreen');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBarAnim = this.preloadBar.animations.add("AutoLoadingScreen", [0,1,2,3]);
    this.preloadBarAnim.play(10, true);
    this.gameLoadingText = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY + 70, 'numbers', 'LOADING...', 30);
    this.gameLoadingText.anchor.setTo(0.5);
    //this.preloadBar.scale.setTo(3);
    //this.load.setPreloadSprite(this.preloadBar);

    //Load Font
    //this.load.bitmapFont('numbers', 'assets/fonts/NumberSpriteSheet.png', 'assets/fonts/numbers-data.xml');

    //Load Audio
    this.load.audio('hit', 'assets/audio/AutoHit_SFX.ogg');
    this.load.audio('gameover', 'assets/audio/ForHire_SFX.ogg');
    this.load.audio('gameBGM', 'assets/audio/GameBGM.ogg');
    this.load.audio('autoridingfour', 'assets/audio/Auto_Riding_Four.ogg');
    this.load.audio('powerupvariation', 'assets/audio/PowerUpVariation.ogg');
    this.load.audio('powerdownvariation', 'assets/audio/PowerDownVariation.ogg');
    this.load.audio('crowalert', 'assets/audio/CrowAlert.ogg');
    this.load.audio('hover', 'assets/audio/Hover.ogg');
    this.load.audio('crowcollideanddeath', 'assets/audio/CrowCollisionAndDeath.ogg');
    this.load.audio('collectedcoin', 'assets/audio/CoinCollected.ogg');
    this.load.audio('autojump', 'assets/audio/AutoJumpSFX.ogg');
    this.load.audio('flapping', 'assets/audio/FlappingSFX.ogg');

    //Load JSON
    this.load.text('Score', 'json/Score.json');
    this.load.text('CoinWave', 'json/CoinWave.json');

    //load game assets
    //Auto Sprites
    this.load.spritesheet('Auto', 'assets/sprites/Auto.png', 62, 56);
    this.load.image('DestroyedAuto', 'assets/sprites/DestroyedAuto.png');
    this.load.spritesheet('Blast', 'assets/sprites/Blast.png', 154, 132);
    this.load.spritesheet('TransformParticle', 'assets/sprites/TransformParticle.png', 154, 132)
    this.load.spritesheet('AutoJet', 'assets/sprites/AutoJet01.png', 91, 76);
    this.load.spritesheet('JetHover', 'assets/sprites/JetHover.png', 91, 65);
    this.load.spritesheet('AutoRocket', 'assets/sprites/AutoRocket.png', 104, 68);
    this.load.spritesheet('AutoMagnet', 'assets/sprites/AutoMagnet.png', 84, 96);
    this.load.spritesheet('MagnetJump', 'assets/sprites/MagnetJump.png', 84, 96);
    this.load.spritesheet('AutoBird', 'assets/sprites/AutoBird.png', 80, 47);
    this.load.spritesheet('AutoJammer', 'assets/sprites/AutoJammer.png', 62, 75);
    this.load.image('AutoJammerJump', 'assets/sprites/AutoJammerJump.png');
    this.load.image('GadgetBar', 'assets/sprites/preloader-bar.png');


    this.load.image('playerShadow', 'assets/sprites/AutoShadow.png');
    this.load.image('playerCarShadow', 'assets/sprites/CarShadow.png');
    this.load.image('playerJump', 'assets/sprites/AutoJump01.png');
    this.load.image('playerDead', 'assets/sprites/AutoCrash.png');
    this.load.image('carJump', 'assets/sprites/CarJump.png');

    //Obstacles
    this.load.spritesheet('bull', 'assets/sprites/BullSpriteSheet.png', 70, 58);
    this.load.spritesheet('police', 'assets/sprites/Patrol.png', 56, 62);
    this.load.image('TarDrum', 'assets/sprites/TarDrum.png');
    this.load.image('ManHole', 'assets/sprites/ManHole.png');
    this.load.image('BannerFront', 'assets/sprites/BannerFront.png');
    this.load.image('BannerBack', 'assets/sprites/BannerBack.png');
    this.load.image('ElectricPostBack', 'assets/sprites/ElectricPostBack.png');
    this.load.spritesheet('ElectricPostFront', 'assets/sprites/ElectricPostFront.png', 195, 243);
    this.load.spritesheet('Crow', 'assets/sprites/Crow.png', 74, 29);
    this.load.spritesheet('Dog', 'assets/sprites/Dog.png', 56, 24);
    this.load.image('BillBoardBack', 'assets/sprites/BillBoardBack.png');
    this.load.image('BillBoardFront', 'assets/sprites/BillBoardFront.png');
    this.load.image('Pipe', 'assets/sprites/Pipe.png', 46, 61);
    this.load.image('Barricade', 'assets/sprites/Barricade.png', 56, 54);
    this.load.spritesheet('BestScore', 'assets/sprites/BestScore.png', 185, 140);
    this.load.image('TukTukGoLogo', 'assets/sprites/TukTukGoLogo.png');
    this.load.spritesheet('AutoCrashSpark', 'assets/sprites/AutoCrashSpark.png', 33, 15);
    this.load.spritesheet('AutoCrashSmoke', 'assets/sprites/AutoCrashSmoke.png', 78, 87);

    //Collectables
    this.load.spritesheet('Coins', 'assets/sprites/Coins.png', 10, 14);
    //Background and Foreground
    this.load.image('Mask', 'assets/sprites/Mask.JPG');

    this.load.image('pavement', 'assets/sprites/Pavement.png');

    //PowerUps
    //this.load.image('JetPackPowerup', 'assets/sprites/JetPackPowerup.png');
    this.load.spritesheet('JetPackPowerup', 'assets/sprites/JetPackPowerup.png', 33, 27);
    //UI
    this.load.image('GameOverScreen', 'assets/sprites/GameOver.png');
    this.load.image('ScoreLabel', 'assets/sprites/ScoreLabel.png');
    this.load.image('PauseMenu', 'assets/sprites/PauseMenu.png')
    this.load.image('EmptyButton', 'assets/sprites/EmptyButton.png')
    this.load.image('ButtonHighlight', 'assets/sprites/Highlight.png')
    this.load.spritesheet('AlertNotification', 'assets/sprites/AlertNotification.png', 20, 19);
    this.load.spritesheet('JumpButton', 'assets/sprites/JumpButton.png', 66, 63);
    this.load.spritesheet('TutorialSprite', 'assets/sprites/TutorialSprite.png', 190, 46);
    this.load.spritesheet('GameRetryText', 'assets/sprites/GameRetryText.png', 183, 74);

    //Splash Screem
    this.load.image('HammerplayLogo', 'assets/sprites/HammerplayLogo.jpg');
    this.load.image('SplashScreen', 'assets/sprites/SplashScreen.jpg');

    // Load building sprites
    for (var i = 0; i < 25; i++) {
      this.load.image(`Build_${i + 1}`, `assets/sprites/buildings/Build_${this.FormatNumberLength(i + 1, 2)}.png`);
    }

    // Load foreground sprites
    for (var i = 0; i < 9; i++) {
      this.load.image(`Foreground_${i + 1}`, `assets/sprites/foregrounds/Foreground_${this.FormatNumberLength(i + 1, 2)}.png`);
    }

    // Load midground sprites
    for (var i = 0; i < 5; i++) {
      this.load.image(`Animal_${i + 1}`, `assets/sprites/midgrounds/Animal_${this.FormatNumberLength(i + 1, 2)}.png`);
    }

    // Load monuments sprites
    for (var i = 0; i < 13; i++) {
      this.load.image(`Monument_${i + 1}`, `assets/sprites/monuments/Monument_${this.FormatNumberLength(i + 1, 2)}.png`);
    }

    // Load road sprites
    this.load.image('TarRoad', 'assets/sprites/roads/TarRoad.png');
    this.load.image('MudRoad', 'assets/sprites/roads/MudRoad.png');
    this.load.image('TarToMudRoad', 'assets/sprites/roads/TarToMudRoad.png');
    this.load.image('MudToTarRoad', 'assets/sprites/roads/MudToTarRoad.png');

    // Load rail piece sprites
    this.load.image('RailwayStation', 'assets/sprites/rail-pieces/RailwayStation.png');
    this.load.image('Rail', 'assets/sprites/rail-pieces/Rail.png');
    this.load.image('Engine', 'assets/sprites/rail-pieces/Engine.png');
    this.load.image('Coach', 'assets/sprites/rail-pieces/Coach.png');

    this.load.image('Haze', 'assets/sprites/Haze.png');

    this.load.spritesheet('Auto', 'assets/sprites/Auto.png', 62, 56);
    this.load.spritesheet('Car', 'assets/sprites/Car.png', 103, 56);
  },

  create: function () {
    this.logoScreen = this.add.sprite(0, 0, 'HammerplayLogo');
    this.game.time.events.add(2000, this.SplashScreen, this);
  },

  SplashScreen: function () {
    this.splashScreen = this.add.sprite(0, 0, 'SplashScreen');
    this.game.time.events.add(2000, this.loadGame, this);
  },

  loadGame: function () {
    this.state.start('Game');
  },

  FormatNumberLength: function (num, length) {
    var r = "" + num;
    while (r.length < length) {
      r = "0" + r;
    }
    return r;
  }
};
