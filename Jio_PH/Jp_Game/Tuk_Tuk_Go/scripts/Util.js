  function Util(game){
  this.game = game;
  this.randomNumber = null;

  //Function to get a random number
   this.GetRandomNumber = function (startValue, endValue) {
   this.randomNumber = this.game.rnd.integerInRange(startValue, endValue);
   return this.randomNumber;
  };

}
