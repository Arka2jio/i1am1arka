var scoreLabel;
var labelScore1;
var bestScoreLabel;
var bg;
var gameOverState = {
    
      create: function(){

       
      this.game.stage.backgroundColor = '#963F05';
          
        bg = game.add.sprite(0, 0, "bg");
      this.levelNo = gameplayState.levelNo; 
      this.score = gameplayState.score;
        
		
		//Game Over Text 
        var gameOverLabel = game.add.text(50,game.world.height/4-10,'Game Over !!',{
                font:'25px Arial',
                fill:'#000000'
        });
		
		// Your Game Score 
        scoreLabel = game.add.text(80,game.world.height/3+10,'Score :',{
            font:'20px Arial',
            fill:'#000000'
        });
          
     
          
       labelScore1 = game.add.text(150, game.world.height/3+10, "0", 
         {
            font: "20px Arial", 
            fill: "#000000"
          }); 
     
          
        labelScore1.text = this.score;  
          
          //high score text
          
           bestScoreLabel = game.add.text(55,game.world.height/2,'Best Score :',{
            font:'20px Arial',
            fill:'#000000'
        })  
        
       
          console.log("high score u is "+localStorage.getItem('subway_highscore'))
          
          if(localStorage.getItem('subway_highscore') === null){

               localStorage.setItem('subway_highscore',this.score);
              console.log("high score u is 11111  "+localStorage.getItem('subway_highscore'))

          }

          else if(this.score > localStorage.getItem('subway_highscore')){
              console.log("score-----------------------  "+this.score)
              localStorage.setItem('subway_highscore',this.score);
          
           //   jioSDK.postScore(this.score);  

}
           this.labelBestScore = game.add.text(165, game.world.height/2, "0", 
         {
            font: "20px Arial", fill: "#000000"
          }); 
          
         this.labelBestScore.text = localStorage.getItem('subway_highscore'); 

        var startLabel =game.add.text(35,game.world.height/2+40,'Press "Center Key/5"\n         to Restart',
         {
            font: '18px Arial',
            fill:'#000000'
        });
  
     
        var spaceKey = game.input.keyboard.addKey(
                    Phaser.Keyboard.ENTER); 
        var fiveKey = game.input.keyboard.addKey(
                    Phaser.Keyboard.FIVE);
          
        spaceKey.onDown.add(this.start,this);
        fiveKey.onDown.add(this.start,this);
        
    },
    
    start:function(){
        
       if(gameplayState.interstitialAd==null)
        game.state.start('gameplay');
        
    }
    
}