var congoState = {
    
      create: function(){
        
      
                 this.game.stage.backgroundColor = '#652618';

   
        var gameOverLabel = game.add.text(50,game.world.height/4,'Congragulations',{font:'20px Arial',fill:'#ffffff'});
	
		
 /*var startLabel =game.add.text(24,game.world.height/2,'PRESS "FIRE" TO RETRY ',
         {font: '18px Arial',fill:'#ffffff'});
  */
  
          fireKey = game.add.sprite("press5");
         fireKey = game.add.sprite(14,200,"press5");
        
         fireKeyAni = fireKey.animations.add('fireKeyAni',[0,1],2);
            game.physics.arcade.enable(fireKey);
        
       fireKey.animations.play('fireKeyAni', 2
                                 , true);
      
        var spaceKey = game.input.keyboard.addKey(
                    Phaser.Keyboard.ENTER); 
					
			
        spaceKey.onDown.add(this.start,this);
        
    },
    
    start:function(){
      
        game.state.start('play');
        localStorage.setItem('levelNumber', 1);    
        game.levelScore = 1;
        
    }
    
}