
       /*****Phaser Canvas Required for the game *****/
   
var game = new Phaser.Game(240,320,Phaser.AUTO,'subwayRunner');  

 //"gameDiv" is your game id , you can give any name in place of it , It acts as id of your game which you should specify in index.html

// Below i'm adding various states of the game 
game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add('help',helpState);
game.state.add('menu',menuState);
game.state.add('gameplay',gameplayState);
game.state.add('gameOver',gameOverState);
game.state.start('boot');

//Locally Store the data ie HighScore , which can be used for comparison of the score later on .
 
game.highScore = localStorage.getItem('subway_highscore');

if(game.highScore  === null) 
{    localStorage.setItem('subway_highscore', 0);  
 game.highScore = 0;
}

/*game.levelScore = localStorage.getItem('levelNumber');
  console.log("localStorage.getItem('levelNumber')   "+localStorage.getItem('levelNumber'))
 console.log("game.levelscore-------------------------------    "+game.levelScore)
if(game.levelScore  === null) 
   
        {
   localStorage.setItem('levelNumber', 1);    
            console.log("game.levelscore----------------------after---------    "+game.levelScore)
  game.levelScore = 1;
          
}*/


 //console.log("game.levelscore----------------------after---------    "+game.levelScore)

