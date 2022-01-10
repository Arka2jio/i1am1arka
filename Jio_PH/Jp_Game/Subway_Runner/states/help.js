var background;
var title;
var spaceKey ;
var fireKey;
var fireKeyAni;
var timer;
var startLabel;
var fiveKey;
var count;
var background;
var helpState = {
    
    create: function(){
        
        count = 0;
        // Image
      // background  = game.add.tileSprite(0, 0, 240,320, "trans");
       
        this.game.stage.backgroundColor = '#D26611';
        
         background = game.add.tileSprite(0, 0,
         240, 320, 'bg');
        
        var instruction =game.add.text(60,game.world.height/6-10,'How to play :',
         {
            font: '21px Arial',
            fill:'#000000'
        });
       var instruction1 =game.add.text(25,game.world.height/3 + 5,'Press "Left/4 Key to move left"\nPress "Right/6 Key"to move right"\nPress "Up/2 Key"to jump"\nPress "Down/8 Key"to slide"',
         {
            font: '14px Arial',
            fill:'#000000'
        });
        startLabel =game.add.text(35,game.world.height/2+70,'Press "Center Key/5"\n          to Start',
         {
            font: '18px Arial',
            fill:'#ffffff'
        });
        
        
        
         spaceKey = game.input.keyboard.addKey(
                    Phaser.Keyboard.ENTER);
        spaceKey.onDown.add(this.start,this);
        
        fiveKey = game.input.keyboard.addKey(
                    Phaser.Keyboard.FIVE);
        fiveKey.onDown.add(this.start, this);
    },
    
    start:function(){
       
       // game.state.start('play');
            /*  game.time.events.add(2000,function () {
             game.state.start('play'); }, this);*/
        
        game.state.start('gameplay')
        
   
    },
    
     update: function() {
         count++;
         if(count > 10){
              startLabel.tint = Math.random() * 0xffffff;
             count = 0;
         }
     
	// Animation will be played in update function 
    
//     
         //this.start();
          
     }
//    
}