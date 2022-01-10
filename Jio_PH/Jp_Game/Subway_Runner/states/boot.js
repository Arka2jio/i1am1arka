var elem;
var background;
var bootState = { 
  
    
    preload: function(){
        game.load.image('logo',
        "assets/logo.png");
        
  },
    create: function() {
		
		  elem = document.getElementById("subwayRunner");
  
        if ( elem.fullscreenEnabled ) {
            elem.mozRequestFullScreen();
        }
        
     /* console.log("boot state");
        
        console.log("game.hightscore is.................   "+game.highScore);
        console.log("game.levleno------------------------   "+game.levelScore)
        console.log("game levelno111111111111     nnnnnnnnnnnn   "+localStorage.getItem('levelNumber'))*/
        background = game.add.tileSprite(0, 0,
        240,320,"logo");
        timer = game.time.create(1000, false);
        game.time.events.add(1000,this.loadPage);
        
        
		
    },
      
    loadPage: function () {
        game.time.events.add(1000,function () {
            game.state.start('load');
        },this);
    }

};