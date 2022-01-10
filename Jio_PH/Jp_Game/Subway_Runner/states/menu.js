var background;
var title;
var spaceKey ;
var fireKey;
var fireKeyAni;
var timer;
var menuState = {
    
    create: function(){
        
        // Image
       background  = game.add.tileSprite(0, 0, 240,320, "bg");
        title = game.add.sprite(26, 30, "title");
        console.log("menu state..................")
        fireKey = game.add.sprite("press5");
         fireKey = game.add.sprite(14,220,"press5");
        
         fireKeyAni = fireKey.animations.add('fireKeyAni',[0,1],2);
            game.physics.arcade.enable(fireKey);
        
       fireKey.animations.play('fireKeyAni', 2
                                 , true);
     
      
      //  console.log("loading............"+title.width)
       //  this.OverLayText = game.add.text(55, 240, "Loading...........")
       /* game.add.text(55,240,'Loading.......',{
                font:'20px Arial',
                fill:'#ff0000'
        });*/
/*
             {

                 font: "15px Arial",
                 fill: "#FFFFFF"
             })
		
         //Key Events 
      /*  spaceKey = game.input.keyboard.addKey(
                    Phaser.Keyboard.ENTER);
        spaceKey.onDown.add(this.start,this);*/
        // timer = game.time.events.add(2000, this.start, this);
         spaceKey = game.input.keyboard.addKey(
                    Phaser.Keyboard.ENTER);
        spaceKey.onDown.add(this.start,this);
        
    },
    
    start:function(){
       
       // game.state.start('play');
            /*  game.time.events.add(2000,function () {
             game.state.start('play'); }, this);*/
        
        game.state.start('gameplay')
        
   
    },
    
     update: function() {
    
	// Animation will be played in update function 
    
//     
         //this.start();
          
     }
//    
}