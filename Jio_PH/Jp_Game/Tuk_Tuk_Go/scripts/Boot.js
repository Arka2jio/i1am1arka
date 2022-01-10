var TukTukGo = TukTukGo || {};

TukTukGo.Boot = function(){

};

//setting game configuration and loading the assets for the loading screen
TukTukGo.Boot.prototype = {
  preload: function() {
    //loading screen
    this.load.spritesheet('AutoLoadingScreen', 'assets/sprites/AutoLoadingScreen.png', 62, 56);    
    this.load.bitmapFont('numbers', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
  },

  create: function() {
    //loading screen will have a white background
    //this.game.stage.backgroundColor = '#8fcef8';

    //physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    //this.scale.forceLandscape = true;
    
    window.addEventListener('keydown', function (e) {      
      if (e.keyCode === 8) { 
           window.close()
      }    
    })
    //Prelaoding Assets
    this.state.start('Preload');
  }
};
