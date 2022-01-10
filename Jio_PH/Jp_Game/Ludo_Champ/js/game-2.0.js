/* Phaser.IO game example */

var mainChain = function() 
{

    /* JIO SDK 2.0 integration */
   /* var jioConf = { "autoControl": ["volume", "exit"], "gameName": "ludoChamp", "gameVersion": "1.0.0"};
    var jioSDK = new Jiogames(jioConf);*/
    document.addEventListener('keydown', handleKeyDown);

    function handleKeyDown(e) 
    {
        switch (e.key) {
          
            case "Backspace":
            //   console.log("EXIT");
             //  e.preventDefault();
              //  jioSDK.exit(0);
             // game.destroy();
           //  document.close();
            // process.exit(-1);
                break;
            default:
                break;
        }
    }


 /* JIO SDK 2.0 integration */

 var hidden, visibilityChange; 
 if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
   hidden = "hidden";
   visibilityChange = "visibilitychange";
 } else if (typeof document.msHidden !== "undefined") {
   hidden = "msHidden";
   visibilityChange = "msvisibilitychange";
 } else if (typeof document.webkitHidden !== "undefined") {
   hidden = "webkitHidden";
   visibilityChange = "webkitvisibilitychange";
 }
 document.addEventListener(visibilityChange, handleVisibilityChange, false);

 function handleVisibilityChange() {
    if (document[hidden]) {
     
    console.log("NOT VISIBLE NOW");
 
    } else {
        console.log("IS VISIBLE NOW");
    
    }
  }
 
 /*var jioConf = { "autoControl": ["volume", "exit"], "gameName": "ludoChamp", "gameVersion": "1.0.0"};
 
 window.jioSDK = new Jiogames(jioConf);
 document.addEventListener('keydown', handleKeyDown);

 function handleKeyDown(e) 
 {
    switch (e.key) {
        case "0":
            if (game.paused) 
            {
                console.log("gameResumed");
                //banner.setText("");
               // music && music.play();
                game && game.gameResumed();
            } else {
                console.log("gamePaused");
              //  banner.setText("Game paused");
               // music && music.pause();
                game && game.gamePaused();
            }
            break;

         case "Backspace":
         console.log("EXIT");
         e.preventDefault();
        // jioSDK.exit(0);
    

            break;
        default:
            break;
    }
 }*/
 /* JIO ads related code */
 /*  cacheAds = function() {
     VMAX.jioSDK_adId = "ludochamp"; // <ins ads id in index.html
     VMAX.jioSDK_adReady = false;



     console.log("calling cache Jio Ad")
     VMAX.cacheAd(VMAX.jioSDK_adId);
     VMAX.onAdReady = function(AdPlacementId) {
         VMAX.jioSDK_adReady = true;
         console.log("VMAX: onAdReady");
     }
     VMAX.onAdError = function(AdPlacementId, errorCode) {
         console.log("VMAX: onAdError: ", errorCode);
         VMAX.jioSDK_adReady = false;
     }
     VMAX.onAdClose = function(AdPlacementId) {
         console.log("onAdClose");
         setTimeout(function() {
             console.log("VMAX: onAdClose");
             cacheAds(); // call cache on every ad close and get prepared for next ad
         }, 3000);
     }
     
 }

 showAds = function() { // use this showAds func in your game levels/game over or maintain your ad frequency when to show ads
     if(VMAX.jioSDK_adReady){
         VMAX.showAd(VMAX.jioSDK_adId);
         console.log("showing ads on id: ", VMAX.jioSDK_adId);
     }
 }*/


    /*function cacheAds()
    {
        console.log("INSIDE CACHE AD");
        VMAX.jioSDK_adId = "ludochamp"; // <ins ads id in index.html
        VMAX.jioSDK_adReady=false;
        console.log("calling cache Jio Ad")
        VMAX.cacheAd(VMAX.jioSDK_adId);
        VMAX.onAdReady = function(AdPlacementId) {
        VMAX.jioSDK_adReady=true;
        console.log("jio ads cached");
        }
        VMAX.onAdError = function(AdPlacementId, errorCode) {
        console.log("jio ads cache error: ",errorCode);
        VMAX.jioSDK_adReady=false;
        }
        VMAX.onAdClose = function(AdPlacementId){
        setTimeout(function() {
        console.log("jio ads: onAdClose");
        cacheAds(); // call cache on every ad close and get prepared for next ad
        }, 3000);
        }
    }*/
    
    var showingAds = false;

    function showAds() { // use this showAds func in your game levels/game over or maintain your ad frequency when to show ads

   // cacheAds();

    console.log("INSIDE SHOWING AD");
    //if(VMAX.jioSDK_adReady)
    {


		getKaiAd({
			publisher: '715aba79-25dc-4606-82a4-2a57cf5c3b51',
			app: 'ludoChamp',
			slot: 'default',
			onerror: err => console.error('Custom catch:', err),
			onready: ad => {
				// Ad is resolved, loaded, and is ready to display
				
                // calling 'display' will display the ad
                showingAds = true
                console.log("Showing Ad here")
                ad.call('display')
			}
		});

        // VMAX.jioSDK_adId = "ludochamp";
        // VMAX.showAd(VMAX.jioSDK_adId);
        // console.log("showing ads on id: ", VMAX.jioSDK_adId);
    }
    /*else{
        console.log("AD IS NOT READY");
    }*/
    }

    //cacheAds(); //

    // cacheAds(); /// cache once on page load*/

    /* JIO SDK integration ends */



    /*JIO SDK END */




    /*Google analytics begin */
    
        /**
    * Init game, init google analytics
    */

  
/*
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); 
*/


 
 
    function initGoogleAnalytics() 
    {
  

    /* ga('create', 'UA-50604869-3', 'auto');
     ga('send', 'pageview');
     //console.log(ga);
   
     sendGAEvent("GameLaunch","Launched"," ");*/
    }

    function sendGAEvent(category,action,label=" ")
    {
        // ga('send', 'event', category, action, label);
        
    }
    
    function receivedInputFromMP(playerNo,placeOfAction)
    {
        return;
        console.log("INPUT GOT FROM :"+playerNo+"::"+placeOfAction);
    }

    function wantInputFromMP(playerNo,placeOfAction)
    {
        return;
        console.log("WANT FROM :"+playerNo+"::"+placeOfAction);

    }



    var sixCounter=0;
    
    function getMax()
    {
        var a=randomiser(1,100);
        var max=5;
        var percentForSix=100;
        if(sixCounter==0)
        {
          //   console.log("No six in previous step so max is 6");
            max=6;
        }
        if(sixCounter==1)
        {
           
            percentForSix=50;
            if(a<=percentForSix)
            {
           //     console.log("Can roll another 6 :: Percent :"+percentForSix);
                max=6;
            }

        }
        else if(sixCounter==2)
        {
            percentForSix=25;
            if(a<=percentForSix)
            {
              //  console.log("Can roll another 6 :: Percent :"+percentForSix);
                max=6;
            }
        }
        else if(sixCounter==3)
        {
            percentForSix=10;
            if(a<=percentForSix)
            {
             //   console.log("Can roll another 6 :: Percent :"+percentForSix);
                max=6;
            }
        }
        else if(sixCounter==4)
        {
            percentForSix=10;
            if(a<=percentForSix)
            {
             //   console.log("Can roll another 6 :: Percent :"+percentForSix);
                max=6;
            }
        }
        else if(sixCounter>4)
        {
            percentForSix=5;
            if(a<=percentForSix)
            {
             //   console.log("Can roll another 6 :: Percent :"+percentForSix);
                max=6;
            }
        }
      //  console.log("REQD PERCENT :"+ percentForSix+"::"+"CURR PERCENT : "+a);
        return max;

    }


//GA-CODE : UA-50604869-3 
 
    
    /*Google analytics end*/

    ///


    var redAdjustCounter=0;
    var redAdjustedOnce=[];

    var yellowAdjustCounter=0;
    var yellowAdjustedOnce=[];

    var greenAdjustCounter=0;
    var greenAdjustedOnce=[];

    var blueAdjustCounter=0;
    var blueAdjustedOnce=[];


    function calOffsets()
    {
      //  console.log("CALCULATING HERE");
        redAdjustedOnce=[];
        redAdjustCounter=0;

        yellowAdjustedOnce=[];
        yellowAdjustCounter=0;

        greenAdjustedOnce=[];
        greenAdjustCounter=0;

        blueAdjustedOnce=[];
        blueAdjustCounter=0;

    
      
        offsetPos(1,red1curr,1);
        offsetPos(1,red2curr,2);
        offsetPos(1,red3curr,3);
        offsetPos(1,red4curr,4);


        offsetPos(2,yellow1curr,1);
        offsetPos(2,yellow2curr,2);
        offsetPos(2,yellow3curr,3);
        offsetPos(2,yellow4curr,4);

        offsetPos(3,green1curr,1);
        offsetPos(3,green2curr,2);
        offsetPos(3,green3curr,3);
        offsetPos(3,green4curr,4);

        offsetPos(4,blue1curr,1);
        offsetPos(4,blue2curr,2);
        offsetPos(4,blue3curr,3);
        offsetPos(4,blue4curr,4);

    }

    var tokenXOffset=-8;

    function offsetPos(color,curr,tokenNo)
    {
        var allTokens=[red1curr,red2curr,red3curr,red4curr,yellow1curr,yellow2curr,yellow3curr,yellow4curr,green1curr,green2curr,green3curr,green4curr,blue1curr,blue2curr,blue3curr,blue4curr];
        var arrX=[];
        var arrY=[];  
 
        




 


        if(color==1)
        {
            arrX=redNodeX;
            arrY=redNodeY;

            if(tokenNo==1)
            {
                allTokens[0]=-1;
            }
            else if(tokenNo==2)
            {
                allTokens[1]=-1;
            }
            else if(tokenNo==3)
            {
                allTokens[2]=-1;
            }
            else if(tokenNo==4)
            {
                allTokens[3]=-1;
            }


        }else if(color==2)
        {
            arrX=yellowNodeX;
            arrY=yellowNodeY;

            if(tokenNo==1)
            {
                allTokens[4]=-1;
            }
            else if(tokenNo==2)
            {
                allTokens[5]=-1;
            }
            else if(tokenNo==3)
            {
                allTokens[6]=-1;
            }
            else if(tokenNo==4)
            {
                allTokens[7]=-1;
            }
        }
        else if(color==3)
        {
            arrX=greenNodeX;
            arrY=greenNodeY;

            if(tokenNo==1)
            {
                allTokens[8]=-1;
            }
            else if(tokenNo==2)
            {
                allTokens[9]=-1;
            }
            else if(tokenNo==3)
            {
                allTokens[10]=-1;
            }
            else if(tokenNo==4)
            {
                allTokens[11]=-1;
            }
        }
        else if(color==4)
        {
            arrX=blueNodeX;
            arrY=blueNodeY;
            if(tokenNo==1)
            {
                allTokens[12]=-1;
            }
            else if(tokenNo==2)
            {
                allTokens[13]=-1;
            }
            else if(tokenNo==3)
            {
                allTokens[14]=-1;
            }
            else if(tokenNo==4)
            {
                allTokens[15]=-1;
            }
        } 

     
        var redOverLapping=[];
        var yellowOverLapping=[];
        var greenOverLapping=[];
        var blueOverLapping=[];

        var redCounter=0;
        var yellowCounter=0;
        var greenCounter=0;
        var blueCounter=0;

        for(var i=0;i<allTokens.length;i++)
        {

            if(allTokens[i]<0 || allTokens[i]>=56)//Caged or at home.  
            continue;
             
            if(i<=3) //CHECK FOR REDS
             {
                
                if(arrX[curr]==redNodeX[allTokens[i]] && arrY[curr]==redNodeY[allTokens[i]])
                {
                    
                    if( redAdjustedOnce.includes(i+1)==false && redOverLapping.includes(i+1)==false)
                    {
                        redOverLapping[redCounter]=(i+1); //Red x is overlapping on this tile.
                        redCounter++;
                    }
                   
                    if(color==1) //Also add the one which is currently overlapping
                    {
                        if( redAdjustedOnce.includes(tokenNo)==false && redOverLapping.includes(tokenNo)==false)
                        {
                            redOverLapping[redCounter]=tokenNo;
                            redCounter++;
                        }
                    }
                    else if(color==2) //Yellow
                    {
                        if(yellowAdjustedOnce.includes(tokenNo)==false && yellowOverLapping.includes(tokenNo)==false)
                        {
                            yellowOverLapping[yellowCounter]=tokenNo;
                            yellowCounter++;
                        }
                    }
                    else if(color==3) //Green
                    {
                        if(greenAdjustedOnce.includes(tokenNo)==false && greenOverLapping.includes(tokenNo)==false)
                        {
                            greenOverLapping[greenCounter]=tokenNo;
                            greenCounter++;
                        }
                    }
                    else if(color==4) //Blue
                    {
                        if(blueAdjustedOnce.includes(tokenNo)==false && blueOverLapping.includes(tokenNo)==false)
                        {
                            blueOverLapping[blueCounter]=tokenNo;
                            blueCounter++;
                        }
                    }

                }
            }
            else if(i>=4 && i<=7 ) //CHECK FOR YELLOW
            {
                 if(arrX[curr]==yellowNodeX[allTokens[i]] && arrY[curr]==yellowNodeY[allTokens[i]])
                {
                     if( yellowAdjustedOnce.includes((i+1)-4)==false && yellowOverLapping.includes((i+1)-4)==false)
                    {
                         yellowOverLapping[yellowCounter]=((i+1)-4); //yellow x is overlapping on this tile.
                         yellowCounter++;
                    }

                    if(color==1)  
                    {
                        if( redAdjustedOnce.includes(tokenNo)==false && redOverLapping.includes(tokenNo)==false)
                        {
                            redOverLapping[redCounter]=tokenNo;
                            redCounter++;
                        }
                    }
                    else if(color==2) 
                    {
                        if(yellowAdjustedOnce.includes(tokenNo)==false && yellowOverLapping.includes(tokenNo)==false)
                        {
                            yellowOverLapping[yellowCounter]=tokenNo;
                            yellowCounter++;
                        }
                    }   else if(color==3) //Green
                    {
                        if(greenAdjustedOnce.includes(tokenNo)==false && greenOverLapping.includes(tokenNo)==false)
                        {
                            greenOverLapping[greenCounter]=tokenNo;
                            greenCounter++;
                        }
                    }
                    else if(color==4) //Blue
                    {
                        if(blueAdjustedOnce.includes(tokenNo)==false && blueOverLapping.includes(tokenNo)==false)
                        {
                            blueOverLapping[blueCounter]=tokenNo;
                            blueCounter++;
                        }
                    }



                }
            }
            else if(i>=8 && i<=11) //CHECK FOR GREEN
           {
                 if(arrX[curr]==greenNodeX[allTokens[i]] && arrY[curr]==greenNodeY[allTokens[i]])
                 {
                    if( greenAdjustedOnce.includes((i+1)-8)==false && greenOverLapping.includes((i+1)-8)==false)
                    {
                         greenOverLapping[greenCounter]=((i+1)-8); //green x is overlapping on this tile.
                         greenCounter++;
                    }

                    if(color==1)  
                    {
                        if( redAdjustedOnce.includes(tokenNo)==false && redOverLapping.includes(tokenNo)==false)
                        {
                            redOverLapping[redCounter]=tokenNo;
                            redCounter++;
                        }
                    }
                    else if(color==2) 
                    {
                        if(yellowAdjustedOnce.includes(tokenNo)==false && yellowOverLapping.includes(tokenNo)==false)
                        {
                            yellowOverLapping[yellowCounter]=tokenNo;
                            yellowCounter++;
                        }
                    }   else if(color==3) //Also add the one which is currently overlapping
                 {
                     if( greenAdjustedOnce.includes(tokenNo)==false && greenOverLapping.includes(tokenNo)==false)
                     {
                         greenOverLapping[greenCounter]=tokenNo;
                         greenCounter++;
                     }
                 }
                 else if(color==4) 
                 {
                     if(blueAdjustedOnce.includes(tokenNo)==false && blueOverLapping.includes(tokenNo)==false)
                     {
                         blueOverLapping[blueCounter]=tokenNo;
                         blueCounter++;
                     }
                 }
                }

           }
           else if(i>=12 && i<=15) //CHECK FOR BLUE
           {
                 if(arrX[curr]==blueNodeX[allTokens[i]] && arrY[curr]==blueNodeY[allTokens[i]])
                 {

                    if( blueAdjustedOnce.includes((i+1)-12)==false && blueOverLapping.includes((i+1)-12)==false)
                    {
                        blueOverLapping[blueCounter]=((i+1)-12); //blue x is overlapping on this tile.
                        blueCounter++;
                    }

                    if(color==1)  
                    {
                        if( redAdjustedOnce.includes(tokenNo)==false && redOverLapping.includes(tokenNo)==false)
                        {
                            redOverLapping[redCounter]=tokenNo;
                            redCounter++;
                        }
                    }
                    else if(color==2) 
                    {
                        if(yellowAdjustedOnce.includes(tokenNo)==false && yellowOverLapping.includes(tokenNo)==false)
                        {
                            yellowOverLapping[yellowCounter]=tokenNo;
                            yellowCounter++;
                        }
                    }   else  if(color==3) //Also add the one which is currently overlapping
                 {
                     if( greenAdjustedOnce.includes(tokenNo)==false && greenOverLapping.includes(tokenNo)==false)
                     {
                         greenOverLapping[greenCounter]=tokenNo;
                         greenCounter++;
                     }
                 }
                 else if(color==4) 
                 {
                     if(blueAdjustedOnce.includes(tokenNo)==false && blueOverLapping.includes(tokenNo)==false)
                     {
                         blueOverLapping[blueCounter]=tokenNo;
                         blueCounter++;
                     }
                 }
                 }

            }
            
        }

        var offsetSetterXred=-8-8;
        var offsetSetterXyel=-3;
        var offsetSetterXgreen=-3
        var offsetSetterXblue=-8-8;

        var offsetSetterXredfactor=2;
        var offsetSetterXyelfactor=2;
        var offsetSetterXgreenfactor=2;
        var offsetSetterXbluefactor=2;

        var offsetSetterYred=0;
        var offsetSetterYyel=0;
        var offsetSetterYgreen=0;
        var offsetSetterYblue=0;
 
        var offsetSetterYredfactor=0;
        var offsetSetterYyelfactor=0;
        var offsetSetterYgreenfactor=0;
        var offsetSetterYbluefactor=0;


        var totalMultiElementsOnThisTile=-1;
        var colorsOnTile=[];
        var tileCounter=0;
        if(redCounter>0)
        {
            totalMultiElementsOnThisTile+=1;
            colorsOnTile[tileCounter]=1; //Red is present on this tile.
            tileCounter++;
        }

        if(yellowCounter>0)
        {
            totalMultiElementsOnThisTile+=1;
            colorsOnTile[tileCounter]=2; //Yellow is present on this tile.
            tileCounter++;
        }

        if(greenCounter>0)
        {
            totalMultiElementsOnThisTile+=1;
            colorsOnTile[tileCounter]=3; //Green is present on this tile.
            tileCounter++;
        }

        if(blueCounter>0)
        {
            totalMultiElementsOnThisTile+=1;
            colorsOnTile[tileCounter]=4; //Blue is present on this tile.
            tileCounter++;
        }

         if(totalMultiElementsOnThisTile==0)
        {
            //One color is on same tile.
            offsetSetterXred=-9;
            offsetSetterXredfactor=-3;

            offsetSetterXyel=-9;
            offsetSetterXyelfactor=-3;

            offsetSetterXgreen=-9;
            offsetSetterXgreenfactor=-3;

            offsetSetterXblue=-9;
            offsetSetterXbluefactor=-3;



          
        }

        if(totalMultiElementsOnThisTile==1)
        {
            
            //Two color types on same tile
            //Get the two color types. - DONE.
            var color1=colorsOnTile[0]; 
            var color2=colorsOnTile[1];
            //console.log("TWO COLORS SAME TILE COLOR 1:"+color1+"::"+"COLOR 2 :"+color2);
            if(color1==1) //red
            {
                offsetSetterXred=-8-8;
                offsetSetterXredfactor=2;
            }
            else if(color1==2) //yellow
            {
                offsetSetterXyel=-8-8;
                offsetSetterXyelfactor=2;
            }
            else if(color1==3) //green
            {
                offsetSetterXgreen=-8-8;
                offsetSetterXgreenfactor=2;
            }
            else if(color1==4) //blue
            {
                offsetSetterXblue=-8-8;
                offsetSetterXbluefactor=2;
            }


            if(color2==1) //red
            {
                offsetSetterXred=-3;
                offsetSetterXredfactor=2;
            }
            else if(color2==2) //yellow
            {
                offsetSetterXyel=-3;
                offsetSetterXyelfactor=2;
            }
            else if(color2==3) //green
            {
                offsetSetterXgreen=-3;
                offsetSetterXgreenfactor=2;
            }
            else if(color2==4) //blue
            {
                offsetSetterXblue=-3;
                offsetSetterXbluefactor=2;
            }



      
        }
        else if(totalMultiElementsOnThisTile==2)
        {
            //Three color types on same tile
            var color1=colorsOnTile[0]; 
            var color2=colorsOnTile[1];
            var color3=colorsOnTile[2];


            if(color1==1) //red //MIDDLE
            {
                offsetSetterXred=-9;
                offsetSetterXredfactor=-3;
                
                offsetSetterYred=-6;
            }
            else if(color1==2) //yellow
            {
                offsetSetterXyel=-9;
                offsetSetterXyelfactor=-3;
            
                offsetSetterYyel=-6;
            }
            else if(color1==3) //green
            {
                offsetSetterXgreen=-9;
                offsetSetterXgreenfactor=-3;

                offsetSetterYgreen=-6;
            }
            else if(color1==4) //blue
            {
                offsetSetterXblue=-9;
                offsetSetterXbluefactor=-3;

                offsetSetterYblue=-6;
            }

//----
            if(color2==1) //red
            {
                offsetSetterXred=-8-8;
                offsetSetterXredfactor=2;
            }
            else if(color2==2) //yellow
            {
                offsetSetterXyel=-8-8;
                offsetSetterXyelfactor=2;
            }
            else if(color2==3) //green
            {
                offsetSetterXgreen=-8-8;
                offsetSetterXgreenfactor=2;
            }
            else if(color2==4) //blue
            {
                offsetSetterXblue=-8-8;
                offsetSetterXbluefactor=2;
            }
//----
            if(color3==1) //red
            {
                offsetSetterXred=-3;
                offsetSetterXredfactor=2;
            }
            else if(color3==2) //yellow
            {
                offsetSetterXyel=-3;
                offsetSetterXyelfactor=2;
            }
            else if(color3==3) //green
            {
                offsetSetterXgreen=-3;
                offsetSetterXgreenfactor=2;
            }
            else if(color3==4) //blue
            {
                offsetSetterXblue=-3;
                offsetSetterXbluefactor=2;
            }




        }
        else if(totalMultiElementsOnThisTile==3)
        {
            //Four color types on same tile
            var color1=colorsOnTile[0]; 
            var color2=colorsOnTile[1];
            var color3=colorsOnTile[2];
            var color4=colorsOnTile[3];
            console.log("FOUR COLORS SAME TILE COLOR 1:"+color1+"::"+"COLOR 2 :"+color2+":: COLOR 3 :"+color3+":: COLOR 4 :"+color4);
            //Color 1 and 2 ,will be on top.

            if(color1==1) //red
            {
                offsetSetterXred=-8-8;
                offsetSetterXredfactor=2;

                offsetSetterYred=-6;
            

            }
            else if(color1==2) //yellow
            {
                offsetSetterXyel=-8-8;
                offsetSetterXyelfactor=2;
            
                offsetSetterYyel=-6;
            }
            else if(color1==3) //green
            {
                offsetSetterXgreen=-8-8;
                offsetSetterXgreenfactor=2;
            
                offsetSetterYgreen=-6;
            }
            else if(color1==4) //blue
            {
                offsetSetterXblue=-8-8;
                offsetSetterXbluefactor=2;

                offsetSetterYblue=-6;
            }
            //----
            if(color2==1) //red
            {
                offsetSetterXred=-3;
                offsetSetterXredfactor=2;

                offsetSetterYred=-6;

            }
            else if(color2==2) //yellow
            {
                offsetSetterXyel=-3;
                offsetSetterXyelfactor=2;

                offsetSetterYyel=-6;

            }
            else if(color2==3) //green
            {
                offsetSetterXgreen=-3;
                offsetSetterXgreenfactor=2;

                offsetSetterYgreen=-6;

            }
            else if(color2==4) //blue
            {
                offsetSetterXblue=-3;
                offsetSetterXbluefactor=2;

                offsetSetterYblue=-6;

            }
            //----
            if(color3==1) //red
            {
                offsetSetterXred=-8-8;
                offsetSetterXredfactor=2;
            }
            else if(color3==2) //yellow
            {
                offsetSetterXyel=-8-8;
                offsetSetterXyelfactor=2;
            }
            else if(color3==3) //green
            {
                offsetSetterXgreen=-8-8;
                offsetSetterXgreenfactor=2;
            }
            else if(color3==4) //blue
            {
                offsetSetterXblue=-8-8;
                offsetSetterXbluefactor=2;
            }
            //----
            if(color4==1) //red
            {
                offsetSetterXred=-3;
                offsetSetterXredfactor=2;
            }
            else if(color4==2) //yellow
            {
                offsetSetterXyel=-3;
                offsetSetterXyelfactor=2;
            }
            else if(color4==3) //green
            {
                offsetSetterXgreen=-3;
                offsetSetterXgreenfactor=2;
            }
            else if(color4==4) //blue
            {
                offsetSetterXblue=-3;
                offsetSetterXbluefactor=2;
            }





        }


        if(redCounter>0)
        {
          
            redOverLapping.sort(function(a, b){return b-a});
            for(var i=0; i<redOverLapping.length;i++)
             {
                var token=redOverLapping[i];

             
                if(token==1  && redAdjustedOnce.includes(token)==false)
                {
                    red1.x=redNodeX[red1curr]+offsetSetterXred;
                    red1.y=redNodeY[red1curr]-14+offsetSetterYred;
                   
                    redAdjustedOnce[redAdjustCounter]=token;
                    offsetSetterXred -=offsetSetterXredfactor;
                    redAdjustCounter++;
                }
                else if(token==2  && redAdjustedOnce.includes(token)==false)
                {
                    red2.x=redNodeX[red2curr]+offsetSetterXred;
                    red2.y=redNodeY[red2curr]-14+offsetSetterYred;

                    redAdjustedOnce[redAdjustCounter]=token;
                    offsetSetterXred -=offsetSetterXredfactor;
                    redAdjustCounter++;

                }
                else if(token==3  && redAdjustedOnce.includes(token)==false)
                {
                     red3.x=redNodeX[red3curr]+offsetSetterXred;
                    red3.y=redNodeY[red3curr]-14+offsetSetterYred;

                    redAdjustedOnce[redAdjustCounter]=token;
                    offsetSetterXred -=offsetSetterXredfactor;
                    redAdjustCounter++;
                 }
                else if(token==4  && redAdjustedOnce.includes(token)==false)
                {
 
                    red4.x=redNodeX[red4curr]+offsetSetterXred;
                    red4.y=redNodeY[red4curr]-14+offsetSetterYred;

                    redAdjustedOnce[redAdjustCounter]=token;
                    offsetSetterXred -=offsetSetterXredfactor;
                    redAdjustCounter++;
                }
             
            }

        } else
        {

            if(redAdjustedOnce.includes(1)==false && redOverLapping.includes(1)==false){
            if(red1curr>=0 && red1curr<=56){
                red1.x=redNodeX[red1curr]-8;
            }
            }
             
            if(redAdjustedOnce.includes(2)==false && redOverLapping.includes(2)==false){
            if(red2curr>=0 && red2curr<=56){
            red2.x=redNodeX[red2curr]-8;}
        }
            if(redAdjustedOnce.includes(3)==false && redOverLapping.includes(3)==false)  {
                if(red3curr>=0 && red3curr<=56){
                    red3.x=redNodeX[red3curr]-8;
                }
                
            }
          

            if(redAdjustedOnce.includes(4)==false && redOverLapping.includes(4)==false){
                if(red4curr>=0 && red4curr<=56){
                    red4.x=redNodeX[red4curr]-8; 

                }
            }
         

        }

 

        if(yellowCounter>0)
        {

            yellowOverLapping.sort(function(a, b){return b-a});

             for(var i=yellowOverLapping.length;i>=0;i--)
            {
                var token=yellowOverLapping[i];

           
             

                if(token==1 && yellowAdjustedOnce.includes(token)==false)
                {
                  
                    yellow1.x=yellowNodeX[yellow1curr]+offsetSetterXyel;
                    yellow1.y=yellowNodeY[yellow1curr]-14+offsetSetterYyel;
                   
                    yellowAdjustedOnce[yellowAdjustCounter]=token;
                    offsetSetterXyel -=offsetSetterXyelfactor;
                    yellowAdjustCounter++;
                   
                }
                else if(token==2 && yellowAdjustedOnce.includes(token)==false)
                {
                    yellow2.x=yellowNodeX[yellow2curr]+offsetSetterXyel;
                    yellow2.y=yellowNodeY[yellow2curr]-14+offsetSetterYyel;

                 
                    yellowAdjustedOnce[yellowAdjustCounter]=token;
                    offsetSetterXyel -=offsetSetterXyelfactor;
                    yellowAdjustCounter++;
                }
                else if(token==3 && yellowAdjustedOnce.includes(token)==false)
                {
                    yellow3.x=yellowNodeX[yellow3curr]+offsetSetterXyel;
                    yellow3.y=yellowNodeY[yellow3curr]-14+offsetSetterYyel;

                    yellowAdjustedOnce[yellowAdjustCounter]=token;
                    offsetSetterXyel -=offsetSetterXyelfactor;
                    yellowAdjustCounter++;
                  
                 }
                else if(token==4 && yellowAdjustedOnce.includes(token)==false)
                {
                    yellow4.x=yellowNodeX[yellow4curr]+offsetSetterXyel;
                    yellow4.y=yellowNodeY[yellow4curr]-14+offsetSetterYyel;

                    yellowAdjustedOnce[yellowAdjustCounter]=token;
                    offsetSetterXyel -=offsetSetterXyelfactor;
                    yellowAdjustCounter++;
                    
                 }

          
            }

        } else{
            
            if(yellowAdjustedOnce.includes(1)==false) 
            if(yellow1curr>=0 && yellow1curr<=56)
            yellow1.x=yellowNodeX[yellow1curr]-8;
            
            if(yellowAdjustedOnce.includes(2)==false) 
            if(yellow2curr>=0 && yellow2curr<=56)
            yellow2.x=yellowNodeX[yellow2curr]-8;

            if(yellowAdjustedOnce.includes(3)==false) 
            if(yellow3curr>=0 && yellow3curr<=56)
            yellow3.x=yellowNodeX[yellow3curr]-8;

            if(yellowAdjustedOnce.includes(4)==false) 
            if(yellow4curr>=0 && yellow4curr<=56)
            yellow4.x=yellowNodeX[yellow4curr]-8;

        } 

        if(greenCounter>0)
        {
            greenOverLapping.sort(function(a, b){return b-a});


             for(var i=greenOverLapping.length;i>=0;i--)
            {
                var token=greenOverLapping[i];

           
             

                if(token==1 && greenAdjustedOnce.includes(token)==false)
                {
                  
                    green1.x=greenNodeX[green1curr]+offsetSetterXgreen;
                    green1.y=greenNodeY[green1curr]-14+offsetSetterYgreen;
                   
                    greenAdjustedOnce[greenAdjustCounter]=token;
                    offsetSetterXgreen -=offsetSetterXgreenfactor;
                    greenAdjustCounter++; 
                   
                }
                else if(token==2 && greenAdjustedOnce.includes(token)==false)
                {
                    green2.x=greenNodeX[green2curr]+offsetSetterXgreen;
                    green2.y=greenNodeY[green2curr]-14+offsetSetterYgreen;

                 
                    greenAdjustedOnce[greenAdjustCounter]=token;
                    offsetSetterXgreen -=offsetSetterXgreenfactor;
                    greenAdjustCounter++;
                }
                else if(token==3 && greenAdjustedOnce.includes(token)==false)
                {
                    green3.x=greenNodeX[green3curr]+offsetSetterXgreen;
                    green3.y=greenNodeY[green3curr]-14+offsetSetterYgreen;

                    greenAdjustedOnce[greenAdjustCounter]=token;
                    offsetSetterXgreen -=offsetSetterXgreenfactor;
                    greenAdjustCounter++;
                  
                 }
                else if(token==4 && greenAdjustedOnce.includes(token)==false)
                {
                    green4.x=greenNodeX[green4curr]+offsetSetterXgreen;
                    green4.y=greenNodeY[green4curr]-14+offsetSetterYgreen;

                    greenAdjustedOnce[greenAdjustCounter]=token;
                    offsetSetterXgreen -=offsetSetterXgreenfactor;
                    greenAdjustCounter++;
                    
                 }

          

                

            }

        } else{
            
            if(greenAdjustedOnce.includes(1)==false) 
            if(green1curr>=0 && green1curr<=56)
            green1.x=greenNodeX[green1curr]-8;
            
            if(greenAdjustedOnce.includes(2)==false) 
            if(green2curr>=0 && green2curr<=56)
            green2.x=greenNodeX[green2curr]-8;

            if(greenAdjustedOnce.includes(3)==false) 
            if(green3curr>=0 && green3curr<=56)
            green3.x=greenNodeX[green3curr]-8;

            if(greenAdjustedOnce.includes(4)==false) 
            if(green4curr>=0 && green4curr<=56)
            green4.x=greenNodeX[green4curr]-8;

        } 



        if(blueCounter>0)
        {

          // console.log("BLUE COUNTER :"+blueCounter);
     
         blueOverLapping.sort(function(a, b){return b-a});


           for(var i=0; i<blueOverLapping.length;i++)
            {
                var token=blueOverLapping[i];

              

                if(token==1 && blueAdjustedOnce.includes(token)==false)
                {
                    blue1.x=blueNodeX[blue1curr]+offsetSetterXblue;
                    blue1.y=blueNodeY[blue1curr]-14+offsetSetterYblue;
                   
                    blueAdjustedOnce[blueAdjustCounter]=token;
                    offsetSetterXblue -=offsetSetterXbluefactor;
                    blueAdjustCounter++;
                }
                else if(token==2 && blueAdjustedOnce.includes(token)==false)
                {
                    blue2.x=blueNodeX[blue2curr]+offsetSetterXblue;
                    blue2.y=blueNodeY[blue2curr]-14+offsetSetterYblue;

                    blueAdjustedOnce[blueAdjustCounter]=token;
                    offsetSetterXblue -=offsetSetterXbluefactor;
                    blueAdjustCounter++;

                }
                else if(token==3 && blueAdjustedOnce.includes(token)==false)
                {
                    blue3.x=blueNodeX[blue3curr]+offsetSetterXblue;
                    blue3.y=blueNodeY[blue3curr]-14+offsetSetterYblue;

                    blueAdjustedOnce[blueAdjustCounter]=token;
                    offsetSetterXblue -=offsetSetterXbluefactor;
                    blueAdjustCounter++;
                 }
                else if(token==4 && blueAdjustedOnce.includes(token)==false)
                {
 
                    blue4.x=blueNodeX[blue4curr]+offsetSetterXblue;
                    blue4.y=blueNodeY[blue4curr]-14+offsetSetterYblue;

                    blueAdjustedOnce[blueAdjustCounter]=token;
                    offsetSetterXblue -=offsetSetterXbluefactor;
                    blueAdjustCounter++;
                 }

                
                

            }

        } else{

            if(blueAdjustedOnce.includes(1)==false && blueOverLapping.includes(1)==false)
            if(blue1curr>=0 && blue1curr<=56)
            blue1.x=blueNodeX[blue1curr]-8;
             
            if(blueAdjustedOnce.includes(2)==false && blueOverLapping.includes(2)==false)
            if(blue2curr>=0 && blue2curr<=56)
            blue2.x=blueNodeX[blue2curr]-8;

            if(blueAdjustedOnce.includes(3)==false && blueOverLapping.includes(3)==false)  
            if(blue3curr>=0 && blue3curr<=56)
            blue3.x=blueNodeX[blue3curr]-8;

            if(blueAdjustedOnce.includes(4)==false && blueOverLapping.includes(4)==false)
            if(blue4curr>=0 && blue4curr<=56)
            blue4.x=blueNodeX[blue4curr]-8; 

        }




    }
 
   

     





    function getCurrFromColor(color,tokenNo){
        if(color==1)
        {
            if(tokenNo==1)
            return red1curr;
            else if(tokenNo==2)
            return red2curr;
            else if(tokenNo==3)
            return red3curr;
            else if(tokenNo==4)
            return red4curr;
        }else if(color==2)
        {
            if(tokenNo==1)
            return yellow1curr;
            else if(tokenNo==2)
            return yellow2curr;
            else if(tokenNo==3)
            return yellow3curr;
            else if(tokenNo==4)
            return yellow4curr;
        }else if(color==3)
        {
            if(tokenNo==1)
            return green1curr;
            else if(tokenNo==2)
            return green2curr;
            else if(tokenNo==3)
            return green3curr;
            else if(tokenNo==4)
            return green4curr;
        }else if(color==4)
        {
            if(tokenNo==1)
            return blue1curr;
            else if(tokenNo==2)
            return blue2curr;
            else if(tokenNo==3)
            return blue3curr;
            else if(tokenNo==4)
            return blue4curr;
        }
    }

 

    function getNodeXFromColor(color,curr)
    {
        xOffset=-8;
      
        if(color==1)
        return redNodeX[curr]+xOffset;
        else if(color==2)
        return yellowNodeX[curr]+xOffset;
        else if(color==3)
        return greenNodeX[curr]+xOffset;
        else if(color==4)
        return blueNodeX[curr]+xOffset;
    }  
    function getNodeYFromColor(color,curr)
    {
        yOffset=-14;
        if(color==1)
        return redNodeY[curr]+yOffset;
        else if(color==2)
        return yellowNodeY[curr]+yOffset;
        else if(color==3)
        return greenNodeY[curr]+yOffset;
        else if(color==4)
        return blueNodeY[curr]+yOffset;
    }

    function getTokenFromColor(color,tokenNo)
    {
        if(color==1)
        {
            if(tokenNo==1)
            return red1;
            else if(tokenNo==2)
            return red2;
            else if(tokenNo==3)
            return red3;
            else if(tokenNo==4)
            return red4;
        }
        else if(color==2)
        {
            if(tokenNo==1)
            return yellow1;
            else if(tokenNo==2)
            return yellow2;
            else if(tokenNo==3)
            return yellow3;
            else if(tokenNo==4)
            return yellow4;
        }
        else if(color==3)
        {
            if(tokenNo==1)
            return green1;
            else if(tokenNo==2)
            return green2;
            else if(tokenNo==3)
            return green3;
            else if(tokenNo==4)
            return green4;
        }
        else if(color==4)
        {
            if(tokenNo==1)
            return blue1;
            else if(tokenNo==2)
            return blue2;
            else if(tokenNo==3)
            return blue3;
            else if(tokenNo==4)
            return blue4;
        }
    }



    function handlePause()
    {
        console.log("Pause Screen");
        if(showingAds)
        {
            showingAds = false;
            return;
        }


        gamePaused=true;
      //  gamePauseBG.visible=true;
      
        playButtonImg.visible=true;
        pauseButtonImg.visible=false; 
        hidePointers();
        hideBadges();
        pauseBGactive(true);
    }

    function handleResume()
    {
        console.log("Pause Screen 2");

        gamePaused=false;
     //   gamePauseBG.visible=false;
     pauseBGactive(false);
        playButtonImg.visible=false;
        pauseButtonImg.visible=true; 

    }

     

    /* JIO SDK integration ends */

 

    var bgMusic,audioSrc1,audioSrc2,audioSrc3,audioSrc4,audioSrc5,audioSrc6;


    var canvasWidth = 240,
        canvasHeight = 320,
        banner;

    //var playerSize = 32;
    /*var x = 32,
        y = 0;*/

    //var frameCounter = 0;
   // var gameSpeed = 20;
    var score = 0;



    var game = window.game = new Phaser.Game(canvasWidth, canvasHeight, Phaser.CANVAS, 'LUDOCHAMP', { preload: preload, create: create, update: update  });



    var redNodeX=[103, 103, 103, 103, 103,88 ,73 ,58 ,43 ,28, 13, 13, 13, 28,43,58,73,88,103,103,103,103,103,103,118,133,133,133,133,133,133,148,163,178,193,208,223,223,223,208,193,178,163,148,133,133,133,133,133,133,       118,118,118,118,118,118,118];
    var redNodeY=[250, 235, 220, 205, 190,175,175,175,175,175,175,160,145,145,145,145,145,145,130,115,100,85,70,55,55,55,70,85,100,115,130,145,145,145,145,145,145,160,175,175,175,175,175,175,190,205,220,235,250,265,             265,250,235,220,205,190,175];
    
    var greenNodeX=[28, 43, 58, 73, 88, 103,103,103,103,103,103,118,133,133,133,133,133,133,148,163,178,193,208,223,223,223,208,193,178,163,148,133,133,133,133,133,133,118,103,103, 103, 103, 103, 103,88 ,73 ,58 ,43 ,28, 13,     13,28,41,56,71,86,101];
    var greenNodeY=[145,145,145,145,145,130,115,100,85, 70,55,55,55,70,85,100,115,130,145,145,145,145,145,145,160,175,175,175,175,175,175,190,205,220,235,250,265,265,265,250, 235, 220, 205, 190,175,175,175,175,175,175,         160,160,160,160,160,160,160]; 

    var yellowNodeX=[133,133,133,133,133,148,163,178,193,208,223,223,223,208,193,178,163,148,133,133,133,133,133,133,118,103,103, 103, 103, 103, 103,88 ,73 ,58 ,43 ,28, 13,13, 13, 28,43,58,73,88,103,103,103,103,103,103,118,   118,118,118,118,118,118 ];
    var yellowNodeY=[70,85,100,115,130,145,145,145,145,145,145,160,175,175,175,175,175,175,190,205,220,235,250,265,265,265,250, 235, 220, 205, 190,175,175,175,175,175,175,160,145,145,145,145,145,145,130,115,100,85,70,55,55,    70,85,100,115,130,145];

    var blueNodeX=[208,193,178,163,148,133,133,133,133,133,133,118,103,103, 103, 103, 103, 103,88 ,73 ,58 ,43 ,28, 13,13, 13, 28,43,58,73,88,103,103,103,103,103,103,118,133,133,133,133,133,133,148,163,178,193,208,223,223   ,208,193,178,163,148,133];
    var blueNodeY=[175,175,175,175,175,190,205,220,235,250,265,265,265,250, 235, 220, 205, 190,175,175,175,175,175,175,160,145,145,145,145,145,145,130,115,100,85,70,55,55,55,70,85,100,115,130,145,145,145,145,145,145,160    ,160,160,160,160,160,160];
   
    var safePosX=[103, 28, 133, 208, 43,103,193,133];
    var safePosY=[250, 145, 70, 175, 175,85,145,235];
    
    //var 

/* random play */
    //var hunterList = ["cat", "snake", "chameleon", "tiger", "fox", "eagle"];
   // var preyList = ["bird", "insect", "fly", "butterfly", "duck", "bug", "fish", "bunny"];
    /* set one hunter till games ends */
    //var initialHunter;

    /*function setHunter() {
        var randomPick = hunterList[Math.floor(Math.random() * hunterList.length)];
        initialHunter = randomPick;
    }
    setHunter();*/

    /*function getPrey() {
        var randomPick = preyList[Math.floor(Math.random() * preyList.length)];
        return randomPick;
    }*/

    var textObj;
    
    var introArtObj;


    var textRedObj;
    var textBlueObj;
    var textGreenObj;
    var textYellowObj;

    var textDiceObj;
    var textEnterToRollObj;
    

    var mainBG;



    //var introBG;
    //var inModeBG;
    //var inPickBG;
    var inGameBG;
   // var inDifficultyBG;
    var splashBG;

     
    var canWidth;
    var canHeight;

    var chooseModeTextObj;

    var versusAITextObj;
    var twoPlayerTextObj;
    var fourPlayerTextObj;


    var menuStatus=false;
    var modeStatus=false; 
    var selectColorStatus=false;
    var gameStatus=false;
    var gameOverStatus=false;


    var playerWonTextObj;

    var winningTokenRedObj;
    var winningTokenBlueObj;
    var winningTokenGreenObj;
    var winningTokenYellowObj;

   // var gameOverBG;
    //var gamePauseBG;

    var playButtonImg;
    var pauseButtonImg;

    var gamePaused=false;
   

   

    function resetGame ()
    {
     
        noOfPlayerBGActive(false);

        modeBGactive(false);
        inGameBG.visible=false;
        pauseBGactive(false);
        difficultyBGactive(false);
   
        colorCounter=0;


        player1.visible=false;
        player2.visible=false;
        player3.visible=false;
        player4.visible=false;

         gameOverBGactive(false); 
        
        pauseButtonImg.visible=false;
        playButtonImg.visible=false;

        red1.visible=false;
        red2.visible=false;
        red3.visible=false;
        red4.visible=false;

        yellow1.visible=false;
       yellow2.visible=false;
       yellow3.visible=false;
       yellow4.visible=false;

       green1.visible=false;
       green2.visible=false;
       green3.visible=false;
       green4.visible=false;

       blue1.visible=false;
       blue2.visible=false;
       blue3.visible=false;
       blue4.visible=false;

       r_2.visible=false;
       r_4.visible=false;
       r_6.visible=false;
       r_8.visible=false;

       g_2.visible=false;
       g_4.visible=false;
       g_6.visible=false;
       g_8.visible=false;

       y_2.visible=false;
       y_4.visible=false;
       y_6.visible=false;
       y_8.visible=false;

       b_2.visible=false;
       b_4.visible=false;
       b_6.visible=false;
       b_8.visible=false;


       menuStatus=true;
       modeStatus=false;
       selectColorStatus=false;
       gameStatus=false;
       gameOverStatus=false;
       selectDifficultyStatus=false;
       selectNoOfPlayerStatus=false;
       tokenHomeInShowAds=false;
       tokenKillShowAds=false;

     //  introBG.visible=true;
       
      // inModeBG.visible=false;
     // modeBGactive(false);
      // inPickBG.visible=false;
      markerSelectActive(false); 
      introBGactive(true);
      inGameBG.visible=false;

       redFlashBG.visible=false;
       yellowFlashBG.visible=false;
       greenFlashBG.visible=false;
       blueFlashBG.visible=false;

       textRedObj.text=" ";
       textYellowObj.text=" ";
       textGreenObj.text=" ";
       textBlueObj.text=" ";

       textGreenObj.visible=false;
       textRedObj.visible=false;
       textBlueObj.visible=false;
       textGreenObj.visible=false;

   //    textEnterToRollObj.text=" ";

       textEnterToRollObj.visible=false;
       playerWonTextObj.text=" ";
       winningTokenBlueObj.visible=false;
       winningTokenRedObj.visible=false;
       winningTokenGreenObj.visible=false;
       winningTokenYellowObj.visible=false;

       textDiceObj.text=" ";

       //play

       hidePointers();
       changeBgMusic(true);
       playButtonImg.visible=false;
       playButtonImg.scale.setTo(0.6,0.6);

       pauseButtonImg.visible=false;
       pauseButtonImg.scale.setTo(0.6,0.6);
       
      /* dice1.visible=false;
       dice2.visible=false;
       dice3.visible=false;
       diceBase.visible=false; 


       dice1.x=103;
       dice1.y=282;
       dice2.x=103;
       dice2.y=282;
       dice3.x=103;
       dice3.y=282;
       diceBase.x=103;
       diceBase.y=282;*/
        console.log("RESETED GAME");
    }


     
    function preload() {

        console.log("load your assets");




      //  game.load.image("game_over",'img/gameOver.png');
       // game.load.image("game_pause",'img/gamePausedBG.png');

        game.load.image("playButton",'img/PlayButton.png');
         game.load.image("pauseButton",'img/PauseButton.png');


         game.load.audio('menuMusic','sound/menu_music.mp3');
         game.load.audio('gameMusic','sound/bg_music.mp3');

         game.load.audio('diceRoll','sound/dice_roll.mp3');
         game.load.audio('six','sound/All sixes.mp3');
         game.load.audio('gameOver','sound/game_won_player_ai.mp3');
         game.load.audio('move','sound/marker_move.mp3');
         game.load.audio('kill','sound/opponent_capture.mp3');
         game.load.audio('secured','sound/marker_secured.mp3');

       //  game.load.image('markerSelect','img/markerSelect.png');
      //  game.load.image('homeScreen','img/homeScreen.png');
        game.load.image("mainBG",'img/MainBG.png');
        game.load.image('introArt','img/LudoChampTitleFrontBG.png');
        game.load.image('inGame','img/inGame.png');
       // game.load.image('modeSelect','img/modeSelect.png');
       // game.load.image('inDifficulty','img/difficultyMenu.png');
        game.load.image("rollDice",'img/Roll_Dice.png')

        game.load.image('red','img/red.png');
        game.load.image('green','img/green.png');
        game.load.image('yellow','img/yellow.png');
        game.load.image('blue','img/blue.png');


        game.load.image('redFlash','img/redFlash.png');
        game.load.image('blueFlash','img/blueFlash.png');
        game.load.image('greenFlash','img/greenFlash.png');
        game.load.image('yellowFlash','img/yellowFlash.png');


        game.load.image('R_2','img/Numbers/R_2.png');
        game.load.image('R_4','img/Numbers/R_4.png');
        game.load.image('R_6','img/Numbers/R_6.png');
        game.load.image('R_8','img/Numbers/R_8.png');


        game.load.image('B_2','img/Numbers/B_2.png');
        game.load.image('B_4','img/Numbers/B_4.png');
        game.load.image('B_6','img/Numbers/B_6.png');
        game.load.image('B_8','img/Numbers/B_8.png');


        game.load.image('G_2','img/Numbers/G_2.png');
        game.load.image('G_4','img/Numbers/G_4.png');
        game.load.image('G_6','img/Numbers/G_6.png');
        game.load.image('G_8','img/Numbers/G_8.png');

        game.load.image('Y_2','img/Numbers/Y_2.png');
        game.load.image('Y_4','img/Numbers/Y_4.png');
        game.load.image('Y_6','img/Numbers/Y_6.png');
        game.load.image('Y_8','img/Numbers/Y_8.png');


        game.load.image('rp','img/Red_Pointer.png');
        game.load.image('bp','img/Blue_Pointer.png');
        game.load.image('yp','img/Yellow_Pointer.png');
        game.load.image('gp','img/Green_Pointer.png');


       /* for(var i=0;i<14;i++){
            game.load.image('d'+(i+1),'img/DICE/'+(i+1)+'.png');
        }
        
        game.load.image('db','img/DICE/FINAL.png');*/


     /*   game.load.image('d1','img/Dice_01.png');
        game.load.image('d2','img/Dice_02.png');
        game.load.image('d3','img/Dice_03.png');
        game.load.image('db','img/Dice_Base.png'); */

        game.load.image('rd1','img/Red_Dice_01.png');
        game.load.image('rd2','img/Red_Dice_02.png');
        game.load.image('rd3','img/Red_Dice_03.png');
        game.load.image('rdb','img/Red_Dice_Base.png'); 

        game.load.image('yd1','img/Yellow_Dice_01.png');
        game.load.image('yd2','img/Yellow_Dice_02.png');
        game.load.image('yd3','img/Yellow_Dice_03.png');
        game.load.image('ydb','img/Yellow_Dice_Base.png'); 

        game.load.image('gd1','img/Green_Dice_01.png');
        game.load.image('gd2','img/Green_Dice_02.png');
        game.load.image('gd3','img/Green_Dice_03.png');
        game.load.image('gdb','img/Green_Dice_Base.png'); 
    
        game.load.image('bd1','img/Blue_Dice_01.png');
        game.load.image('bd2','img/Blue_Dice_02.png');
        game.load.image('bd3','img/Blue_Dice_03.png');
        game.load.image('bdb','img/Blue_Dice_Base.png'); 

        game.load.image('d1','img/dot1.png');
        game.load.image('d2','img/dot2.png');
        game.load.image('d3','img/dot3.png');
        game.load.image('d4','img/dot4.png');
        game.load.image('d5','img/dot5.png');
        game.load.image('d6','img/dot6.png');


        game.load.image("splash","img/RooshSplash.png");
        // gameSDK = gameSDK;

        //console.log(gameSDK.getContentLanguage());

    }

    var player1;
    var player2;
    var player3;
    var player4; 

    var red1;
    var red2;
    var red3;
    var red4;

    var yellow1;
    var yellow2;
    var yellow3;
    var yellow4;

    var green1;
    var green2;
    var green3;
    var green4;

    var blue1;
    var blue2;
    var blue3;
    var blue4;
    

    var greenFlashBG;
    var blueFlashBG;
    var redFlashBG;
    var yellowFlashBG;

    var red1curr=-1;
    var red2curr=-1;
    var red3curr=-1;
    var red4curr=-1;
    
    var yellow1curr=-1;
    var yellow2curr=-1;
    var yellow3curr=-1;
    var yellow4curr=-1;

    var green1curr=-1;
    var green2curr=-1;
    var green3curr=-1;
    var green4curr=-1;

    var blue1curr=-1;
    var blue2curr=-1;
    var blue3curr=-1;
    var blue4curr=-1;



    var r_2;
    var r_4;
    var r_6;
    var r_8;

    var b_2;
    var b_4;
    var b_6;
    var b_8;

    var g_2;
    var g_4;
    var g_6;
    var g_8;

    var y_2;
    var y_4;
    var y_6;
    var y_8;

    var textCur1Obj;
    var textCur2Obj;
    var textCur3Obj;
    var textCur4Obj; 


    var textCur1ObjAI;
    var textCur2ObjAI;
    var textCur3ObjAI;
    var textCur4ObjAI; 

  //  var redCurrs=[red1curr,red2curr];
    var tempCurr=0;


    function changeBgMusic(isMenu)
    {
       //  bgMusic.stop();
   

       if(bgMusic!=null && bgMusic!=undefined)
       {
        // bgMusic.pause();
         bgMusic.destroy();
       }
    
      
    
        if(isMenu){
           // game.cache.removeSound('gameMusic');
             bgMusic = game.add.audio('menuMusic');
             bgMusic.loop = true;
            
        }
        else{
           //  console.log("This??");
            //game.cache.removeSound('menuMusic');
            bgMusic = game.add.audio('gameMusic');
             bgMusic.loop = true;
        }
         bgMusic.play();
    }

    var currAudioSrc=0;

function initAudioSrc(){
 
    audioSrc1=game.add.audio('move');
 
    audioSrc2=game.add.audio('secured');
 
    audioSrc3=game.add.audio('kill');
 
    audioSrc4=game.add.audio('gameOver');
 
    audioSrc5=game.add.audio('diceRoll');
 
    audioSrc6= game.add.audio('six');
}

    function changeAudioSrc(type)
    {
        if(currAudioSrc==type)
        {
            //Do nothing.
        }else{
          /*  if(audioSrc1!=null && audioSrc1!=undefined)
            audioSrc1.destroy();*/
        }


        if(type==0)//Marker Move
        { 
            audioSrc1.loop = false;
            audioSrc1.play();
        }
        else if(type==1)//Marker secured
        {   audioSrc2.loop = false;
            audioSrc2.play();}
        else if(type==2) //Kill
        {   audioSrc3.loop = false;
            audioSrc3.play();}
        else if(type==3) //End Round
        {   audioSrc4.loop = false;
            audioSrc4.play();}
        else if(type==4) //Dice roll
        {   audioSrc5.loop = false;
            audioSrc5.play();}
        else if(type==5)
        {   audioSrc6.loop = false;
            audioSrc6.play();}

      
       
        
         currAudioSrc=type;
       




    }
/*document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log('BuildInfo.packageName    =' + BuildInfo.packageName);
    console.log('BuildInfo.basePackageName=' + BuildInfo.basePackageName);
    console.log('BuildInfo.displayName    =' + BuildInfo.displayName);
    console.log('BuildInfo.name           =' + BuildInfo.name);
    console.log('BuildInfo.version        =' + BuildInfo.version);
    console.log('BuildInfo.versionCode    =' + BuildInfo.versionCode);
    console.log('BuildInfo.debug          =' + BuildInfo.debug);
    console.log('BuildInfo.buildType      =' + BuildInfo.buildType);
    console.log('BuildInfo.flavor         =' + BuildInfo.flavor);
}*/
/*cordova.getAppVersion.getAppName(function(name){
    // My App Name
    console.log("App Name", name);
});*/
     

    function create() 
    {




        












       //  introBG = game.add.sprite(0, 0, 'homeScreen');
     
     //   inModeBG = game.add.sprite(0, 0, 'modeSelect');
       // inPickBG = game.add.sprite(0, 0, 'markerSelect');
        inGameBG = game.add.sprite(0, 0, 'inGame');
       // inDifficultyBG=game.add.sprite(0,0,'inDifficulty');
  

        redFlashBG=game.add.sprite(0,0,'redFlash');
        greenFlashBG=game.add.sprite(0,0,'greenFlash');
        blueFlashBG=game.add.sprite(0,0,'blueFlash');
        yellowFlashBG=game.add.sprite(0,0,'yellowFlash');

       // textObj= game.add.text(0, 0, '', { fill: '#ffffff' });

        textRedObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        textYellowObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        textBlueObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        textGreenObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        textEnterToRollObj=game.add.sprite(0,0,'rollDice');
       




      /*  dice1=game.add.sprite(0,0,'d1');
        dice2=game.add.sprite(0,0,'d2');
        dice3=game.add.sprite(0,0,'d3'); 
        diceBase=game.add.sprite(0,0,'db');*/
      //  111

        var xDiceOffset=105;
        var yDiceOffset=282;

        redDice1=game.add.sprite(xDiceOffset,yDiceOffset,'rd1');
        redDice2=game.add.sprite(xDiceOffset,yDiceOffset,'rd2');
        redDice3=game.add.sprite(xDiceOffset,yDiceOffset,'rd3'); 
        redDiceBase=game.add.sprite(xDiceOffset,yDiceOffset,'rdb');

        yellowDice1=game.add.sprite(xDiceOffset,yDiceOffset,'yd1');
        yellowDice2=game.add.sprite(xDiceOffset,yDiceOffset,'yd2');
        yellowDice3=game.add.sprite(xDiceOffset,yDiceOffset,'yd3'); 
        yellowDiceBase=game.add.sprite(xDiceOffset,yDiceOffset,'ydb');

        greenDice1=game.add.sprite(xDiceOffset,yDiceOffset,'gd1');
        greenDice2=game.add.sprite(xDiceOffset,yDiceOffset,'gd2');
        greenDice3=game.add.sprite(xDiceOffset,yDiceOffset,'gd3'); 
        greenDiceBase=game.add.sprite(xDiceOffset,yDiceOffset,'gdb');

        blueDice1=game.add.sprite(xDiceOffset,yDiceOffset,'bd1');
        blueDice2=game.add.sprite(xDiceOffset,yDiceOffset,'bd2');
        blueDice3=game.add.sprite(xDiceOffset,yDiceOffset,'bd3'); 
        blueDiceBase=game.add.sprite(xDiceOffset,yDiceOffset,'bdb');

        diceDot1=game.add.sprite(xDiceOffset,yDiceOffset,'d1');
        diceDot2=game.add.sprite(xDiceOffset,yDiceOffset,'d2');
        diceDot3=game.add.sprite(xDiceOffset,yDiceOffset,'d3');
        diceDot4=game.add.sprite(xDiceOffset,yDiceOffset,'d4');
        diceDot5=game.add.sprite(xDiceOffset,yDiceOffset,'d5');
        diceDot6=game.add.sprite(xDiceOffset,yDiceOffset,'d6');


        textDiceObj=game.add.text(0,0,'',{ fill: '#ffffff' });

        canWidth=240;
        canHeight=320;
        
        player1=game.add.sprite(0,0,'red');
        player2=game.add.sprite(0,0,'green');
        player3=game.add.sprite(0,0,'blue');
        player4=game.add.sprite(0,0,'yellow');

        red1=game.add.sprite(0,0,'red');
        red2=game.add.sprite(0,0,'red');
        red3=game.add.sprite(0,0,'red');
        red4=game.add.sprite(0,0,'red');


        yellow1=game.add.sprite(0,0,'yellow');
        yellow2=game.add.sprite(0,0,'yellow');
        yellow3=game.add.sprite(0,0,'yellow');
        yellow4=game.add.sprite(0,0,'yellow');

        blue1=game.add.sprite(0,0,'blue');
        blue2=game.add.sprite(0,0,'blue');
        blue3=game.add.sprite(0,0,'blue');
        blue4=game.add.sprite(0,0,'blue');

        green1=game.add.sprite(0,0,'green');
        green2=game.add.sprite(0,0,'green');
        green3=game.add.sprite(0,0,'green');
        green4=game.add.sprite(0,0,'green');


      //  gameOverBG=game.add.sprite(0,0,'game_over');
     //   gamePauseBG=game.add.sprite(0,0,'game_pause');

      
    
        //player1.scale.
      /*  player1.scale.setTo(0.1,0.1);
        player2.scale.setTo(0.1,0.1);
        player3.scale.setTo(0.1,0.1);
        player4.scale.setTo(0.1,0.1);*/


         textCur1ObjAI=game.add.text(0,0,'',{ fill: 'black' });
        textCur2ObjAI=game.add.text(0,0,'',{ fill: 'black' });
        textCur3ObjAI=game.add.text(0,0,'',{ fill: 'black' });
        textCur4ObjAI=game.add.text(0,0,'',{ fill: 'black' }); 



        
        mainBG=game.add.sprite(0,0,'mainBG');
        introArtObj=game.add.sprite(0,0,'introArt');
        initGameOverScreen();
        winningTokenBlueObj=game.add.sprite(0,0,'blue');
        winningTokenRedObj=game.add.sprite(0,0,'red');
        winningTokenGreenObj=game.add.sprite(0,0,'green');
        winningTokenYellowObj=game.add.sprite(0,0,'yellow');

        playerWonTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });

        winningTokenRedObj.width=30;winningTokenRedObj.height=30;
        winningTokenBlueObj.width=30;winningTokenBlueObj.height=30;
        winningTokenGreenObj.width=30;winningTokenGreenObj.height=30;
        winningTokenYellowObj.width=30;winningTokenYellowObj.height=30;

        var offsetY=211;
        playerWonTextObj.x=100;
        playerWonTextObj.y=offsetY;

        playerWonTextObj.scale.setTo(0.6,0.6);

        winningTokenRedObj.x=60;
        winningTokenRedObj.y=offsetY-8;

        winningTokenBlueObj.x=60;
        winningTokenBlueObj.y=offsetY-8;

        winningTokenGreenObj.x=60;
        winningTokenGreenObj.y=offsetY-8;

        winningTokenYellowObj.x=60;
        winningTokenYellowObj.y=offsetY-8;

        /* 
         red1.width = 20; red1.height = 20;
         red2.width = 20; red2.height = 20;
         red3.width = 20; red3.height = 20;
         red4.width = 20; red4.height = 20;

         yellow1.width = 20; yellow1.height = 20;
         yellow2.width = 20; yellow2.height = 20;
         yellow3.width = 20; yellow3.height = 20;
         yellow4.width = 20; yellow4.height = 20; 

         blue1.width = 20; blue1.height = 20;
         blue2.width = 20; blue2.height = 20;
         blue3.width = 20; blue3.height = 20;
         blue4.width = 20; blue4.height = 20; 

         green1.width = 20; green1.height = 20;
         green2.width = 20; green2.height = 20;
         green3.width = 20; green3.height = 20;
         green4.width = 20; green4.height = 20; 

        */

        
        player1.width = 20; player1.height = 20;
         player2.width = 20; player2.height = 20;
         player3.width = 20; player3.height = 20;
         player4.width = 20; player4.height = 20;


      


        r_2=game.add.sprite(0, 0, 'R_2');
        r_4=game.add.sprite(0, 0, 'R_4');
        r_6=game.add.sprite(0, 0, 'R_6');
        r_8=game.add.sprite(0, 0, 'R_8');

        g_2=game.add.sprite(0, 0, 'G_2');
        g_4=game.add.sprite(0, 0, 'G_4');
        g_6=game.add.sprite(0, 0, 'G_6');
        g_8=game.add.sprite(0, 0, 'G_8');

        y_2=game.add.sprite(0, 0, 'Y_2');
        y_4=game.add.sprite(0, 0, 'Y_4');
        y_6=game.add.sprite(0, 0, 'Y_6');
        y_8=game.add.sprite(0, 0, 'Y_8');

        b_2=game.add.sprite(0, 0, 'B_2');
        b_4=game.add.sprite(0, 0, 'B_4');
        b_6=game.add.sprite(0, 0, 'B_6');
        b_8=game.add.sprite(0, 0, 'B_8');


        playButtonImg=game.add.sprite(0,0,'playButton');

        playButtonImg.x=200;
        playButtonImg.y=290;


       pauseButtonImg=game.add.sprite(0,0,'pauseButton');
         pauseButtonImg.x=200;
         pauseButtonImg.y=290;  

         initPressEnter();
        initModeSelect();
        initNoOfPlayerSelect();
        initDifficultySelect();
        initMarkerSelect();
        initPauseScreen();
    

        initReusableUI();

         splashBG=game.add.sprite(0,0,'splash');
        // play menu music
        

        

        initAudioSrc();
        
        initPointers();
        resetGame();
        initGoogleAnalytics();
       menuStatus=false;




       
      /* pressEnterTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });

       pressEnterTextObj.text="PRESS ENTER";
       pressEnterTextObj.scale.setTo(0.6,0.6);
       pressEnterTextObj.x=63;
       pressEnterTextObj.y=186;*/




 
    
      // pressEnterRect.visible=false;


    }


    var pressEnterRect;
    var pressEnterTextObj;

    var selectModeRect;
    var selectModeRectBG;
    var selectModeTextObj;



    var singlePlayerTextObj;
    var twoPlayerTextObj;


    var selectDifficultyRect;
    var selectDifficultyRectBG;
    var selectDifficultyTextObj;
    var easyTextObj;
    var mediumTextObj;
    var hardTextObj;
    
    var selectNoOfPlayerRect;
    var selectNoOfPlayerRectBG;
    var selectNoOfPlayerTextObj;
    var playersTwoTextObj;
    var playersFourTextObj;
    var playerTwoVsTwoAIObj;

    var selectMarkerRectBG;
    var selectMarkerRect;
    var selectMarkerTextObj;
    var markerRedObj;
    var markerBlueObj;
    var markerGreenObj;
    var markerYellowObj;


    var pauseRectBG;
    var pauseRect;
    var pauseTextObj;
    var pauseRestartTextObj;
    var pauseHomeTextObj;



    var gameOverRectBG;
    var gameOverRect;
    var gameOverRectTextObj;
    var gameOverWinnerTextObj;
    var winnerRect;
    var gameOverHomeTextObj;
    var gameOverRestartTextObj;

    var press4TextObj;
    var press5TextObj;
    var press6TextObj;
    var press8TextObj;

    var press4RectObj;
    var press5RectObj;
    var press6RectObj;
    var press8RectObj;
    
    function initGameOverScreen()
    {
        gameOverRectBG = game.add.graphics(100,100);
        gameOverRectBG.lineStyle(1, 0x0000FF, 1);
        gameOverRectBG.beginFill(0x012A5E);
        gameOverRectBG.drawRect(-85, 50, 210 , 145);
        gameOverRectBG.endFill();

        gameOverRect = game.add.graphics(100,100);
        gameOverRect.lineStyle(1, 0x0000FF, 1);
        gameOverRect.beginFill(0x214983);
        gameOverRect.drawRect(-45, 55, 140 , 20);
        gameOverRect.endFill();

        winnerRect = game.add.graphics(100,100);
        winnerRect.lineStyle(1, 0x0000FF, 1);
        winnerRect.beginFill(0x214983);
        winnerRect.drawRect(-25, 109, 110 , 20);
        winnerRect.endFill();

        gameOverRectTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        gameOverRectTextObj.text="GAME OVER";
        gameOverRectTextObj.scale.setTo(0.5,0.5);
        gameOverRectTextObj.x=80;
        gameOverRectTextObj.y=158;


        gameOverWinnerTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        gameOverWinnerTextObj.text="WINNER!!";
        gameOverWinnerTextObj.scale.setTo(0.5,0.5);
        gameOverWinnerTextObj.x=95;
        gameOverWinnerTextObj.y=188;


        gameOverRestartTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        gameOverRestartTextObj.text="RESTART";
        gameOverRestartTextObj.scale.setTo(0.5,0.5);
        gameOverRestartTextObj.x=133;
        gameOverRestartTextObj.y=240;


        gameOverHomeTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        gameOverHomeTextObj.text="HOME";
        gameOverHomeTextObj.scale.setTo(0.5,0.5);
        gameOverHomeTextObj.x=133;
        gameOverHomeTextObj.y=270;

        
    }

    function initReusableUI()
    {
        press4RectObj = game.add.graphics(0,0);
        press4RectObj.lineStyle(1, 0x0000FF, 1);
        press4RectObj.beginFill(0x214983);
        press4RectObj.drawRect(0, 0, 70 , 20);
        press4RectObj.endFill();
        press4RectObj.visible=false;


        press5RectObj = game.add.graphics(0,0);
        press5RectObj.lineStyle(1, 0x0000FF, 1);
        press5RectObj.beginFill(0x214983);
        press5RectObj.drawRect(0, 0, 70 , 20);
        press5RectObj.endFill();
        press5RectObj.visible=false;

        
        press6RectObj = game.add.graphics(0,0);
        press6RectObj.lineStyle(1, 0x0000FF, 1);
        press6RectObj.beginFill(0x214983);
        press6RectObj.drawRect(0, 0, 70 , 20);
        press6RectObj.endFill();
        press6RectObj.visible=false;

        press8RectObj = game.add.graphics(0,0);
        press8RectObj.lineStyle(1, 0x0000FF, 1);
        press8RectObj.beginFill(0x214983);
        press8RectObj.drawRect(0, 0, 70 , 20);
        press8RectObj.endFill();
        press8RectObj.visible=false;


        press4TextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        press4TextObj.text="PRESS 4";
        press4TextObj.scale.setTo(0.5,0.5);
        press4TextObj.visible=false;

        press5TextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        press5TextObj.text="PRESS 5";
        press5TextObj.scale.setTo(0.5,0.5);
        press5TextObj.visible=false;
     
        press6TextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        press6TextObj.text="PRESS 6";
        press6TextObj.scale.setTo(0.5,0.5);
        press6TextObj.visible=false;

        press8TextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        press8TextObj.text="PRESS 8";
        press8TextObj.scale.setTo(0.5,0.5);
        press8TextObj.visible=false;

        menuDiceObj=game.add.sprite(0,0,'rd2');
        menuDiceObj.scale.setTo(0.6,0.6);
        menuDiceObj.x=45;
        menuDiceObj.y=175;
        

    }

    function initPressEnter()
    {
        pressEnterRect = game.add.graphics(100,100);
        pressEnterRect.lineStyle(2, 0x0000FF, 1);
        pressEnterRect.beginFill(0x012A5E);
        pressEnterRect.drawRect(-40, 85, 120, 20);
        pressEnterRect.endFill();


        pressEnterTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });

           pressEnterTextObj.text="PRESS ENTER";
           pressEnterTextObj.scale.setTo(0.6,0.6);
           pressEnterTextObj.x=63;
           pressEnterTextObj.y=186;

          pressEnterRect.visible=false;
           pressEnterTextObj.visible=false;
    }



    function initModeSelect()
    {

        selectModeRectBG = game.add.graphics(100,100);
        selectModeRectBG.lineStyle(1, 0x0000FF, 1);
        selectModeRectBG.beginFill(0x012A5E);
        selectModeRectBG.drawRect(-80, 70, 200 , 120);
        selectModeRectBG.endFill();

        selectModeRect = game.add.graphics(100,100);
        selectModeRect.lineStyle(1, 0x0000FF, 1);
        selectModeRect.beginFill(0x214983);
        selectModeRect.drawRect(-60, 80, 160 , 20);
        selectModeRect.endFill();

        selectModeTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        selectModeTextObj.text="SELECT MODE";
        selectModeTextObj.scale.setTo(0.6,0.6);
        selectModeTextObj.x=75;
        selectModeTextObj.y=181;

      


     

        singlePlayerTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        singlePlayerTextObj.text="VS PLAYER";
        singlePlayerTextObj.scale.setTo(0.5,0.5);
        singlePlayerTextObj.x=105;
        singlePlayerTextObj.y=223;

        twoPlayerTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        twoPlayerTextObj.text="VS COMPUTER";
        twoPlayerTextObj.scale.setTo(0.5,0.5);
        twoPlayerTextObj.x=105;
        twoPlayerTextObj.y=253;

        selectModeTextObj.visible=false;
        //menuDiceObj.visible=false;



    }

  


    function initDifficultySelect()
    {
      
        selectDifficultyRectBG = game.add.graphics(100,100);
        selectDifficultyRectBG.lineStyle(1, 0x0000FF, 1);
        selectDifficultyRectBG.beginFill(0x012A5E);
        selectDifficultyRectBG.drawRect(-80, 50, 200 , 150);
        selectDifficultyRectBG.endFill();

        selectDifficultyRect = game.add.graphics(100,100);
        selectDifficultyRect.lineStyle(1, 0x0000FF, 1);
        selectDifficultyRect.beginFill(0x214983);
        selectDifficultyRect.drawRect(-60, 60, 160 , 20);
        selectDifficultyRect.endFill();


        selectDifficultyTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        selectDifficultyTextObj.text="SELECT DIFFICULTY";
        selectDifficultyTextObj.scale.setTo(0.5,0.5);
        selectDifficultyTextObj.x=55;
        selectDifficultyTextObj.y=162;

        easyTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        easyTextObj.text="EASY";
        easyTextObj.scale.setTo(0.6,0.6);
        easyTextObj.x=130;
        easyTextObj.y=198;

        mediumTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        mediumTextObj.text="MEDIUM";
        mediumTextObj.scale.setTo(0.6,0.6);
        mediumTextObj.x=120;
        mediumTextObj.y=233;

        hardTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        hardTextObj.text="HARD";
        hardTextObj.scale.setTo(0.6,0.6);
        hardTextObj.x=130;
        hardTextObj.y=268;



    }

    function initNoOfPlayerSelect()
    {
        selectNoOfPlayerRectBG = game.add.graphics(100,100);
        selectNoOfPlayerRectBG.lineStyle(1, 0x0000FF, 1);
        selectNoOfPlayerRectBG.beginFill(0x012A5E);
        selectNoOfPlayerRectBG.drawRect(-65, 50, 180 , 160);
        selectNoOfPlayerRectBG.endFill();

        selectNoOfPlayerRect = game.add.graphics(100,100);
        selectNoOfPlayerRect.lineStyle(1, 0x0000FF, 1);
        selectNoOfPlayerRect.beginFill(0x214983);
        selectNoOfPlayerRect.drawRect(-45, 65, 140 , 20);
        selectNoOfPlayerRect.endFill();

        selectNoOfPlayerTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        selectNoOfPlayerTextObj.text="SELECT PLAYERS";
        selectNoOfPlayerTextObj.scale.setTo(0.5,0.5);
        selectNoOfPlayerTextObj.x=68;
        selectNoOfPlayerTextObj.y=168;

        playersTwoTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        playersTwoTextObj.text="2 PLAYERS";
        playersTwoTextObj.scale.setTo(0.5,0.5);
        playersTwoTextObj.x=120;
        playersTwoTextObj.y=170;
   
        playersFourTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        playersFourTextObj.text="4 PLAYERS";
        playersFourTextObj.scale.setTo(0.5,0.5);
        playersFourTextObj.x=120;
        playersFourTextObj.y=190;

        playerTwoVsTwoAIObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        playerTwoVsTwoAIObj.text="2 PLAYERS &"+"\n"+"2 COMPUTER";
        playerTwoVsTwoAIObj.scale.setTo(0.5,0.5);
        playerTwoVsTwoAIObj.x=120;
        playerTwoVsTwoAIObj.y=220;
   
    }

    function initMarkerSelect()
    {
       

        selectMarkerRectBG = game.add.graphics(100,100);
        selectMarkerRectBG.lineStyle(1, 0x0000FF, 1);
        selectMarkerRectBG.beginFill(0x012A5E);
        selectMarkerRectBG.drawRect(-50, 50, 150 , 160);
        selectMarkerRectBG.endFill();

        selectMarkerRect = game.add.graphics(100,100);
        selectMarkerRect.lineStyle(1, 0x0000FF, 1);
        selectMarkerRect.beginFill(0x214983);
        selectMarkerRect.drawRect(-45, 55, 140 , 20);
        selectMarkerRect.endFill();

        selectMarkerTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        selectMarkerTextObj.text="SELECT MARKER";
        selectMarkerTextObj.scale.setTo(0.5,0.5);
        selectMarkerTextObj.x=68;
        selectMarkerTextObj.y=158;

       markerRedObj= game.add.sprite(0,0,'red');
       markerBlueObj= game.add.sprite(0,0,'blue');
       markerGreenObj= game.add.sprite(0,0,'green');
       markerYellowObj= game.add.sprite(0,0,'yellow');

       var scaleFactor=1.2;
       markerRedObj.scale.setTo(scaleFactor,scaleFactor);
       markerBlueObj.scale.setTo(scaleFactor,scaleFactor);
       markerGreenObj.scale.setTo(scaleFactor,scaleFactor);
       markerYellowObj.scale.setTo(scaleFactor,scaleFactor); 

       var yFactor=33;
       var xFactor=135;
       markerRedObj.x=xFactor;
       markerRedObj.y=180;
       markerGreenObj.x=xFactor;
       markerGreenObj.y=markerRedObj.y+yFactor;
       markerYellowObj.x=xFactor;
       markerYellowObj.y=markerGreenObj.y+yFactor;
       markerBlueObj.x=xFactor;
       markerBlueObj.y=markerYellowObj.y+yFactor;
    }

    function initPauseScreen()
    {
        pauseRectBG = game.add.graphics(100,100);
        pauseRectBG.lineStyle(1, 0x0000FF, 1);
        pauseRectBG.beginFill(0x012A5E);
        pauseRectBG.drawRect(-50, 50, 150 , 100);
        pauseRectBG.endFill();

        pauseRect = game.add.graphics(100,100);
        pauseRect.lineStyle(1, 0x0000FF, 1);
        pauseRect.beginFill(0x214983);
        pauseRect.drawRect(-45, 55, 140 , 20);
        pauseRect.endFill();


        pauseTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        pauseTextObj.text="GAME PAUSED";
        pauseTextObj.scale.setTo(0.5,0.5);
        pauseTextObj.x=80;
        pauseTextObj.y=158;


        pauseRestartTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        pauseRestartTextObj.text="RESTART";
        pauseRestartTextObj.scale.setTo(0.5,0.5);
        pauseRestartTextObj.x=130;
        pauseRestartTextObj.y=188;


        pauseHomeTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        pauseHomeTextObj.text="HOME";
        pauseHomeTextObj.scale.setTo(0.5,0.5);
        pauseHomeTextObj.x=133;
        pauseHomeTextObj.y=220;

    }

    function noOfPlayerBGActive(status)
    {
        selectNoOfPlayerRectBG.visible=status;
        selectNoOfPlayerRect.visible=status;
        selectNoOfPlayerTextObj.visible=status;
        playersTwoTextObj.visible=status;
        playersFourTextObj.visible=status;
        mainBG.visible=status;
        press4TextObj.visible=status;
        press4RectObj.visible=status;
        press5TextObj.visible=status;
        press5RectObj.visible=status;
        press6TextObj.visible=false;
        press6RectObj.visible=false;
        playerTwoVsTwoAIObj.visible=false;
        
        var isAi=gameModevsAI;

        if(status)
        {
            var offsetText=45;
            var diffInY=3;
            var diffInX=4;
            var yFactor=32;
         
             press4RectObj.x=offsetText-diffInX;
             press4RectObj.y=200;

            press4TextObj.x=offsetText;
            press4TextObj.y=press4RectObj.y+diffInY;
            playersTwoTextObj.y=press4RectObj.y+diffInY;
           
            press5RectObj.x=offsetText-diffInX;
            press5RectObj.y= press4RectObj.y+yFactor;

            press5TextObj.x=offsetText;
            press5TextObj.y= press5RectObj.y+diffInY;
            playersFourTextObj.y=press5RectObj.y+diffInY;


            press6RectObj.x=offsetText-diffInX;
            press6RectObj.y= press5RectObj.y+yFactor;

            press6TextObj.x=offsetText;
            press6TextObj.y= press6RectObj.y+diffInY;
            playerTwoVsTwoAIObj.y=press6RectObj.y+diffInY;


            if(isAi)
            {
                console.log("SHOWING VS AI");
            }else{
                console.log("SHOWING VS PLAYER");
                press6TextObj.visible=true;
                press6RectObj.visible=true;
                playerTwoVsTwoAIObj.visible=true;
            }
            
 
        }
    }

    function gameOverBGactive(status)
    {
        gameOverRectBG.visible=status;
        gameOverRect.visible=status;
        gameOverRectTextObj.visible=status;
        mainBG.visible=status;
        gameOverHomeTextObj.visible=status;
        gameOverRestartTextObj.visible=status;
        gameOverWinnerTextObj.visible=status;
         winnerRect.visible=status;
        press6RectObj.visible=status;
        press6TextObj.visible=status;
        press5RectObj.visible=status;
        press5TextObj.visible=status;
        if(status)
        {
            var offsetText=60;
            var diffInY=3;
            var diffInX=4;
            var yFactor=32;
         
             press5RectObj.x=offsetText-diffInX;
             press5RectObj.y= 235;

            press5TextObj.x=offsetText;
            press5TextObj.y=  press5RectObj.y+diffInY;


             press6RectObj.x=offsetText-diffInX;
             press6RectObj.y=  press5RectObj.y + yFactor;


             press6TextObj.x=offsetText;
             press6TextObj.y= press6RectObj.y+diffInY;
        }
    }
    function pauseBGactive(status)
    {
        pauseRectBG.visible=status;
        pauseRect.visible=status;
        pauseTextObj.visible=status;
        mainBG.visible=status;
        pauseHomeTextObj.visible=status;
        pauseRestartTextObj.visible=status;
        press6RectObj.visible=status;
        press6TextObj.visible=status;
        press5RectObj.visible=status;
        press5TextObj.visible=status;
        if(status){
            var offsetText=60;
            var diffInY=3;
            var diffInX=4;
            var yFactor=32;
         
             press5RectObj.x=offsetText-diffInX;
             press5RectObj.y= 185;

            press5TextObj.x=offsetText;
            press5TextObj.y=  press5RectObj.y+diffInY;


             press6RectObj.x=offsetText-diffInX;
             press6RectObj.y=  press5RectObj.y + yFactor;


             press6TextObj.x=offsetText;
             press6TextObj.y= press6RectObj.y+diffInY;

        }else{
           // console.trace("THIS ?");
        }
    }


    function introBGactive(status)
    {
        pressEnterRect.visible=status;
        pressEnterTextObj.visible=status;
        introArtObj.visible=status;
        mainBG.visible=status;
    }

    function markerSelectActive(status)
    {

        mainBG.visible=status;
        press5TextObj.visible=status;
        press4TextObj.visible=status;
        press5RectObj.visible=status;
        press4RectObj.visible=status;
        press6RectObj.visible=status;
        press6TextObj.visible=status;
        press8RectObj.visible=status;
        press8TextObj.visible=status;
        markerRedObj.visible=status;
        markerBlueObj.visible=status;
        markerYellowObj.visible=status;
        markerGreenObj.visible=status;
        selectMarkerRectBG.visible=status;
        selectMarkerRect.visible=status;
        selectMarkerTextObj.visible=status;
        var offsetText=60;
        var diffInY=3;
        var diffInX=4;
        var yFactor=32;


        if(status)
        {
             press4RectObj.x=offsetText-diffInX;
             press4RectObj.y=185;

            press4TextObj.x=offsetText;
            press4TextObj.y=press4RectObj.y+diffInY;

           

             press5RectObj.x=offsetText-diffInX;
             press5RectObj.y=  press4RectObj.y+yFactor;

            press5TextObj.x=offsetText;
            press5TextObj.y=  press5RectObj.y+diffInY;


             press6RectObj.x=offsetText-diffInX;
             press6RectObj.y=  press5RectObj.y + yFactor;


             press6TextObj.x=offsetText;
             press6TextObj.y= press6RectObj.y+diffInY;

           
             press8RectObj.x=offsetText-diffInX;
             press8RectObj.y=  press6RectObj.y+yFactor;


             press8TextObj.x=offsetText;
             press8TextObj.y= press8RectObj.y+diffInY;

        }

    }


    function modeBGactive(status)
    {
        mainBG.visible=status;
        selectModeRectBG.visible=status;
        selectModeRect.visible=status;
        selectModeTextObj.visible=status;
        menuDiceObj.visible=status;
        press5TextObj.visible=status;
        press4TextObj.visible=status;
        press5RectObj.visible=status;
        press4RectObj.visible=status;
        singlePlayerTextObj.visible=status;
        twoPlayerTextObj.visible=status;

        if(status)
        {
            press4TextObj.x=30;
            press4TextObj.y=223;

            press5TextObj.x=30;
            press5TextObj.y=253;

             press4RectObj.x=25;
             press4RectObj.y=220;

             press5RectObj.x=25;
             press5RectObj.y=250;


     
            menuDiceObj.x=45;
            menuDiceObj.y=175;
         
        }
    }


    


    function difficultyBGactive(status)
    {
        mainBG.visible=status;
        selectDifficultyRect.visible=status;
        selectDifficultyRectBG.visible=status;
        selectDifficultyTextObj.visible=status;

        if(status)
        {
            press4TextObj.x=30;
            press4TextObj.y=198;

             press4RectObj.x=25;
             press4RectObj.y=195;


            press5TextObj.x=30;
            press5TextObj.y=233;

             press5RectObj.x=25;
             press5RectObj.y=230;


             press6TextObj.x=30;
             press6TextObj.y=270;

             press6RectObj.x=25;
             press6RectObj.y=267;

         

        }

        press5TextObj.visible=status;
        press4TextObj.visible=status;
        press5RectObj.visible=status;
        press4RectObj.visible=status;
        press6RectObj.visible=status;
        press6TextObj.visible=status;

        easyTextObj.visible=status;
        mediumTextObj.visible=status;
        hardTextObj.visible=status;
     
    }

    



    var splashStatus=true;
    var splashTimer=0;
    var splashTimerEnd=2;
      /*  textCur1Obj=null;
        textCur2Obj=null;
        textCur3Obj=null;
        textCur4Obj=null;*/
      // introKeyTextObj=game.add.text(canWidth-230,canHeight-60,'',{ fill: 'blue' });
       /* introKeyTextObj=game.add.text(game.world.centerX-80, game.world.centerY+80,"PRESS ANY KEY",{
            font: "20px Arial",
            fill: "blue",
            align: "center"
        });*/



 





    
        /*
        gameText = game.add.text(game.width, 0, "0", {
            font: "10px Arial",
            fill: "white"
        });
        gameText.anchor.setTo(1, 0);

        banner = game.add.text(game.world.centerX, game.world.centerY, "Arrow keys to start!\nDon't cross the border,\nother wise you can't catch the pery \nfor few sec", {
            font: "15px Arial",
            fill: "white",
            align: "center"
        });
        banner.anchor.setTo(0.5, 0.5);
        setTimeout(e => {
            banner.setText("");
        }, 3000)

        inithunter();
        placeRandomprey();

        // play audio 
        music = game.add.audio('fsound');
        window.music = music;
        music.loop = true;
        music.play();


        


        cursors = game.input.keyboard.createCursorKeys();
        */

 
     
   
   /* var sprite;
    function render() {

        // Input debug info
        game.debug.inputInfo(32, 32);
        game.debug.spriteInputInfo(sprite, 32, 130);
        game.debug.pointer( game.input.activePointer );
    
    }*/

   /* function componentToHex(c) 
    {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    
    function rgbToHex(r, g, b)
    {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }*/

    function rgbToHex(red, green, blue)
    {
        var rgb = blue | (green << 8) | (red << 16);
      //  return '#' + (0x1000000 + rgb).toString(16).slice(1)
        return '0x' + (0x1000000 + rgb).toString(16).slice(1)
    }

    function resetVariables()
    {
        colorCounter=0;
        sixCounter=0;
        debugcounter=0;
         red1curr=-1;
         red2curr=-1;
         red3curr=-1;
         red4curr=-1;
        
         yellow1curr=-1;
         yellow2curr=-1;
         yellow3curr=-1;
         yellow4curr=-1;
    
         green1curr=-1;
         green2curr=-1;
         green3curr=-1;
         green4curr=-1;
    
         blue1curr=-1;
         blue2curr=-1;
         blue3curr=-1;
         blue4curr=-1;

         idleMoveCounter=0;
         idleMoveCounterAI=0;



        animateDiceStatus=false;
      

         shouldObserverDiceResult=false;


         selectColorStatus=false;
//         inPickBG.visible=false;
         markerSelectActive(false);
         inGameBG.visible=true;
         gameStatus=true;


         setDiceRolledStatus(false,true);
         setShouldRollDiceStatus(false,true);
         setChanceStatus(false,true);
         setPlayerReady(false,true)
         setSelectionTokenStatus(false,true);

         //chanceAIStatus=false;
        setAIChanceStatus(false,true);
         animateBGStatus=true;
         animateKillStatus=false;

         chanceCounter=0;
         chanceCounter2=0;
         aiChanceCounter=0;

         // aiReady=false;
         setAIReadyStatus(false,true);
       /*  aiPrepared=false;*/
//         aiReactedStatus=false;
  //       aiCanMove=false;
          setAIReactedStatus(false,true);
          setAICanMoveStatus(false,true);
        moveEndedStatus=false;
         repeatMove=false;


         // gameOverBG.visible=false;
         gameOverBGactive(false);
         playerWonTextObj.text=" ";
         winningTokenBlueObj.visible=false;
         winningTokenRedObj.visible=false;
         winningTokenGreenObj.visible=false;
         winningTokenYellowObj.visible=false;
 
       //  gamePauseBG.visible=false;
       pauseBGactive(false);
         gamePaused=false;

         resetDice();
         hideBadges();
         hidePointers();
         resetDiceSprites();

         setDiceRolledStatus(false);
         setShouldRollDiceStatus(true);
         setChanceStatus(true);
         
        // chanceAIStatus=false;
        setAIChanceStatus(false); 

    }

    function getAICanMoveStatus()
    {
        return aiCanMove[colorCounter];
    }

    function setAICanMoveStatus(setActive,resetAll=false)
    {
        aiCanMove[colorCounter]=setActive;
        if(resetAll)
        {

            for(var i=0;i<4;i++){
                aiCanMove[i]=setActive;
            }
         
        }
    }

    function getAIReactedStatus()
    {
     
      return aiReactedStatus[colorCounter];

    }

    function setAIReactedStatus(setActive,resetAll=false)
    {
       
        aiReactedStatus[colorCounter]=setActive;
        if(resetAll)
        {

            for(var i=0;i<4;i++){
                aiReactedStatus[i]=setActive;
            }
         
        }
    }

    function getAIChanceStatus()
    {
     
        
        return chanceAIStatus[colorCounter];
       
    }

    function setAIChanceStatus(setActive,resetAll=false)
    {
     
        chanceAIStatus[colorCounter]=setActive;
        if(resetAll)
        {

            for(var i=0;i<4;i++){
                chanceAIStatus[i]=setActive;
            }
         
        }

        
    }

    var defaultPosRed1x=35-8;
    var defaultPosRed2x=64-8;
    var defaultPosRed3x=35-8;
    var defaultPosRed4x=64-8;

    var defaultPosRed1y=213-14;
    var defaultPosRed2y=213-14;
    var defaultPosRed3y=240-14;
    var defaultPosRed4y=240-14;

    var defaultPosBlue1x=170-8;
    var defaultPosBlue2x=198-8;
    var defaultPosBlue3x=170-8;
    var defaultPosBlue4x=198-8;

    var defaultPosBlue1y=213-14;
    var defaultPosBlue2y=213-14;
    var defaultPosBlue3y=240-14;
    var defaultPosBlue4y=240-14;

    var defaultPosGreen1x=35-8;
    var defaultPosGreen2x=64-8;
    var defaultPosGreen3x=35-8;
    var defaultPosGreen4x=64-8;

    var defaultPosGreen1y=80-14;
    var defaultPosGreen2y=80-14;
    var defaultPosGreen3y=105-14;
    var defaultPosGreen4y=105-14;

    var defaultPosYellow1x=170-8;
    var defaultPosYellow2x=198-8;
    var defaultPosYellow3x=170-8;
    var defaultPosYellow4x=198-8;

    var defaultPosYellow1y=80-14;
    var defaultPosYellow2y=80-14;
    var defaultPosYellow3y=105-14;
    var defaultPosYellow4y=105-14;


    function initPlaces()
    {
       console.log("GAME IS VS AI ? :"+gameModevsAI + " G_M_T :"+gameModeType);
        changeBgMusic(false);

        red1.x=defaultPosRed1x;
        red1.y=defaultPosRed1y;

        red2.x=defaultPosRed2x;
        red2.y=defaultPosRed2y;

        red3.x=defaultPosRed3x;
        red3.y=defaultPosRed3y;

        red4.x=defaultPosRed4x;
        red4.y=defaultPosRed4y;


        blue1.x=defaultPosBlue1x;
        blue1.y=defaultPosBlue1y;

        blue2.x=defaultPosBlue2x;
        blue2.y=defaultPosBlue2y;

        blue3.x=defaultPosBlue3x;
        blue3.y=defaultPosBlue3y;

        blue4.x=defaultPosBlue4x;
        blue4.y=defaultPosBlue4y;


        
        green1.x=defaultPosGreen1x;
        green1.y=defaultPosGreen1y;

        green2.x=defaultPosGreen2x;
        green2.y=defaultPosGreen2y;

        green3.x=defaultPosGreen3x;
        green3.y=defaultPosGreen3y;

        green4.x=defaultPosGreen4x;
        green4.y=defaultPosGreen4y; 



        yellow1.x=defaultPosYellow1x;
        yellow1.y=defaultPosYellow1y;

        yellow2.x=defaultPosYellow2x;
        yellow2.y=defaultPosYellow2y;

        yellow3.x=defaultPosYellow3x;
        yellow3.y=defaultPosYellow3y;

        yellow4.x=defaultPosYellow4x;
        yellow4.y=defaultPosYellow4y; 


     
        blue1.visible=false;
        blue2.visible=false;
        blue3.visible=false;
        blue4.visible=false;

        green1.visible=false;
        green2.visible=false;
        green3.visible=false;
        green4.visible=false;

        red1.visible=false;
        red2.visible=false;
        red3.visible=false;
        red4.visible=false;

        yellow1.visible=false;
        yellow2.visible=false;
        yellow3.visible=false;
        yellow4.visible=false;



        textRedObj.visible=false;
        textYellowObj.visible=false;
        textBlueObj.visible=false;
        textGreenObj.visible=false;


        textEnterToRollObj.visible=false;
        textEnterToRollObj.x=37;
        textEnterToRollObj.y=127;
        textEnterToRollObj.scale.setTo(0.7,0.7);


        textRedObj.x=38;
        textRedObj.y=258;
        textRedObj.scale.setTo(0.5,0.5);

        textYellowObj.x=150;
        textYellowObj.y=48;
        textYellowObj.scale.setTo(0.5,0.5);



        textBlueObj.x=150;
        textBlueObj.y=258;
        textBlueObj.scale.setTo(0.5,0.5);

        textGreenObj.x=38;
        textGreenObj.y=48;
        textGreenObj.scale.setTo(0.5,0.5);



        textDiceObj.text=" ";
        textDiceObj.x=111;
        textDiceObj.y=285;
      
           


          textRedObj.text="COMPUTER";
          textYellowObj.text="COMPUTER";
          textGreenObj.text="COMPUTER";
          textBlueObj.text="COMPUTER";
       //  textEnterToRollObj.text="Press Enter to roll the dice";
           textEnterToRollObj.visible=true;
        if(playerColor[0]==1 || playerColor[0]==2 )
        {
            red1.visible=true;
            red2.visible=true;
            red3.visible=true;
            red4.visible=true;


            yellow1.visible=true;
            yellow2.visible=true;
            yellow3.visible=true;
            yellow4.visible=true;

            textRedObj.visible=true;
            textYellowObj.visible=true;
        }


        if(playerColor[0]==3 || playerColor[0]==4)
        {
            green1.visible=true;
            green2.visible=true;
            green3.visible=true;
            green4.visible=true;

            blue1.visible=true;
            blue2.visible=true;
            blue3.visible=true;
            blue4.visible=true;

            textBlueObj.visible=true;
            textGreenObj.visible=true;

        }

        if(getColor()==1){
            textRedObj.text="YOU";
           
  
        }else if(getColor()==2){
            textYellowObj.text="YOU";
            textYellowObj.x+=23;
            textRedObj.x-=23;

          
        }else if(getColor()==3){
            textGreenObj.text="YOU";
           
        }else if(getColor()==4){
            textBlueObj.text="YOU";
            textBlueObj.x+=23;
            textGreenObj.x-=23;

        }

        if(gameModeType==0)
        {
            // console.log("@@@@ GET COLOR :"+getColor()+":: CC :"+colorCounter);
            if(getColor()==1)
            {
                //Player is red
                //Comp is yellow 
                redPointerTextObj.text="YOU";
                yellowPointerTextObj.text="COM";
                // console.log("** 1 **");
            }
            else if(getColor()==1)
            {
                //Comp is red
                //Player is yellow 
                redPointerTextObj.text="COM";
                yellowPointerTextObj.text="YOU";
                // console.log("** 2 **");

            }
            else if(getColor()==3)
            {
                //Player is green
                //Comp is blue 
                bluePointerTextObj.text="COM";
                greenPointerTextObj.text="YOU";

                // console.log("** 3 **");

            }
            else if(getColor()==4)
            {
                //Player is blue
                //Comp is green

                bluePointerTextObj.text="YOU";
                greenPointerTextObj.text="COM";

                // console.log("** 4 **");

            }
        }

        if(gameModeType==1)
        {
            if(getColor()==1)
            {
                textRedObj.text="PLAYER 1";
                textRedObj.x-=20;

                textYellowObj.text="PLAYER 2";
                textYellowObj.x+=10;
               // textRedObj.x-=23;

               redPointerTextObj.text="P1";
               yellowPointerTextObj.text="P2";
      
            }
            else if(getColor()==2){
                textYellowObj.text="PLAYER 1";
                textYellowObj.x-=20;
 //               textRedObj.x-=23;
                 textRedObj.text="PLAYER 2";
                 textRedObj.x+=10;


               redPointerTextObj.text="P2";
               yellowPointerTextObj.text="P1";
              
            }else if(getColor()==3){
                textGreenObj.text="PLAYER 1";
                textGreenObj.x-=15;

                textBlueObj.text="PLAYER 2";
//                textBlueObj.x+=23;


               bluePointerTextObj.text="P2";
               greenPointerTextObj.text="P1";

            }else if(getColor()==4){
                textBlueObj.text="PLAYER 1";
                textBlueObj.x-=20;

                textGreenObj.x+=3;
                textGreenObj.text="PLAYER 2";

                bluePointerTextObj.text="P1";
                greenPointerTextObj.text="P2";
            }
        }


        if(gameModeType==2)
        {
            red1.visible=true;
            red2.visible=true;
            red3.visible=true;
            red4.visible=true;


            yellow1.visible=true;
            yellow2.visible=true;
            yellow3.visible=true;
            yellow4.visible=true;

            textRedObj.visible=true;
            textYellowObj.visible=true;


            green1.visible=true;
            green2.visible=true;
            green3.visible=true;
            green4.visible=true;

            blue1.visible=true;
            blue2.visible=true;
            blue3.visible=true;
            blue4.visible=true;

            textBlueObj.visible=true;
            textGreenObj.visible=true;


            textRedObj.text="PLAYER 1";
            textRedObj.x-=20;


            textGreenObj.text="PLAYER 2";
            textGreenObj.x-=15;

            textYellowObj.text="PLAYER 3";
            textYellowObj.x+=10;
       
            textBlueObj.text="PLAYER 4";
            textBlueObj.x+=10;
 
            redPointerTextObj.text="P1";
            greenPointerTextObj.text="P2";
            yellowPointerTextObj.text="P3";
            bluePointerTextObj.text="P4";
            
        }
        if(gameModeType==3)
        {
            red1.visible=true;
            red2.visible=true;
            red3.visible=true;
            red4.visible=true;


            yellow1.visible=true;
            yellow2.visible=true;
            yellow3.visible=true;
            yellow4.visible=true;

            textRedObj.visible=true;
            textYellowObj.visible=true;


            green1.visible=true;
            green2.visible=true;
            green3.visible=true;
            green4.visible=true;

            blue1.visible=true;
            blue2.visible=true;
            blue3.visible=true;
            blue4.visible=true;

            textBlueObj.visible=true;
            textGreenObj.visible=true;


           /* textRedObj.text="PLAYER 1";
            textRedObj.x-=20;

            textGreenObj.text="COMPUTER 1";
            textGreenObj.x-=30;

            textYellowObj.text="COMPUTER 2";
            textYellowObj.x-=5;
       
            textBlueObj.text="COMPUTER 3";
            textBlueObj.x-=5;*/
          


            if(getColor()==1)
            {
                textRedObj.text="YOU";
              //  textRedObj.x-=20;

                textYellowObj.text="COMPUTER 2";
                textYellowObj.x-=5;

                textGreenObj.text="COMPUTER 1";
                textGreenObj.x-=30;
           
                textBlueObj.text="COMPUTER 3";
                textBlueObj.x-=5; 

                redPointerTextObj.text="YOU";
                greenPointerTextObj.text="COM";
                yellowPointerTextObj.text="COM";
                bluePointerTextObj.text="COM";
            }
            else if(getColor()==2){
                textYellowObj.text="YOU";
               // textYellowObj.x-=20;

                textRedObj.text="COMPUTER 2";
                textRedObj.x-=6;

                textBlueObj.text="COMPUTER 1";
                textBlueObj.x-=5; 

                textGreenObj.text="COMPUTER 3";
                textGreenObj.x-=30;

                redPointerTextObj.text="COM";
                greenPointerTextObj.text="COM";
                yellowPointerTextObj.text="YOU";
                bluePointerTextObj.text="COM";

            }else if(getColor()==3){
                textGreenObj.text="YOU";
                //textGreenObj.x-=15;

                textBlueObj.text="COMPUTER 2";
                textBlueObj.x-=5;

                textRedObj.text="COMPUTER 3";
                textRedObj.x-=30;

                textYellowObj.text="COMPUTER 1";
               textYellowObj.x-=4;

               redPointerTextObj.text="COM";
               greenPointerTextObj.text="YOU";
               yellowPointerTextObj.text="COM";
               bluePointerTextObj.text="COM";

            }else if(getColor()==4){
                textBlueObj.text="YOU";
              //  textBlueObj.x-=20;

                textGreenObj.text="COMPUTER 2";
                textGreenObj.x-=5;


                textYellowObj.text="COMPUTER 3";
                textYellowObj.x-=5;

                textRedObj.text="COMPUTER 1";
                textRedObj.x-=30;

                redPointerTextObj.text="COM";
                greenPointerTextObj.text="COM";
                yellowPointerTextObj.text="COM";
                bluePointerTextObj.text="YOU";


            }
            
        }
        if(gameModeType==4)
        {
            red1.visible=true;
            red2.visible=true;
            red3.visible=true;
            red4.visible=true;


            yellow1.visible=true;
            yellow2.visible=true;
            yellow3.visible=true;
            yellow4.visible=true;

            textRedObj.visible=true;
            textYellowObj.visible=true;


            green1.visible=true;
            green2.visible=true;
            green3.visible=true;
            green4.visible=true;

            blue1.visible=true;
            blue2.visible=true;
            blue3.visible=true;
            blue4.visible=true;

            textBlueObj.visible=true;
            textGreenObj.visible=true;


           /* textRedObj.text="PLAYER 1";
            textRedObj.x-=20;


            textGreenObj.text="COMPUTER 1";
            textGreenObj.x-=30;

            textYellowObj.text="PLAYER 2";
            textYellowObj.x+=10;
       
            textBlueObj.text="COMPUTER 2";
            textBlueObj.x-=5;*/


            if(getColor()==1)
            {
                textRedObj.text="PLAYER 1";
                textRedObj.x-=20;

                textYellowObj.text="PLAYER 2";
                textYellowObj.x+=10;

                textGreenObj.text="COMPUTER 1";
                textGreenObj.x-=30;
           
                textBlueObj.text="COMPUTER 2";
                textBlueObj.x-=5; 

                redPointerTextObj.text="P1";
                greenPointerTextObj.text="COM";
                yellowPointerTextObj.text="P2";
                bluePointerTextObj.text="COM";
            }
            else if(getColor()==2){
                textYellowObj.text="PLAYER 1";
                textYellowObj.x-=20;

                textRedObj.text="PLAYER 2";
                textRedObj.x+=10;

                textBlueObj.text="COMPUTER 1";
                textBlueObj.x-=5; 

                textGreenObj.text="COMPUTER 3";
                textGreenObj.x-=30;

                redPointerTextObj.text="P2";
                greenPointerTextObj.text="COM";
                yellowPointerTextObj.text="P1";
                bluePointerTextObj.text="COM";
              
            }else if(getColor()==3){
                textGreenObj.text="PLAYER 1";
                textGreenObj.x-=15;

                textBlueObj.text="PLAYER 2";
                textBlueObj.x+=5;

                textRedObj.text="COMPUTER 2";
                textRedObj.x-=30;

                textYellowObj.text="COMPUTER 1";
               textYellowObj.x-=4;

               redPointerTextObj.text="COM";
               greenPointerTextObj.text="P1";
               yellowPointerTextObj.text="COM";
               bluePointerTextObj.text="P2";

            }else if(getColor()==4){
                textBlueObj.text="PLAYER 1";
                textBlueObj.x-=20;

                textGreenObj.x+=3;
                textGreenObj.text="PLAYER 2";


                textYellowObj.text="COMPUTER 2";
                textYellowObj.x-=4;

                textRedObj.text="COMPUTER 1";
                textRedObj.x-=30;


                redPointerTextObj.text="COM";
                greenPointerTextObj.text="P2";
                yellowPointerTextObj.text="COM";
                bluePointerTextObj.text="P1";

            }
 
            
        }
      // playButtonImg.visible=true;//DEBUG ONLY
       
        //REAL CODE.
        playButtonImg.visible=false;
        pauseButtonImg.visible=true;
        changeDiceColor(getColor());
        diceBase.visible=false;
        
     

    }

 


    //var focused = document.activeElement;
    // dummy element
   /* var dummyEl = document.getElementById('hunter-prey');

    // check for focus
    var focused = (document.activeElement === dummyEl);*/
    function getBadge1(color)
    {
        if(color==1)
        {
            return r_2;
        }else if(color==2)
        {
            return y_2;
        }else if(color==3)
        {
            return g_2;
        }else if(color==4)
        {
            return b_2;
        }
    }
    
    function getBadge2(color)
    {
        if(color==1)
        {
            return r_4;
        }else if(color==2)
        {
            return y_4;
        }else if(color==3)
        {
            return g_4;
        }else if(color==4)
        {
            return b_4;
        }
    }
    function getBadge3(color)
    {
        if(color==1)
        {
            return r_6;
        }else if(color==2)
        {
            return y_6;
        }else if(color==3)
        {
            return g_6;
        }else if(color==4)
        {
            return b_6;
        }
    }

    function getBadge4(color)
    {
        if(color==1)
        {
            return r_8;
        }else if(color==2)
        {
            return y_8;
        }else if(color==3)
        {
            return g_8;
        }else if(color==4)
        {
            return b_8;
        }
    }


    function getColorCounter()
    {
        return colorCounter;
    }

    function setColorCounter(value)
    {
        colorCounter=value;
    }

    function repeatColor()
    {
       
      /*  if(gameModeType==0)
        return;*/
        colorCounter--;
      /*  if(onKill==false)     
        {
         
        }
        else
        {
            console.log("IT IS ON KILL");
        }*/
        //console.log("REPEATING COLOR : COLOR COUNTER :"+colorCounter );
    }

    function incColor()
    {

     
        // console.trace("$$$ INC $$$");

        /*if(gameModeType==0)
        return;*/

        var temp=1;

        if(gameModeType==2 || gameModeType==3 || gameModeType==4 )
        temp=3;

      //  console.log("TEMP IN INC COLOR IS :"+temp);
        colorCounter++;



        if(colorCounter>temp)
        colorCounter=0;

       // console.log("INCREASING COLOR : COLOR COUNTER :"+colorCounter );
    }

    var colorCounter=0;
    function getColorEnemy()
    {
        return playerColor[colorCounter];
    }
    function getColor()
    {
      /*  if(gameModeType==0)
        {
            colorCounter=0;
          //  return playerColor[0];
        }
        else if(gameModeType==1)
        {
            colorCounter++;
            if(colorCounter>1)
            colorCounter=0;
        }
        else if(gameModeType==2)
        {
            colorCounter++;
            if(colorCounter>3)
            colorCounter=0;
        } */

        //  console.log("Color counter :"+colorCounter+"::"+"Player color :"+playerColor[colorCounter]);
        
        return playerColor[colorCounter];
    }

    function hideBadges()
    {
 
        color=getColor();

     
        // console.log("HIDE BADGES COLOR :"+color); 

        textCur1Obj=getBadge1(color);
        textCur2Obj=getBadge2(color);
        textCur3Obj=getBadge3(color);
        textCur4Obj=getBadge4(color);

       //  console.log( "WHAT IS THIS :"+textCur1Obj);
        textCur1Obj.visible=false;
        textCur2Obj.visible=false;
        textCur3Obj.visible=false;
        textCur4Obj.visible=false;  

         
      
     
    }

    function showBadges()
    {


        color=getColor();

        textCur1Obj=getBadge1(color);
        textCur2Obj=getBadge2(color);
        textCur3Obj=getBadge3(color);
        textCur4Obj=getBadge4(color); 
     

        if(canUpdateBadges(getCur1()))
        {
        textCur1Obj.visible=true;
        }
        if(canUpdateBadges(getCur2()))
        {
        textCur2Obj.visible=true;
        }
        if(canUpdateBadges(getCur3()))
        {
        textCur3Obj.visible=true;
        }
        if(canUpdateBadges(getCur4()))
        {
        textCur4Obj.visible=true; 
        }

       

        xOffset=3;
        yOffset=6;

        textCur1Obj.x= getNode1().x+xOffset;
        textCur1Obj.y= getNode1().y-yOffset;


        textCur2Obj.x= getNode2().x+xOffset;
        textCur2Obj.y= getNode2().y-yOffset;

        textCur3Obj.x= getNode3().x+xOffset;
        textCur3Obj.y= getNode3().y-yOffset;

        textCur4Obj.x= getNode4().x+xOffset;
        textCur4Obj.y= getNode4().y-yOffset; 

 
    }

    var redPointer;
    var bluePointer;
    var greenPointer;
    var yellowPointer;


    var redPointerTextObj;
    var bluePointerTextObj;
    var greenPointerTextObj;
    var yellowPointerTextObj;

    var dice1;
    var dice2;
    var dice3;
    var diceBase;

    var redDice1;
    var redDice2;
    var redDice3;
    var redDiceBase;

    var yellowDice1;
    var yellowDice2;
    var yellowDice3;
    var yellowDiceBase;

    var greenDice1;
    var greenDice2;
    var greenDice3;
    var greenDiceBase;

    var blueDice1;
    var blueDice2;
    var blueDice3;
    var blueDiceBase;


    

    var diceTimer=0;
    var diceTimerEnd=0.03;
    var diceIndex=0;

    var animateDiceStatus=false;

    function resetDice(){
        diceBase.visible=false;
        dice1.visible=false;
        dice2.visible=false;
        dice3.visible=false;
        diceIndex=-1;
        diceTimer=0;
        diceResultTimer=0;
    }

    function animateDice(dt)
    {
        if(diceTimer>=diceTimerEnd)
        {
           /*for(var i=0;i<14;i++){
            if(diceIndex==i){
                dices[i].visible=true;
            }else{
                dices[i].visible=false;
            }
           }*/

            if(diceIndex==0){
                changeAudioSrc(4);
                resetDiceSprites();
                dice1.visible=true;
                dice2.visible=false;
                dice3.visible=false; 
                diceBase.visible=false;
                textDiceObj.text="";
            }else if(diceIndex==1){
               dice1.visible=false;
                dice2.visible=true;
                dice3.visible=false; 
                diceBase.visible=false;
                textDiceObj.text="";
            }else if(diceIndex==2){
                dice1.visible=false;
                dice2.visible=false;
                dice3.visible=true; 
                diceBase.visible=false;
                textDiceObj.text="";
            } else if(diceIndex==3)
            {
                dice1.visible=true;
                dice2.visible=false;
                dice3.visible=false;
                diceBase.visible=false; 
                textDiceObj.text="";
            }
            else if(diceIndex==4)
            {
               dice1.visible=false;
                dice2.visible=true;
                dice3.visible=false;
                diceBase.visible=false; 
                textDiceObj.text="";
            }
            else if(diceIndex==5)
            {
                dice1.visible=false;
                dice2.visible=false;
                dice3.visible=true;
                diceBase.visible=false; 
                textDiceObj.text="";
            } 


       
            if(diceIndex>=6)
            {
                diceIndex=-1;
                animateDiceStatus=false;
                diceBase.visible=true;
                dice1.visible=false;
                dice2.visible=false;
                dice3.visible=false; 
                diceRoll();
               // afterDiceRollLogic();
                 shouldObserverDiceResult=true;
            }
            diceTimer=0;
            diceIndex++;
            //console.log("DICE INDEX :"+diceIndex);
        }
        else
        {
            diceTimer+=dt;
        }


    }

    function hidePointers()
    {
        redPointer.visible=false;
        bluePointer.visible=false;
        greenPointer.visible=false;
        yellowPointer.visible=false;
        redPointerTextObj.visible=false;
        bluePointerTextObj.visible=false;
        greenPointerTextObj.visible=false;
        yellowPointerTextObj.visible=false;
    }

    function initPointers(){
        redPointer=game.add.sprite(0, 0, 'rp');
        bluePointer=game.add.sprite(0, 0, 'bp');
        greenPointer=game.add.sprite(0, 0, 'gp');
        yellowPointer=game.add.sprite(0, 0, 'yp');
       
        //redPointerTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
       // yellowPointerTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
      //  greenPointerTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });
        //bluePointerTextObj=game.add.text(0,0,'',{ fill: '#ffffff' });


   

       /* redPointerTextObj=game.add.text(0, 0," ",{
            font: "20px Arial",
            fill: "black",
          //  align: "center"
        });

        yellowPointerTextObj=game.add.text(0, 0," ",{
            font: "20px Arial",
            fill: "black",
        //    align: "center"
        });

        greenPointerTextObj=game.add.text(0, 0," ",{
            font: "20px Arial",
            fill: "black",
        //    align: "center"
        });

        bluePointerTextObj=game.add.text(0, 0," ",{
            font: "20px Arial",
            fill: "black",
       //     align: "center"
        });*/

        redPointer.x=30;
        redPointer.y=270;
       

        yellowPointer.x=170;
        yellowPointer.y=25;


        greenPointer.x=30;
        greenPointer.y=25;

        bluePointer.x=170;
        bluePointer.y=270;

        
     /*   redPointerTextObj.x=redPointer.x;
        redPointerTextObj.y=redPointer.y;

        yellowPointerTextObj.x=yellowPointer.x;
        yellowPointerTextObj.y=yellowPointer.y;

        greenPointerTextObj.x=greenPointer.x;
        greenPointerTextObj.y=greenPointer.y;
    
        bluePointerTextObj.x=bluePointer.x;
        bluePointerTextObj.y=bluePointer.y;*/
    
        var xOffset=10;
        var yOffset=13;

        var style = { font: "bold 12px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

        redPointerTextObj = game.add.text(0, 0, "phaser 2.4 text bounds", style);
        //redPointerTextObj .setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        redPointerTextObj .setTextBounds(redPointer.x+xOffset, redPointer.y+yOffset, 10, 10);
        redPointerTextObj.stroke = '#000000';
        redPointerTextObj.strokeThickness = 3;


        yellowPointerTextObj = game.add.text(0, 0, "phaser 2.4 text bounds", style);
        //yellowPointerTextObj .setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        yellowPointerTextObj .setTextBounds(yellowPointer.x+xOffset+5, yellowPointer.y+yOffset-2,  2, 2);
        yellowPointerTextObj.stroke = '#000000';
        yellowPointerTextObj.strokeThickness = 3;

        greenPointerTextObj = game.add.text(0, 0, "phaser 2.4 text bounds", style);
       // greenPointerTextObj .setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        greenPointerTextObj .setTextBounds(greenPointer.x+xOffset+5, greenPointer.y+yOffset-2,  2, 2);
        greenPointerTextObj.stroke = '#000000';
        greenPointerTextObj.strokeThickness = 3;

        bluePointerTextObj = game.add.text(0, 0, "phaser 2.4 text bounds", style);
       // bluePointerTextObj .setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        bluePointerTextObj.setTextBounds(bluePointer.x+xOffset+5, bluePointer.y+yOffset+3, 2, 2);
        bluePointerTextObj.stroke = '#000000';
        bluePointerTextObj.strokeThickness = 3;
    }

    function updatePointers(dt,isAi)
    {

        if(gameOverStatus)
        {   
            hidePointers();
            return;
        }
        var offset=0.25;
        color =0;
        
       /* if(animAngle >= 360)
        animAngle = 0;
        else*/
        animAngle += dt*20;


        //console.log("ANIM ANGLE :"+animAngle);

        if(isAi){
            color=getColorEnemy();
        }else{
            color=getColor();
        }

//console.log("COLOR :"+color);
        if(color==1)
        {
            redPointer.visible=true;
            redPointer.y+= Math.sin(animAngle)*offset;
            redPointerTextObj.visible=true;
            redPointerTextObj.y+= Math.sin(animAngle)*offset;

            //Red
        }
        else if(color==2)
        {
            yellowPointer.visible=true;
            yellowPointer.y+= Math.sin(animAngle)*offset;

            yellowPointerTextObj.visible=true;
            yellowPointerTextObj.y+= Math.sin(animAngle)*offset;
            //Yellow
        }
        else if(color==3)
        {
              greenPointer.visible=true;
              greenPointer.y+= Math.sin(animAngle)*offset;

            greenPointerTextObj.visible=true;
            greenPointerTextObj.y+= Math.sin(animAngle)*offset;
            //Green 
        }
        else if(color==4)
        {
            bluePointer.visible=true;
            bluePointer.y+= Math.sin(animAngle)*offset;

            bluePointerTextObj.visible=true;
            bluePointerTextObj.y+= Math.sin(animAngle)*offset;
            //Blue
        }
     //console.log("ANIM ANGLE :"+animAngle)
      
    }

    function debugbadges(){
        xOffset=0;
        yOffset=6;
        textCur1ObjAI.text="1";
        textCur2ObjAI.text="2";
        textCur3ObjAI.text="3";
        textCur4ObjAI.text="4";

        textCur1ObjAI.x= red1.x+xOffset;
        textCur1ObjAI.y= red1.y-yOffset;


        textCur2ObjAI.x= red2.x+xOffset;
        textCur2ObjAI.y= red2.y-yOffset;

        textCur3ObjAI.x= red3.x+xOffset;
        textCur3ObjAI.y= red3.y-yOffset;

        textCur4ObjAI.x= red4.x+xOffset;
        textCur4ObjAI.y= red4.y-yOffset; 

       // console.log("HERE");
    }

    

    function updateBadges(dt){

        /*color=playerColor;

        if(gameModeType==1)
        {
            if(player2chance)
            {
                color=player2color;
            }
            else{
                color=playerColor;
            }
        }*/
        showBadges();
        color=getColor();
        
       // console.log("INSIDE ");
      /*  if(animAngle >= 360)
        animAngle = 0;
        else*/
        animAngle += dt*10;

        var offset=0.2;
        
        if(canUpdateBadges(getCur1()))
        {
            textCur1Obj.y += Math.sin(animAngle)*offset;
            getNode1().y+= Math.sin(animAngle)*offset;

        } 

        if(canUpdateBadges(getCur2()))
        {
             textCur2Obj.y += Math.sin(animAngle)*offset;
             getNode2().y+= Math.sin(animAngle)*offset;

        }
        if(canUpdateBadges(getCur3()))
        {
             textCur3Obj.y += Math.sin(animAngle)*offset;
             getNode3().y+= Math.sin(animAngle)*offset;
        }
        if( canUpdateBadges(getCur4()))
        {
            textCur4Obj.y += Math.sin(animAngle)*offset; 
            getNode4().y+= Math.sin(animAngle)*offset;
        }

        


    }
 
    function canUpdateBadges(curr)
    {
         if((diceNo<6) &&  (curr <0)) //Element is caged and dice is not six.
           {
              // console.log("1");
                return false;
           }
           else if((diceNo>=6) && (curr <0))  //If dice is six and element is caged.
            {
             //   console.log("2");
                 return true;
            }
        else if((curr>=0) &&  ((curr+diceNo)>56))  //If element is out and can not reach it's destination.
            {
              //  console.log("3");
                return false;
            }
        else if((curr>=0) &&  ((curr+diceNo)<=56))  //If element is out and can  reach it's destination.
             {
              //  console.log("4");
                 return true;
            }
         else 
            {
              //  console.log("5");
                 return false;
            }

            
         

    }


    var aiDifficultyMode=2;

    function AIsafeSpotFactor(difficultyMode)
    {
        if(difficultyMode==0)
        return 0;
        else if(difficultyMode==1)
        return 0;
        else if(difficultyMode==2)
        return 0; 
    }

    function AItokenOutFactor(difficultyMode)
    {
        if(difficultyMode==0)
        return 0;
        else if(difficultyMode==1)
        return 0;
        else if(difficultyMode==2)
        return 0; 
    }

    function AIkillFactor(difficultyMode)
    {
        if(difficultyMode==0)
        return 0;
        else if(difficultyMode==1)
        return 0;
        else if(difficultyMode==2)
        return 0; 
    }

    var startSix=0;
    
    var aiSafeSpotCounter=0;
    var aitokenOutCounter=0;
    var aiKillCounter=0;
    
    function firstSixFactor()
    {
        difficultyMode=aiDifficultyMode;
        if(difficultyMode==0)
        return 2;
        else if(difficultyMode==1)
        return 3;
        else if(difficultyMode==2)
        return 4; 
    }

    
    function getReqdVal(isAi)
    {
        var arr=[];
        var reqd=6;
        if(isAi){
            arr=[getEnemyCur1(),getEnemyCur2(),getEnemyCur3(),getEnemyCur4()];
        }
        else{
            arr=[getCur1(),getCur2(),getCur3(),getCur4()];
        }

        for(var i=0;arr.length;i++)
        {
           // arr[i]
            reqd= 56 - arr[i];
            
            
             
            if(reqd>0)
             {
                if(reqd>=6)
                reqd=6;
                break;
             }
             
        }

        return reqd;


    }


    //Events : Wins , Ad-Displayed , Mins for bucket (1,5,10,15,20,30), Restart(AI or 2P) , GameOver(AI or 2P), MidWay End (AI or 2P)(LOGIC:IF GAMESTATUS AND CLOSED).




    var animAngle=0;
    function animateMarker(_set, _index, dt)
    {
      /*  if(animAngle >= 360)
        animAngle = 0;
        else*/
        animAngle += dt*10;

        animVal1 = Math.sin(animAngle)*0.09;
        animVal2 = Math.sin(animAngle)*0.09;
        animVal3 = Math.sin(animAngle)*0.09;
        animVal4 = Math.sin(animAngle)*0.09;

        if(_set == 1)//RED
        {
            if(_index == 1)
            {
                red1.y += animVal1;
            }
            if(_index == 2)
            {
                red2.y += animVal2;
            }
            if(_index == 3)
            {
                red3.y += animVal3;
            }
            if(_index == 4)
            {
                red4.y += animVal4;
            }
        }
        if(_set == 2)//YELLOW
        {
            if(_index == 1)
            {
                yellow1.y += animVal1;
            }
            if(_index == 2)
            {
                yellow2.y += animVal2;
            }
            if(_index == 3)
            {
                yellow3.y += animVal3;
            }
            if(_index == 4)
            {
                yellow4.y += animVal4;
            }
            
        }
        if(_set == 3)//GREEN
        {
            if(_index == 1)
            {
                green1.y += animVal1;
            }
            if(_index == 2)
            {
                green2.y += animVal2;
            }
            if(_index == 3)
            {
                green3.y += animVal3;
            }
            if(_index == 4)
            {
                green4.y += animVal4;
            }
        }
        if(_set == 4)//BLUE
        {
            if(_index == 1)
            {
                blue1.y += animVal1;
            }
            if(_index == 2)
            {
                blue2.y += animVal2;
            }
            if(_index == 3)
            {
                blue3.y += animVal3;
            }
            if(_index == 4)
            {
                blue4.y += animVal4;
            }
        }
    } 
    function hideBG()
    {
        redFlashBG.visible=false;
        yellowFlashBG.visible=false;
        greenFlashBG.visible=false;
        blueFlashBG.visible=false;
        //console.log("HIDE BG 3");
    }

    var animColor=0;
    var animColorAngle=0;
 

    function animateBG (color, dt)
    {
        if(animateBGStatus==false)
        {

         //   console.log("HIDE BG 1");
         //textDiceObj.text=diceNo;
         hideBG();
         return; 
        }
        //textDiceObj.text=" ";
        var _val = 150;

        if(color == 1)
        {
        
            if(redFlashBG.visible==false)
             redFlashBG.visible=true;

           

             redFlashBG.tint=rgbToHex(_val+animColor,0,0); 
              

        }
        if(color == 2)
        {
            if(yellowFlashBG.visible==false)
            yellowFlashBG.visible=true;
      
    
          yellowFlashBG.tint=rgbToHex(_val+animColor,_val+animColor,0);

        }
        if(color == 3)
        {
            if(greenFlashBG.visible==false)
            greenFlashBG.visible=true;
          
             greenFlashBG.tint=rgbToHex (0,_val+animColor,0);
        }
        if(color == 4)
        {
            if(blueFlashBG.visible==false)
            blueFlashBG.visible=true;
          
            blueFlashBG.tint=rgbToHex(0,0,_val+animColor);
        }
 
       

        /*if(animColorAngle >= 360)
        animColorAngle = 0;
        else*/
        animColorAngle += dt*5;

        animColor += Math.sin(animColorAngle)*3.2; 

       //console.log(""+animColor);
    } 
 
    var animateBGStatus;

    function checkForLastTurns(isAi)
    {
        var allPlayerToken=[getCur1(),getCur2(),getCur3(),getCur4()];
        var allAiToken=[getEnemyCur1(),getEnemyCur2(),getEnemyCur3(),getEnemyCur4()];
        var allToken=[];

        if(isAi)
        {
            allToken=allAiToken;
        }
        else{
            allToken=allPlayerToken;
        }

        var canPlayThisTurn=false;

        for(var i=0;i<allToken.length;i++)
        {
           // console.log("VALUE OF I :"+allToken[i]+"::"+"dice NO :"+diceNo);
            if(allToken[i]<0 && diceNo>=6)
            {
                canPlayThisTurn=true;
                break;
            }

            if((allToken[i]) > -1 && (allToken[i]+diceNo) <= 56)
            {
                canPlayThisTurn=true;
                break;
            }
        }



        if(!canPlayThisTurn)
        {
            if(isAi)
            {
                idleMoveCounterAI++;
            }else{
                idleMoveCounter++;
            }
           // console.log("Not repeat move");
            sixCounter=0;
            endMove(isAi);
        }

        // console.log("CAN PLAY THIS TURN :"+canPlayThisTurn);
        return canPlayThisTurn;

    }


    var diceResultObserverTime=0.8;
    var diceResultTimer=0;
    var shouldObserverDiceResult=false;

    function diceResultObservance(dt)
    {
        if(diceResultTimer>=diceResultObserverTime)
        {

            diceResultTimer=0;
            shouldObserverDiceResult=false;
            afterDiceRollLogic();
        }
        else
        {
            diceResultTimer+=dt;
        }
    }


    function movePlayer(color,tokenNo,isAi)
    {
        changeAudioSrc(0);
        animateBGStatus=false;
        hideBG();
        hideBadges();
        
         tempCurr=0;
        if(color==1) //Red
        {
            switch(tokenNo)
            {
                case 1:
                
                red1curr+=1;
                red1.x=redNodeX[red1curr]-8;
                red1.y=redNodeY[red1curr]-14;
                tempCurr=red1curr;
                
                break;
    
            case 2:
                 red2curr+=1;
                 red2.x=redNodeX[red2curr]-8;
                 red2.y=redNodeY[red2curr]-14;
                 tempCurr=red2curr;  
             break;

             case 3:
              red3curr+=1;
                 red3.x=redNodeX[red3curr]-8;
                 red3.y=redNodeY[red3curr]-14;
                 tempCurr=red3curr;
            break;

             case 4:
                  red4curr+=1;
                  red4.x=redNodeX[red4curr]-8;
                  red4.y=redNodeY[red4curr]-14;
                  tempCurr=red4curr;
             break;

             default:
             break;     
            }

        }

        if(color==2) //Yellow
        {
            switch(tokenNo)
            {
                case 1:
                
                yellow1curr+=1;
                yellow1.x=yellowNodeX[yellow1curr]-8;
                yellow1.y=yellowNodeY[yellow1curr]-14;
                tempCurr=yellow1curr;
             
                break;
    
            case 2:
                 yellow2curr+=1;
                yellow2.x= yellowNodeX[yellow2curr]-8;
                yellow2.y=yellowNodeY[yellow2curr]-14;
                tempCurr=yellow2curr;
            
             break;
             case 3:
             yellow3curr+=1;
             yellow3.x=yellowNodeX[yellow3curr]-8;
             yellow3.y=yellowNodeY[yellow3curr]-14;
             tempCurr=yellow3curr;
            


             break;
             case 4:
             yellow4curr+=1;
             yellow4.x=yellowNodeX[yellow4curr]-8;
             yellow4.y=yellowNodeY[yellow4curr]-14;
             tempCurr=yellow4curr;
             break;
             default:
             break;     
            }

        }
        if(color==3) //GREEN
        {
            switch(tokenNo)
            {
                case 1:
                
                green1curr+=1;
                green1.x=greenNodeX[green1curr]-8;
                green1.y=greenNodeY[green1curr]-14;
                tempCurr=green1curr;
              
                break;
    
            case 2:
            green2curr+=1;
                green2.x= greenNodeX[green2curr]-8;
                green2.y=greenNodeY[green2curr]-14;
                tempCurr=green2curr;
              
             break;
             case 3:
             green3curr+=1;
             green3.x=greenNodeX[green3curr]-8;
             green3.y=greenNodeY[green3curr]-14;
             tempCurr=green3curr;
        
             break;
             case 4:
             green4curr+=1;
             green4.x=greenNodeX[green4curr]-8;
             green4.y=greenNodeY[green4curr]-14;
             tempCurr=green4curr;
             break;
             default:
             break;     
            }

        }
        if(color==4) //BLUE
        {
       //     console.log("ANIMATING BLUE : "+tokenNo);
            switch(tokenNo)
            {
                case 1:
                
                blue1curr+=1;
                blue1.x=blueNodeX[blue1curr]-8;
                blue1.y=blueNodeY[blue1curr]-14;
                tempCurr=blue1curr;
               
                break;
    
            case 2:
            blue2curr+=1;
                blue2.x= blueNodeX[blue2curr]-8;
                blue2.y=blueNodeY[blue2curr]-14;
                tempCurr=blue2curr;
                
             break;

             case 3:
             blue3curr+=1;
             blue3.x=blueNodeX[blue3curr]-8;
             blue3.y=blueNodeY[blue3curr]-14;
             tempCurr=blue3curr;
              


             break;

             case 4:
             blue4curr+=1;
             blue4.x=blueNodeX[blue4curr]-8;
             blue4.y=blueNodeY[blue4curr]-14;
             tempCurr=blue4curr;
             break;



             default:
             break;     
            }

        }

          calOffsets();

      //  console.log("TEMP CURR :"+tempCurr + "::"+"TARGET :"+targetPlayerEnd);

        if( tempCurr>=targetPlayerEnd)
        {

          moveEndedStatus=true;
          checkForKill(color,tokenNo);
          isKilledByAi=isAi;
        }
        if(tempCurr>=56)
        {
            changeAudioSrc(1);
            

            var tokens=[getCur1(),getCur2(),getCur3(),getCur4()];
            var ctr=0;
            for(var i=0;i<3;i++)
            {
                if(tokens[i]>=56)
                {
                    ctr++;
                }
            }
            if(ctr>=3)
            {
               
            }else{
                if(tokenHomeInShowAds)
                {
                    showAds();
                    tokenHomeInShowAds=true;
                }
            }

            repeatMove=true;
        }
      
       

//        console.log("Kill Color :"+  killColor + "::"+"Kill token :"+ killTokenNo);
       // console.log("Move Ended Status :"+moveEndedStatus + "::"+"Animate kill status :"+animateKillStatus);

        if(moveEndedStatus==true  && animateKillStatus==false)
        {
            sixCounter=0;

            // if(repeatMove)
            // {
            //     if(gameModeType==0)
            //     {
            //         isAi=!isAi;//Doing so will get the sixer's chance back.
            //         repeatColor();

            //     }else if(gameModeType==1){
            //         repeatColor();
            //     }
            //     else if(gameModeType==2){
            //         repeatColor();
            //     }
            //     else if(gameModeType==3){
            //         repeatColor();
            //     }
            //     else if(gameModeType==4){
            //         repeatColor();
            //     }
            //     repeatMove=false;
            //    // console.log("GIVE ANOTHER CHANCE");
            // }
            // else{
            //   //  console.log("Not repeat move");
            //     sixCounter=0;
            // }
            //console.log("IS AI :"+isAi);
            //console.log("MOVE HAS ENDED");
           //  if(isAi)
           // console.log("STEP 5");
            
            endMove(isAi);
            
            moveEndedStatus=false;
            
        }

    }



    var animateKillStatus=false;
    
  //  var triggerKillStatus=false;
    

    var killColor=-1;
    var killTokenNo=-1;
    var isKilledByAi=false;

    var repeatMove=false;

    function animateKill()
    {
        //console.log("KILLCOLOR :"+killColor);
        var color=killColor;
        var tokenNo=killTokenNo;
         
      //   animateKillStatus=true;
         hideBG();
         tempCurr=0;
         //console.log("COLOR  : "+color+"::"+"Token no"+killTokenNo);
        if(color==1) //Red
        {
            switch(tokenNo)
            {
                case 1:
                
                red1curr-=1;
          
                tempCurr=red1curr;

                if(tempCurr>=0)
                {    
                    red1.x=redNodeX[red1curr]-8;
                    red1.y=redNodeY[red1curr]-14;

                }
                else
                {

                    red1.x=defaultPosRed1x;
                    red1.y=defaultPosRed1y;
                    red1curr=-1;
                    animateKillStatus=false;
                }
                break;
    
            case 2:
                 red2curr-=1;
         
                 tempCurr=red2curr;  

                 if(tempCurr>=0){

                    red2.x=redNodeX[red2curr]-8;
                    red2.y=redNodeY[red2curr]-14;

                 }else{

                    red2.x=defaultPosRed2x;
                    red2.y=defaultPosRed2y;
                    red2curr=-1;
                    animateKillStatus=false;
                 }


             break;

             case 3:
                 red3curr-=1;
           
                 tempCurr=red3curr;

                 if(tempCurr>=0)
                 {
                    red3.x=redNodeX[red3curr]-8;
                    red3.y=redNodeY[red3curr]-14;

                  
                 }else{
                    red3.x=defaultPosRed3x;
                    red3.y=defaultPosRed3y;
                    red3curr=-1;
                    animateKillStatus=false;
                 }

            break;

             case 4:
                  red4curr-=1;
                
                  tempCurr=red4curr;

                  if(tempCurr>=0){

                    red4.x=redNodeX[red4curr]-8;
                    red4.y=redNodeY[red4curr]-14;


                 }else{

                    red4.x=defaultPosRed4x;
                    red4.y=defaultPosRed4y;
                    red4curr=-1;
                   animateKillStatus=false;
                 }

             break;

             default:
             break;     
            }

        }

        if(color==2) //Yellow
        {
            switch(tokenNo)
            {
                case 1:
                
                yellow1curr-=1;
               
                tempCurr=yellow1curr;


                if(tempCurr>=0)
                {
                    yellow1.x=yellowNodeX[yellow1curr]-8;
                    yellow1.y=yellowNodeY[yellow1curr]-14;
                 
                }
                else
                {
                    yellow1.x=defaultPosYellow1x;
                     yellow1.y=defaultPosYellow1y;
                     animateKillStatus=false;
                     yellow1curr=-1;
                }
             
                break;
    
            case 2:
                yellow2curr-=1;
                tempCurr=yellow2curr;
                if(tempCurr>=0)
                {
                    yellow2.x= yellowNodeX[yellow2curr]-8;
                    yellow2.y=yellowNodeY[yellow2curr]-14;
                  
                }
                else
                {
                    yellow2.x=defaultPosYellow2x;
                    yellow2.y=defaultPosYellow2y;
                    yellow2curr=-1;
                    animateKillStatus=false;
                }
            
             break;
             case 3:
                  yellow3curr-=1;
     
                 tempCurr=yellow3curr;
                 if(tempCurr>=0){
                    yellow3.x=yellowNodeX[yellow3curr]-8;
                    yellow3.y=yellowNodeY[yellow3curr]-14;
                 }else{

                    yellow3.x=defaultPosYellow3x;
                    yellow3.y=defaultPosYellow3y;
                    yellow3curr=-1;
                    animateKillStatus=false;
                 }


             break;
             case 4:
                  yellow4curr-=1;

                 tempCurr=yellow4curr;
                 if(tempCurr>=0){

                    yellow4.x=yellowNodeX[yellow4curr]-8;
                    yellow4.y=yellowNodeY[yellow4curr]-14;

                 
                 }else{
                    yellow4.x=defaultPosYellow4x;
                    yellow4.y=defaultPosYellow4y;
                    yellow4curr=-1;
                    animateKillStatus=false;
                 }
             break;
             default:
             break;     
            }

        }
        if(color==3) //GREEN
        {
            switch(tokenNo)
            {
                case 1:
                
                green1curr-=1;

                
                tempCurr=green1curr;

                if(tempCurr>=0)
                {
                    green1.x=greenNodeX[green1curr]-8;
                    green1.y=greenNodeY[green1curr]-14;
                    
                }else{
                    green1.x=defaultPosGreen1x;
                    green1.y=defaultPosGreen1y;
                    green1curr=-1;
                    animateKillStatus=false;
                }

                break;
    
            case 2:
                 green2curr-=1;
               
                tempCurr=green2curr;
                if(tempCurr>=0){
                    green2.x= greenNodeX[green2curr]-8;
                green2.y=greenNodeY[green2curr]-14;
                }else{
                    green2.x=defaultPosGreen2x;
                    green2.y=defaultPosGreen2y;
                    green2curr=-1;
                    animateKillStatus=false;
                }
              
             break;
             case 3:
                 green3curr-=1;
            
                 tempCurr=green3curr;
                 if(tempCurr>=0){
               
                    green3.x=greenNodeX[green3curr]-8;
                    green3.y=greenNodeY[green3curr]-14;
                 }else{
                    green3.x=defaultPosGreen3x;
                    green3.y=defaultPosGreen3y;
                    green3curr=-1;
                    animateKillStatus=false;
                 }
        
             break;
             case 4:
                   green4curr-=1;

                tempCurr=green4curr;
                if(tempCurr>=0)
                {
                    green4.x=greenNodeX[green4curr]-8;
                    green4.y=greenNodeY[green4curr]-14;
                   
                }else{
                    green4.x=defaultPosGreen4x;
                    green4.y=defaultPosGreen4y;
                    green4curr=-1;
                    animateKillStatus=false;
                }
             break;
             default:
             break;     
            }

        }
        if(color==4) //BLUE
        {
            switch(tokenNo)
            {
                case 1:
                
                blue1curr-=1;
              
                tempCurr=blue1curr;
                if(tempCurr>=0){
                   
                    blue1.x=blueNodeX[blue1curr]-8;
                    blue1.y=blueNodeY[blue1curr]-14;
                }else{
                    blue1.x=defaultPosBlue1x;
                    blue1.y=defaultPosBlue1y;
                    blue1curr=-1;
                    animateKillStatus=false;
                }
                break;
    
            case 2:
                blue2curr-=1;
                
                tempCurr=blue2curr;
                if(tempCurr>=0){
                    blue2.x= blueNodeX[blue2curr]-8;
                    blue2.y=blueNodeY[blue2curr]-14;
                   
                }else{
                    blue2.x=defaultPosBlue2x;
                    blue2.y=defaultPosBlue2y;
                    blue2curr=-1;
                    animateKillStatus=false;
                }
                
             break;

             case 3:
                 blue3curr-=1;
                
                 tempCurr=blue3curr;
                 if(tempCurr>=0){

                    blue3.x=blueNodeX[blue3curr]-8;
                    blue3.y=blueNodeY[blue3curr]-14;
                    
                 }else{
                    blue3.x=defaultPosBlue3x;
                    blue3.y=defaultPosBlue3y;
                    blue3curr=-1;
                    animateKillStatus=false;
                 }


             break;

             case 4:
             blue4curr-=1;
             
             tempCurr=blue4curr;
             if(tempCurr>=0){
                blue4.x=blueNodeX[blue4curr]-8;
                blue4.y=blueNodeY[blue4curr]-14;
                
             }else{
                blue4.x=defaultPosBlue4x;
                blue4.y=defaultPosBlue4y;
                blue4curr=-1;
                animateKillStatus=false;
             }
             break;



             default:
             break;     
            }

        }

        if(tempCurr<0)
        {       
          /*  console.log("DEBUG HERE");
            repeatMove=true;*/
            // if(repeatMove)
            // {
            //    repeatMove=false; //If Player got 6 and kills other token,it would give a chance to other player,instead of Player who killed.
            //    // console.log("REPEAT MOVE IN KILL");
            // }else{
           
            //     repeatMove=true;

            // }
            repeatMove=true;
            sixCounter=0;
          //  repeatColor();

            endMove(!isKilledByAi);//Doing so will get the killers's chance back.
        } 


        calOffsets();

    }

     
 


  


    function forKillParam(color,i,curr)
    {
        if(color==1)
        return ((redNodeX[curr]==yellowNodeX[i] && redNodeY[curr]==yellowNodeY[i]) || (redNodeX[curr]==greenNodeX[i] && redNodeY[curr]==greenNodeY[i]) || (redNodeX[curr]==blueNodeX[i] && redNodeY[curr]==blueNodeY[i])  );
        else if(color==2)
        return ((yellowNodeX[curr]==redNodeX[i] && yellowNodeY[curr]==redNodeY[i]) || (yellowNodeX[curr]==greenNodeX[i] && yellowNodeY[curr]==greenNodeY[i]) || (yellowNodeX[curr]==blueNodeX[i] && yellowNodeY[curr]==blueNodeY[i]) );
        else if(color==3)
        return ((greenNodeX[curr]==redNodeX[i] && greenNodeY[curr]==redNodeY[i]) || (greenNodeX[curr]==blueNodeX[i] && greenNodeY[curr]==blueNodeY[i]) || (greenNodeX[curr]==yellowNodeX[i] && greenNodeY[curr]==yellowNodeY[i])  );
        else if(color==4)
        return ((blueNodeX[curr]==redNodeX[i] && blueNodeY[curr]==redNodeY[i]) || (blueNodeX[curr]==greenNodeX[i] && blueNodeY[curr]==greenNodeY[i]) || (blueNodeX[curr]==yellowNodeX[i] && blueNodeY[curr]==yellowNodeY[i])  );

    }

    function checkForKillingOthers(color,curr,aiCal=false)
    {

        //if(aiCal)
        //console.log("IS AI CAL NEXT MOVE :"+aiCal);

       // var ogCurr=0;
        if(aiCal){
         //    console.log("CURR :"+curr);
         //   ogCurr=curr;
            curr=curr+diceNo;
        }

        var arrX=[];
        var arrY=[];
        var canKill=true; 
  

        if(color==1)
        {
             arrX=redNodeX;
             arrY=redNodeY;
        }
        else if(color==2)
        {
            arrX=yellowNodeX;
            arrY=yellowNodeY;
        }
        else if(color==3)
        {
            arrX=greenNodeX;
            arrY=greenNodeY;
        }
        else if(color==4)
        {
            arrX=blueNodeX;
            arrY=blueNodeY;
        }

      


        for(var j=0;j<safePosX.length;j++)
        {
            if(arrX[curr]==safePosX[j] && arrY[curr]==safePosY[j] )
            {
                canKill=false;
                break;
            }
        }

        if(canKill==true)
        {
           // return;
        


        for(var i=0;i<yellowNodeX.length;i++)
        {
            if(forKillParam(color,i,curr))
             {
              var anti=[];
              var antiNodeX=[];
              var antiNodeY=[];

              var allBlue=[blue1curr,blue2curr,blue3curr,blue4curr];
              var allGreen=[green1curr,green2curr,green3curr,green4curr];
              var allYellow=[yellow1curr,yellow2curr,yellow3curr,yellow4curr];
              var allRed=[red1curr,red2curr,red3curr,red4curr];
                        
            if((arrX[curr]==yellowNodeX[i] && arrY[curr]==yellowNodeY[i]) && (color!=2))
            {
             //   console.log("KILLING YELLOW");
                anti=allYellow;
                antiNodeX=yellowNodeX;
                antiNodeY=yellowNodeY;
            }
            else if((arrX[curr]==greenNodeX[i] && arrY[curr]==greenNodeY[i]) && (color!=3))
            {
               // console.log("KILLING GREEN");
                anti=allGreen;
                antiNodeX=greenNodeX;
                antiNodeY=greenNodeY;

            }
            else if((arrX[curr]==blueNodeX[i] && arrY[curr]==blueNodeY[i]) && (color!=4))
            {
                //console.log("KILLING BLUE");
                anti=allBlue;
                antiNodeX=blueNodeX;
                antiNodeY=blueNodeY;
            }
            else if((arrX[curr]==redNodeX[i] && arrY[curr]==redNodeY[i]) && (color!=1))
            {
               // console.log("KILLING RED");
                anti=allRed;
                antiNodeX=redNodeX;
                antiNodeY=redNodeY;
            }

            for(var k=0;k<anti.length;k++)
            {
                if(anti[k]<0)
                {
                    continue;
                }

               

                 
                if( antiNodeX[anti[k]] == arrX[curr] && antiNodeY[anti[k]]== arrY[curr] )
                {
                   /* if(aiCal)
                    {
                        aiThinkKillToken=k+1;
                        aiCanKill=true;
                        
                    //    console.log("AI CAN KILL :"+aiCanKill+"::"+"aiThinkKillToken :"+aiThinkKillToken );
                    }
                    else*/
                    {
                     //Kill 
                     if(antiNodeX==redNodeX)
                     killColor=1;
                     else if(antiNodeX==yellowNodeX)
                     killColor=2;
                     else if(antiNodeX==greenNodeX)
                     killColor=3;
                     else if(antiNodeX==blueNodeX)
                     killColor=4;

                    // console.log("killColor :"+killColor);
                     killTokenNo= k+1; 
                     animateKillStatus=true;
                     changeAudioSrc(2);
                    //  if(!tokenKillShowAds)
                     {
                        showAds();
                        // tokenKillShowAds=true;
                     }
                     setChanceStatus(false);
                     setAIChanceStatus(false);
                    }       
                }
             }       
            }
         }
        }

 

    }



    function checkForEnemyThinkKill(color,curr)
    {
   
        var AIthinkCanKill=false;
        curr=curr+diceNo;
      

       var arrX=[];
       var arrY=[];
       var canKill=true; 
 

       if(color==1)
       {
            arrX=redNodeX;
            arrY=redNodeY;
         }else if(color==2){
           arrX=yellowNodeX;
           arrY=yellowNodeY;
        }else if(color==3){
           arrX=greenNodeX;
           arrY=greenNodeY;
        }else if(color==4){
           arrX=blueNodeX;
           arrY=blueNodeY;
        }

     


       for(var j=0;j<safePosX.length;j++)
       {
           if(arrX[curr]==safePosX[j] && arrY[curr]==safePosY[j] )
           {
               canKill=false;
               break;
           }
       }

       if(canKill==true)
       {
        megaloop:
       for(var i=0;i<yellowNodeX.length;i++)
       {
           
           if(forKillParam(color,i,curr))
            {
             var anti=[];
             var antiNodeX=[];
             var antiNodeY=[];

             var allBlue=[blue1curr,blue2curr,blue3curr,blue4curr];
             var allGreen=[green1curr,green2curr,green3curr,green4curr];
             var allYellow=[yellow1curr,yellow2curr,yellow3curr,yellow4curr];
             var allRed=[red1curr,red2curr,red3curr,red4curr];
                       
           if((arrX[curr]==yellowNodeX[i] && arrY[curr]==yellowNodeY[i]) && (color!=2))
           {
               anti=allYellow;
               antiNodeX=yellowNodeX;
               antiNodeY=yellowNodeY;
           }
           else if((arrX[curr]==greenNodeX[i] && arrY[curr]==greenNodeY[i]) && (color!=3))
           {

               anti=allGreen;
               antiNodeX=greenNodeX;
               antiNodeY=greenNodeY;

           }
           else if((arrX[curr]==blueNodeX[i] && arrY[curr]==blueNodeY[i]) && (color!=4))
           {

               anti=allBlue;
               antiNodeX=blueNodeX;
               antiNodeY=blueNodeY;
           }
           else if((arrX[curr]==redNodeX[i] && arrY[curr]==redNodeY[i]) && (color!=1))
           {
               anti=allRed;
               antiNodeX=redNodeX;
               antiNodeY=redNodeY;
           }

           for(var k=0;k<anti.length;k++)
           {
                
                if( antiNodeX[anti[k]] == arrX[curr] && antiNodeY[anti[k]]== arrY[curr] )
                {

                    if(anti[k]<0)
                    {
                        continue;
                    }
                    if(antiNodeX==redNodeX)
                    killColor=1;
                    else if(antiNodeX==yellowNodeX)
                    killColor=2;
                    else if(antiNodeX==greenNodeX)
                    killColor=3;
                    else if(antiNodeX==blueNodeX)
                    killColor=4;

                  AIthinkCanKill = true;  
                  break megaloop;   
                }
           }       
           }
        }
        }

         return AIthinkCanKill;

    }




   // var aiCanKill=false;
  //  var aiThinkKillToken=0;
     

    function checkForKill(color,tokenNo)
    {   
     //  console.log("COLOR :"+color);
        if(color==1) //Red
        {
            switch(tokenNo)
            {
                case 1:
                
           
                 checkForKillingOthers(1,red1curr);
                
                break;
    
            case 2:
           
                 checkForKillingOthers(1,red2curr);
             break;

             case 3:
            
              checkForKillingOthers(1,red3curr);



             break;

             case 4:
               
                   checkForKillingOthers(1,red4curr);

             break;

             default:
             break;     
            }

        }

        if(color==2) //Yellow
        {
            switch(tokenNo)
            {
                case 1:
                
              
                 checkForKillingOthers(2,yellow1curr);
             
                break;
    
            case 2:
       
                 checkForKillingOthers(2,yellow2curr);
             break;
             case 3:
   
              checkForKillingOthers(2,yellow3curr);



             break;

             case 4:
             checkForKillingOthers(2,yellow4curr);
              break;
             default:
             break;     
            }

        }
        if(color==3) //GREEN
        {
            switch(tokenNo)
            {
                case 1:
                
                checkForKillingOthers(3,green1curr);
               
                break;
    
            case 2:
                checkForKillingOthers(3,green2curr);

              break;
             case 3:
             checkForKillingOthers(3,green3curr);

              break;
             case 4:
             checkForKillingOthers(3,green4curr);

              break;
             default:
             break;     
            }

        }
        if(color==4) //BLUE
        {
            switch(tokenNo)
            {
                case 1:
                
                checkForKillingOthers(4,blue1curr);

                 break;
    
            case 2:

            checkForKillingOthers(4,blue2curr);

                 
             break;

             case 3:
      
             checkForKillingOthers(4,blue3curr);

 
             break;

             case 4:
             checkForKillingOthers(4,blue4curr);

              break;



             default:
             break;     
            }

        }

    }
    

    function randomiser(min,max){
       return Math.floor(Math.random() * (max - min + min)) + min;
    }

    var sixInChances=4;
    
    var chanceCounter=0;
    var chanceCounter2=0;
    var chanceCounter3=0;
    var chanceCounter4=0;

    var aiChanceCounter=0;
    
    var idleMoveCounter=0;
    var idleMoveCounter2=0;
    var idleMoveCounter3=0;
    var idleMoveCounter4=0;

    var idleMoveCounterAI=0;

  

    function changeDiceColor(color)
    {
        redDice1.visible=false;
        redDice2.visible=false;
        redDice3.visible=false;
        redDiceBase.visible=false;

        yellowDice1.visible=false;
        yellowDice2.visible=false;
        yellowDice3.visible=false;
        yellowDiceBase.visible=false;

        greenDice1.visible=false;
        greenDice2.visible=false;
        greenDice3.visible=false;
        greenDiceBase.visible=false;

        blueDice1.visible=false;
        blueDice2.visible=false;
        blueDice3.visible=false;
        blueDiceBase.visible=false;



        if(color==1)
        {
           // console.log("CHANGE DICE COLOR TO RED");
            dice1=redDice1;
            dice2=redDice2;
            dice3=redDice3;
            diceBase=redDiceBase;
          
        }
        if(color==2)
        {
          //  console.log("CHANGE DICE COLOR TO YELLOW");
             dice1=yellowDice1;
            dice2=yellowDice2;
            dice3=yellowDice3;
            diceBase=yellowDiceBase;
        }
        if(color==3)
        {
            //console.log("CHANGE DICE COLOR TO GREEN");
            dice1=greenDice1;
            dice2=greenDice2;
            dice3=greenDice3;
            diceBase=greenDiceBase;
        }
        if(color==4)
        {
            //console.log("CHANGE DICE COLOR TO BLUE");
            dice1=blueDice1;
            dice2=blueDice2;
            dice3=blueDice3;
            diceBase=blueDiceBase;
        }
        diceBase.visible=true;
    }
    
    var debugcounter=0;
    function diceRoll(isAi)
    {

       
        var baseSixes=[1,2,3,4,5,6,6];
     


        var oneOut=[1,2,3,4,5,6];
        var twoOut=[1,2,3,4,5,6];
        var threeOut=[1,2,3,4,5,6];
        var fourOut=[1,2,3,4,5,6];
        
     //   isAi=chanceAIStatus;
     isAi=getAIChanceStatus();
    //    console.log("IS AI :"+getAIChanceStatus()+"::"+"IS PLAYER :"+getChanceStatus());
        hidePointers();
        
        //56 is home run.
    //    var arrDebug=[1,6,56,6,56,6,56,6,56,1,6,56,6,6,56,1,6,27,1,6,1,1,1,1,1];
    //     // var arrDebug=[6,5,6,6,25,6,1,1,1,6,6,1,6,56,1,6,27,1,6,1,1,1,1,1];

    //     // var arrDebug=[6,6,6,6,56,56,56,1,6,1,55,6,56,1,6,27,1,6,1,1,1,1,1];

    //     diceNo=arrDebug[debugcounter]; 
    //     debugcounter++;
    //     resetDiceSprites();
    //     if(diceNo==1)
    //     {
    //         diceDot1.visible=true;
    //     }
    //     else if(diceNo==2)
    //     {
    //         diceDot2.visible=true;
    //     }
    //     else if(diceNo==3)
    //     {
    //         diceDot3.visible=true;
    //     }
    //     else if(diceNo==4)
    //     {
    //         diceDot4.visible=true;
    //     }
    //     else if(diceNo==5)
    //     {
    //         diceDot5.visible=true;
    //     }
    //     else if(diceNo==6)
    //     {
    //         diceDot6.visible=true;
    //     }
    //     if(diceNo>=6)
    //     {
    //         changeAudioSrc(5);
    //         repeatMove=true;
    //     }
    //     return;         
  
       /* var aiDebug=[6,6,24,2,51,5,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

 
        var playerDebug=[6,6,1,6,6,6,56,56,56,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
        var player2Debug=[6,1,53,6,5,2,2,2,1,2,3,2,3,2,3,2,3,2,1,4];
        

       if(isAi)
       {
            diceNo=aiDebug[aiChanceCounter];
            aiChanceCounter++;
            textDiceObj.text="AI :" +diceNo;
        }
        else
        { 
            if(colorCounter==0)
            { 
                diceNo=playerDebug[chanceCounter];
            }
            else if(colorCounter==1){
                diceNo=player2Debug[chanceCounter2];
            }
         

           
            if(colorCounter==0)
            { 
                chanceCounter++;
               textDiceObj.text="1P :" +diceNo;
             }
             else if(colorCounter==1)
            { 
                chanceCounter2++;
               textDiceObj.text="2P :" +diceNo;
            }  
        }


        if(diceNo>=6)
        {
            changeAudioSrc(5);
            repeatMove=true;
        }
        return;      */
 
      
 

        
 


        //Check for no of tokens which are out. 
        //depending on that hit a random on arrays.
        var tempChanceCounter=0;
        var allTokens=[getCur1(),getCur2(),getCur3(),getCur4()];
        var enemyTokens=[getEnemyCur1(),getEnemyCur2(),getEnemyCur3(),getEnemyCur4()];

        if(isAi)
        allTokens=enemyTokens;
                
      var outTokens=0;
        for(var i=0;i<allTokens.length;i++){
            if(allTokens[i]>-1)
            outTokens++;
        }
        var arr=[];
        if(outTokens<=0)
        {
            //console.log("SIXES 3");
            arr=baseSixes;
        }else if(outTokens==1)
        {
            //console.log("SIXES 2");

            arr=oneOut;
        }else if(outTokens==2){
            //console.log("SIXES 2");
            arr=twoOut;
        }else if(outTokens==3){
            //console.log("SIXES 2");
            arr=threeOut;
        }else if(outTokens==4){
           // console.log("SIXES 2");
            arr=fourOut;
        }

        if(isAi)
        {
            aiChanceCounter= tempChanceCounter;
             idleCounter=idleMoveCounterAI;
         }else{
            if(gameModeType==0){
                chanceCounter= tempChanceCounter;
 //               idleMoveCounter= idleCounter;
                idleCounter=idleMoveCounter;
            }
            else if(gameModeType==1)
            {
                if(colorCounter==0)
                {
                    idleCounter=idleMoveCounter;
                    chanceCounter= tempChanceCounter;
                }else if(colorCounter==1){
                    idleCounter=idleMoveCounter2;
                    chanceCounter2= tempChanceCounter;
                }
            }
            else if(gameModeType==2)
            {
                if(colorCounter==0)
                {
                    idleCounter=idleMoveCounter;
                    chanceCounter= tempChanceCounter;
                }else if(colorCounter==1){
                    idleCounter=idleMoveCounter2;
                    chanceCounter2= tempChanceCounter;
                }else if(colorCounter==2){
                    idleCounter=idleMoveCounter3;
                    chanceCounter3= tempChanceCounter;
                }else if(colorCounter==3){
                    idleCounter=idleMoveCounter4;
                    chanceCounter4= tempChanceCounter;
                }
            } else if(gameModeType==3)
            {
                if(colorCounter==0)
                {
                    idleCounter=idleMoveCounter;
                    chanceCounter= tempChanceCounter;
                }else if(colorCounter==1){
                    idleCounter=idleMoveCounter2;
                    chanceCounter2= tempChanceCounter;
                }else if(colorCounter==2){
                    idleCounter=idleMoveCounter3;
                    chanceCounter3= tempChanceCounter;
                }else if(colorCounter==3){
                    idleCounter=idleMoveCounter4;
                    chanceCounter4= tempChanceCounter;
                }
            }
            else if(gameModeType==4)
            {
                if(colorCounter==0)
                {
                    idleCounter=idleMoveCounter;
                    chanceCounter= tempChanceCounter;
                }else if(colorCounter==1){
                    idleCounter=idleMoveCounter2;
                    chanceCounter2= tempChanceCounter;
                }else if(colorCounter==2){
                    idleCounter=idleMoveCounter3;
                    chanceCounter3= tempChanceCounter;
                }else if(colorCounter==3){
                    idleCounter=idleMoveCounter4;
                    chanceCounter4= tempChanceCounter;
                }
            }
        }
        


        if(getMax()!=6)
        {
         //   console.log("CANNOT ROLL 6");
            arr=[1,2,3,4,5];
        }else{
           // console.log("CAN ROLL 6");
        }


        
      /*  var playerDebug=[6,6,6,6,6,6,56,56,56,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
        console.log("MAX :"+getMax());*/
      /*  if(getMax()!=6)
        {
            console.log("CANNOT ROLL 6");
            arr=[1,2,3,4,5];
            diceNo=arr[randomiser(0,arr.length)];
        }else{
            console.log("CAN ROLL 6");
            diceNo=playerDebug[debugcounter]; 
            debugcounter++;
        }*/

     
        diceNo=arr[randomiser(0,arr.length)];
       // idleCounter=idleMoveCounter;
      //  if(isAi)
       // idleCounter=idleMoveCounterAI;

     
        if(idleCounter>firstSixFactor())
        {
            //console.log("FORCING SIX");
            diceNo=getReqdVal(isAi);
            idleCounter=0;
        }


      

        if(diceNo>=6)
        {
            repeatMove=true;
            sixCounter++;
        }else{
            sixCounter=0;
        }

        if(isAi)
        {
            aiChanceCounter= tempChanceCounter;
            idleMoveCounterAI= idleCounter;
         }else{
            if(gameModeType==0){
                chanceCounter= tempChanceCounter;
                idleMoveCounter= idleCounter;
            }else if(gameModeType==1)
            {
                if(colorCounter==0)
                {
                    idleMoveCounter= idleCounter;
                    chanceCounter= tempChanceCounter;
                }
                else if(colorCounter==1)
                {
                    idleMoveCounter2= idleCounter;

                    chanceCounter2= tempChanceCounter;
                }
            }
            else if(gameModeType==2 || gameModeType==3 || gameModeType==4)
            {
                if(colorCounter==0)
                {
                    idleMoveCounter= idleCounter;
                    chanceCounter= tempChanceCounter;
                }
                else if(colorCounter==1)
                {
                    idleMoveCounter2= idleCounter;

                    chanceCounter2= tempChanceCounter;
                }
                else if(colorCounter==2)
                {
                    idleMoveCounter3= idleCounter;

                    chanceCounter3= tempChanceCounter;
                }
                else if(colorCounter==3)
                {
                    idleMoveCounter4= idleCounter;

                    chanceCounter4= tempChanceCounter;
                }
            }
            //textDiceObj.text=diceNo;
        }
     //   textDiceObj.text=diceNo;
        


        resetDiceSprites();
        if(diceNo==1)
        {
            diceDot1.visible=true;
        }
        else if(diceNo==2)
        {
            diceDot2.visible=true;
        }
        else if(diceNo==3)
        {
            diceDot3.visible=true;
        }
        else if(diceNo==4)
        {
            diceDot4.visible=true;
        }
        else if(diceNo==5)
        {
            diceDot5.visible=true;
        }
        else if(diceNo==6)
        {
            diceDot6.visible=true;
        }
    }

    function resetDiceSprites()
    {
        diceDot1.visible=false;
        diceDot2.visible=false;
        diceDot3.visible=false;
        diceDot4.visible=false;
        diceDot5.visible=false;
        diceDot6.visible=false;
    }
     

   

   
    var gameModeType=0;//0 AI vs Player //1: 2P  //2 : 4P
 
    var timer=0;
    var counter=-1;
    var deltaTime=0;


    var rollDiceStatus=false;
    var chanceAIStatus=[false,false,false,false];
    var chancePlayerStatus=[false,false,false,false]; 
    var diceRolledStatus=[false,false,false,false];
    var shouldRollDiceStatus=[false,false,false,false];
    var selectTokenStatus=[false,false,false,false];
    var aiReady=[false,false,false,false];

    var moveEndedStatus=false;
    var targetPlayerEnd=0;

    /*var aiPrepared=false;*/

    var diceNo=0;


    var selectedTokenNo=0;
    var animTimer=0.25; //0.25 OG VALUE


    function getSelectTokenStatus(){

        return selectTokenStatus[colorCounter];
    }

    function setSelectionTokenStatus(setActive,resetAll)
    {
        selectTokenStatus[colorCounter]=setActive;
        if(resetAll)
        {
            for(var i=0;i<4;i++)
            {
                selectTokenStatus[i]=setActive;
            }
         
        }
    }

    function getShouldRollDiceStatus()
    {
        return shouldRollDiceStatus[colorCounter];
    }

    function setShouldRollDiceStatus(setActive,resetAll=false)
    {
        shouldRollDiceStatus[colorCounter]=setActive;
        if(resetAll)
        {

            for(var i=0;i<4;i++){
                shouldRollDiceStatus[i]=setActive;
                // console.log("Reseting dice r");
            }
         
        }


        
        if(setActive)
        wantInputFromMP("1","DICE ROLL");
    }


    function getDiceRolledStatus()
    {
        return diceRolledStatus[colorCounter];
    }

    function setDiceRolledStatus(setActive,resetAll=false)
    {
        diceRolledStatus[colorCounter]=setActive;

        if(resetAll)
        {
            for(var i=0;i<4;i++){
                diceRolledStatus[i]=setActive;
            }
         
        }
    }


    function getChanceStatus()
    {

        if(gameModeType==0)
        {
            //Player Vs AI
        }
 
        return chancePlayerStatus[colorCounter];
       
    }

    function setChanceStatus(setActive,resetAll=false)
    {
        chancePlayerStatus[colorCounter]=setActive;
        if(resetAll)
        {

            for(var i=0;i<4;i++)
            {
                if(i==0)
                {
                    chancePlayerStatus[i]=setActive;

                }else{
                    chancePlayerStatus[i]=setActive;

                }
            }
         
        }
    }

    function getAIReadyStatus()
    {
       return aiReady[colorCounter];
    }

    function setAIReadyStatus(setActive,resetAll=false)
    {
        aiReady[colorCounter]=setActive;
        if(resetAll)
        {

            for(var i=0;i<4;i++){
                aiReady[i]=setActive;
            }
         
        }
    }


    function endMove(isAi)
    {  
       // console.trace("isAi :"+isAi);

       var hasRepeated=false;
       
    //    if(checkForGameOver()){
    //     //      console.log("GAME HAS ENDED!");
    //           return;
    //       }
    //       animateBGStatus=true;
    //       moveEndedStatus=false;

       if(repeatMove)
       {
           if(gameModeType==0)
           {
               isAi=!isAi;//Doing so will get the sixer's chance back.
               repeatColor();

           }else if(gameModeType==1){
               repeatColor();
           }
           else if(gameModeType==2){
               repeatColor();
           }
           else if(gameModeType==3){
               repeatColor();
           }
           else if(gameModeType==4){
               repeatColor();
           }
           repeatMove=false;
           hasRepeated=true;
          // console.log("GIVE ANOTHER CHANCE");
       }

        hideBG();
        if(gameModeType==0) //AI VS PLAYER 
        {

            if(colorCounter==0)
            {
                isAi=false;  
                setChanceStatus(false);
            }
            else
            {
               isAi=true;
               setAIChanceStatus(false);
            }

          incColor();
          if(!isAi)
          {    
           // console.log("PLAYER HAS ENDED MOVE");

          //  console.log("COLOR COUNTER SHOULD BE 1 BUT IT IS :"+colorCounter);
            setAIReadyStatus(false);
            setAIReactedStatus(false);
            setAICanMoveStatus(false);
            changeDiceColor(getColorEnemy());  
            setAIChanceStatus(true);
            // console.log("STEP 1");
             
          } 
          else 
          {
            //  console.log("AI HAS ENDED MOVE,COLOR COUNTER SHOULD BE 0 ,BUT IT IS :"+colorCounter);
           setDiceRolledStatus(false);
           setShouldRollDiceStatus(true);
           setPlayerReady(false);
           changeDiceColor(getColor());
            setChanceStatus(true);
          

       
          }

          hideBadges();
        }
        else if(gameModeType==1) //PLAYER VS PLAYER
        {
          //  console.log("HERE 2");
            setChanceStatus(false);
        
            incColor();
        
            setChanceStatus(true);
            setDiceRolledStatus(false);
            setShouldRollDiceStatus(true);
            setPlayerReady(false);
            changeDiceColor(getColor());
            hideBadges();
        }
        else if(gameModeType==2) //PLAYER VS PLAYER VS PLAYER VS PLAYER
        {
          //  console.log("HERE 2");
            setChanceStatus(false);
        
            incColor();
        
            setChanceStatus(true);
            setDiceRolledStatus(false);
            setShouldRollDiceStatus(true);
            setPlayerReady(false);
            changeDiceColor(getColor());
            hideBadges();
        }

        if(gameModeType==3)//PLAYER VS AI VS AI VS AI
        {
          //  console.log("MOVE ENDED");
            if(colorCounter==0 || colorCounter==1 || colorCounter==2)
            {
                isAi=false;
              // console.log("AI TURN NOW :"+(colorCounter+1));
            }else{
                isAi=true;
                //console.log("PLAYER TURN NOW :"+(colorCounter+1));
            }

            setChanceStatus(false);
            setAIChanceStatus(false);
           
            incColor();
           
            if(!isAi)
            {    


                setChanceStatus(false);
                setAIChanceStatus(true);
                setAIReadyStatus(false);
                setAIReactedStatus(false);
                setAICanMoveStatus(false);
                changeDiceColor(getColorEnemy());  
             } 
             else 
             {
                setChanceStatus(true);
                setAIChanceStatus(false);
                setDiceRolledStatus(false);
                setShouldRollDiceStatus(true);
                setPlayerReady(false);
                changeDiceColor(getColor());
            }
            hideBadges();
        }
        if(gameModeType==4)//PLAYER VS AI VS PLAYER VS AI
        {
             // console.log("MOVE ENDED");
            if(colorCounter==0  || colorCounter==2)
            {
                isAi=false;
              // console.log("AI TURN NOW :"+(colorCounter+1));
            }else{
                isAi=true;
                //console.log("PLAYER TURN NOW :"+(colorCounter+1));
            }

            setChanceStatus(false);
            setAIChanceStatus(false);
           
            incColor();
           
            if(!isAi)
            {    
                setChanceStatus(false);
                setAIChanceStatus(true);
                setAIReadyStatus(false);
                setAIReactedStatus(false);
                setAICanMoveStatus(false);
                changeDiceColor(getColorEnemy());  
             } 
             else 
             {
                setChanceStatus(true);
                setAIChanceStatus(false);
                setDiceRolledStatus(false);
                setShouldRollDiceStatus(true);
                setPlayerReady(false);
                changeDiceColor(getColor());
            }
            hideBadges();
        }
 
        if(checkForGameOver()){
      //      console.log("GAME HAS ENDED!");
    //   hasRepeated=true;

            
            return;
        }
        animateBGStatus=true;
        moveEndedStatus=false;
        

      //  console.log("AI CHANCE :"+chanceAIStatus);
    }
    var aiPrepareTimer=0;
    var aiReactionTimer=0;
    var aiReactedStatus=[false,false,false,false];
    var aiCanMove=[false,false,false,false];
    var playerReady=[false,false,false,false];

    function setPlayerReady(setActive,resetAll=false)
    {
        playerReady[colorCounter]=setActive;
        if(resetAll)
        {

            for(var i=0;i<4;i++){
                playerReady[i]=setActive;
            }
         
        }
    }
    function getPlayerReady()
    {
        return playerReady[colorCounter];
    }

    var isColorAI=[false,false,false,false];

  //  var enemyColor=[0,0,0,0];

    function setColorPlayer(color)
    {
        
        playerColor[0]=color;
        if(color==1)//RED
        {   
            playerColor[1]=2;
        }
        else if(color==2)//Yellow
        {
            playerColor[1]=1;
        }
        else if(color==3)//Green
        {
            playerColor[1]=4;
        }
        else if(color==4)//Blue
        {
            playerColor[1]=3;
        }

        if(gameModeType==0)
        {
            isColorAI[1]=true;
        }

        if(gameModeType==1)
        {
         //   console.log("Player2color :"+playerColor[1]);
           // playerColor[1]=enemyColor[0];
           // console.log("Player2color :"+playerColor[1]);
        }

        if(gameModeType==2)
        {
         //   console.log("Player2color :"+playerColor[1]);
            playerColor[0]=1;
            playerColor[1]=3;
            playerColor[2]=2;
            playerColor[3]=4;
           // console.log("Player2color :"+playerColor[1]);
        }

        if(gameModeType==3)
        {
            if(color==1)//RED
            {   
                playerColor[1]=3;
                playerColor[2]=2;
                playerColor[3]=4;
            }
            else if(color==2)//Yellow
            {
                playerColor[1]=4;
                playerColor[2]=1;
                playerColor[3]=3;
            }
            else if(color==3)//Green
            {
                playerColor[1]=2;
                playerColor[2]=4;
                playerColor[3]=1;
            }
            else if(color==4)//Blue
            {
                playerColor[1]=1;
                playerColor[2]=3;
                playerColor[3]=2;
            }
        }
        if(gameModeType==4)
        {
            if(color==1)//RED
            {   
                playerColor[1]=3;
                playerColor[2]=2;
                playerColor[3]=4;
            }
            else if(color==2)//Yellow
            {
                playerColor[1]=4;
                playerColor[2]=1;
                playerColor[3]=3;
            }
            else if(color==3)//Green
            {
                playerColor[1]=2;
                playerColor[2]=4;
                playerColor[3]=1;
            }
            else if(color==4)//Blue
            {
                playerColor[1]=1;
                playerColor[2]=3;
                playerColor[3]=2;
            }
        }
    }

    function getEnemyCur1()
    {
      //  color=enemyColor[0];
      color=getColorEnemy();
  
      if(color==1)//RED
        {    
            return red1curr;
        }
        else if(color==2)//Yellow
        {
            return yellow1curr;
        }
        else if(color==3)//Green
        {
            return green1curr;
        }
        else if(color==4)//Blue
        {
            return blue1curr;
        }
    }

    function getEnemyCur2()
    {

       // color=enemyColor[0];
       color=getColorEnemy(); 
       if(color==1)//RED
        {    
            return red2curr;
        }
        else if(color==2)//Yellow
        {
            return yellow2curr;
        }
        else if(color==3)//Green
        {
            return green2curr;
        }
        else if(color==4)//Blue
        {
            return blue2curr;
        }
    }

    function getEnemyCur3()
    {
    //    color=enemyColor[0];
    color=getColorEnemy();  
    if(color==1)//RED
        {    
            return red3curr;
        }
        else if(color==2)//Yellow
        {
            return yellow3curr;
        }
        else if(color==3)//Green
        {
            return green3curr;
        }
        else if(color==4)//Blue
        {
            return blue3curr;
        }
    }

    function getEnemyCur4()
    {
      //  color=enemyColor[0];
      color=getColorEnemy();  
      if(color==1)//RED
        {    
            return red4curr;
        }
        else if(color==2)//Yellow
        {
            return yellow4curr;
        }
        else if(color==3)//Green
        {
            return green4curr;
        }
        else if(color==4)//Blue
        {
            return blue4curr;
        }

    }



    function getNode1()
    {
        color=playerColor[colorCounter];
        if(color==1)//RED
        {    
            return red1;
        }
        else if(color==2)//Yellow
        {
            return yellow1;
        }
        else if(color==3)//Green
        {
            return green1;
        }
        else if(color==4)//Blue
        {
           // console.trace("THIS");
            return blue1;
        }
    }

    function getNode2()
    {
        color=playerColor[colorCounter];
        if(color==1)//RED
        {    
            return red2;
        }
        else if(color==2)//Yellow
        {
            return yellow2;
        }
        else if(color==3)//Green
        {
            return green2;
        }
        else if(color==4)//Blue
        {
            return blue2;
        }
    }


    function getNode3()
    {
        color=playerColor[colorCounter];
        if(color==1)//RED
        {    
            return red3;
        }
        else if(color==2)//Yellow
        {
            return yellow3;
        }
        else if(color==3)//Green
        {
            return green3;
        }
        else if(color==4)//Blue
        {
            return blue3;
        }
    }

    function getNode4()
    {
        color=playerColor[colorCounter];
        if(color==1)//RED
        {    
            return red4;
        }
        else if(color==2)//Yellow
        {
            return yellow4;
        }
        else if(color==3)//Green
        {
            return green4;
        }
        else if(color==4)//Blue
        {
            return blue4;
        }
    }

    

   // var player2color=0;
    
    function getCur1()
    {
       /* color=playerColor;

        if(gameModeType==1)
        {
            if(player2chance)
            {
                color=player2color;
            }
            else{
                color=playerColor;
            }
        }*/
         
        var color=getColor();
       /* console.log("COLOR :"+color);
        console.log("COLOR COUNTER :"+colorCounter);*/
        if(color==1)//RED
        {    
            return  red1curr;
        }
        else if(color==2)//Yellow
        {
            return yellow1curr;
        }
        else if(color==3)//Green
        {
            return green1curr;
        }
        else if(color==4)//Blue
        {
            return blue1curr;
        }
    }

    function getCur2()
    {
        /*color=playerColor;
     
        if(gameModeType==1)
        {
            if(player2chance)
            {
                color=player2color;
            }
            else{
                color=playerColor;
            }
        }*/
        var color=getColor();

     
        if(color==1)//RED
        {    
            return red2curr;
        }
        else if(color==2)//Yellow
        {
            return yellow2curr;
        }
        else if(color==3)//Green
        {
            return green2curr;
        }
        else if(color==4)//Blue
        {
            return blue2curr;
        }
    }

    function getCur3()
    {
        /*color=playerColor;
        if(gameModeType==1)
        {
            if(player2chance)
            {
                color=player2color;
            }
            else{
                color=playerColor;
            }
        }*/
      var  color=getColor();
      
      
        if(color==1)//RED
        {    
            return red3curr;
        }
        else if(color==2)//Yellow
        {
            return yellow3curr;
        }
        else if(color==3)//Green
        {
            return green3curr;
        }
        else if(color==4)//Blue
        {
            return blue3curr;
        }
    }

    function getCur4()
    {
       /* color=playerColor;
        
        if(gameModeType==1)
        {
            if(player2chance)
            {
                color=player2color;
            }
            else{
                color=playerColor;
            }
        }*/
       var color=getColor();

        
        if(color==1)//RED
        {    
            return red4curr;
        }
        else if(color==2)//Yellow
        {
            return yellow4curr;
        }
        else if(color==3)//Green
        {
            return green4curr;
        }
        else if(color==4)//Blue
        {
            return blue4curr;
        }

    }


   
 
    function triggerGameOver(color)
    {
        changeAudioSrc(3);
      //  console.trace("THIS ??");
        playerWonTextObj.text=" ";
        winningTokenBlueObj.visible=false;
        winningTokenRedObj.visible=false;
        winningTokenGreenObj.visible=false;
        winningTokenYellowObj.visible=false;
        // gameOverBG.visible=true;
        gameOverBGactive(true); 
        hidePointers();
        pauseButtonImg.visible=false;
        //gameModeType
        //console.log("Color :"+color);
        if(color==1)
        {
            winningTokenRedObj.visible=true;
            console.log(" Red Won");
        }else if(color == 2 ){
            winningTokenYellowObj.visible=true;
            console.log(" Yellow Won");
        }else if(color == 3 ){
            winningTokenGreenObj.visible=true;
            console.log(" Green Won");
        }else if(color == 4 ){
            console.log(" Blue Won");
            winningTokenBlueObj.visible=true;
        }
        //colorCounter;

        playerWonTextObj.scale.setTo(0.6,0.6);
        if(gameModeType==0)
        {
           // if(chanceAIStatus)
           if(color==getColorEnemy())
            {
                playerWonTextObj.scale.setTo(0.55,0.55);
                playerWonTextObj.text="COMPUTER";
                playerWonTextObj.x=85;
            }
            //else
            else if(color==playerColor[0])
            {
                playerWonTextObj.x=100;
                playerWonTextObj.text="Player 1";
            }

        }
        else if(gameModeType==1 || gameModeType==2)
        {
            playerWonTextObj.x=100;
            playerWonTextObj.text="Player "+(colorCounter+1);
        
        //console.log("11"+"Player "+(colorCounter+1)+"?? :"+ playerWonTextObj.text);
        }
        else if(gameModeType==3)
        {
            if(color==playerColor[0])
            {
                playerWonTextObj.x=100;
                playerWonTextObj.text="Player 1";
            }
            else if(color==playerColor[1])
            {
                playerWonTextObj.scale.setTo(0.55,0.55);
                playerWonTextObj.x=85;
                playerWonTextObj.text="Computer 1";
            }
            else if(color==playerColor[2])
            {
                playerWonTextObj.scale.setTo(0.55,0.55);
                playerWonTextObj.x=85;
                playerWonTextObj.text="Computer 2";
            }
            else if(color==playerColor[3])
            {
                playerWonTextObj.scale.setTo(0.55,0.55);
                playerWonTextObj.x=85;
                playerWonTextObj.text="Computer 3";
            }
        }
        else if(gameModeType==4)
        {
            if(color==playerColor[0])
            {
                playerWonTextObj.x=100;
                playerWonTextObj.text="Player 1";
            }
            else if(color==playerColor[1])
            {
                playerWonTextObj.scale.setTo(0.55,0.55);
                playerWonTextObj.x=85;
                playerWonTextObj.text="Computer 1";
            }
            else if(color==playerColor[2])
            {
                playerWonTextObj.scale.setTo(0.55,0.55);
                playerWonTextObj.x=85;
                playerWonTextObj.text="Player 2";
            }
            else if(color==playerColor[3])
            {
                playerWonTextObj.scale.setTo(0.55,0.55);
                playerWonTextObj.x=85;
                playerWonTextObj.text="Computer 2";
            }
        }
        gameOverStatus=true;
        gameStatus=false;
         showAds();
    }

    var tokenHomeInShowAds=false;
    var tokenKillShowAds=false;

    // gameOverEnmeyToken()
    // {

    // };
   function gameOverToken(index,token)
    {
        // color=getColorEnemy();
        color=playerColor[index];
  
        if(token==1)
        {
            if(color==1)//RED
            {    
                return red1curr;
            }
            else if(color==2)//Yellow
            {
                return yellow1curr;
            }
            else if(color==3)//Green
            {
                return green1curr;
            }
            else if(color==4)//Blue
            {
                return blue1curr;
            }
        }
        else if(token==2)
        {
            if(color==1)//RED
            {    
                return red2curr;
            }
            else if(color==2)//Yellow
            {
                return yellow2curr;
            }
            else if(color==3)//Green
            {
                return green2curr;
            }
            else if(color==4)//Blue
            {
                return blue2curr;
            }
        }
        else if(token==3)
        {
            if(color==1)//RED
            {    
                return red3curr;
            }
            else if(color==2)//Yellow
            {
                return yellow3curr;
            }
            else if(color==3)//Green
            {
                return green3curr;
            }
            else if(color==4)//Blue
            {
                return blue3curr;
            }
        }
        else if(token==4)
        {
            if(color==1)//RED
            {    
                return red4curr;
            }
            else if(color==2)//Yellow
            {
                return yellow4curr;
            }
            else if(color==3)//Green
            {
                return green4curr;
            }
            else if(color==4)//Blue
            {
                return blue4curr;
            }
        }
     
    };
    // gameOverPlayerToken2()
    // {
    //     // color=getColorEnemy();
    //     color=playerColor[0];
  
    //     if(color==1)//RED
    //     {    
    //         return red2curr;
    //     }
    //     else if(color==2)//Yellow
    //     {
    //         return yellow2curr;
    //     }
    //     else if(color==3)//Green
    //     {
    //         return green2curr;
    //     }
    //     else if(color==4)//Blue
    //     {
    //         return blue2curr;
    //     }
    // };

    function checkForGameOver()
    {
        var isOver=false;
        var color=0;
        var mode=gameModeType;
      //  console.log("MODE :"+mode);
             if(mode==0)//Player vs AI
            {
                //console.log("CUR 1:"+getCur1()+"::"+"CUR 2 :"+getCur2()+"::"+"CUR 3:"+getCur3()+"::"+"GET CUR 4 :"+getCur4());

                // if(getCur1()>=56 && getCur2()>=56 && getCur3()>=56 && getCur4()>=56)
                if(gameOverToken(0,1)>=56 && gameOverToken(0,2)>=56 && gameOverToken(0,3)>=56 && gameOverToken(0,4)>=56)
                {
                    color=playerColor[0];
                    console.log("Player Won");
                    isOver=true;
                    triggerGameOver(color);
                }
                // else if(getEnemyCur1()>=56 && getEnemyCur2()>=56 && getEnemyCur3()>=56 && getEnemyCur4()>=56)
                else if(gameOverToken(1,1)>=56 && gameOverToken(1,2)>=56 && gameOverToken(1,3)>=56 && gameOverToken(1,4)>=56)
                {
    //                color=enemyColor[0];
                    color=playerColor[1];

                    console.log("AI Won");
                    isOver=true;
                    triggerGameOver(color);
                }

                    //DEBUG ONLY.
                    // color=enemyColor;
                    //triggerGameOver(color); 
             }
            else if(mode==1 || mode==2)//Player vs Player //4P All players.
             {
         
                if(getCur1()>=56 && getCur2()>=56 && getCur3()>=56 && getCur4()>=56)
                {
                    
                    if(colorCounter==0)
                    {
                        console.log("Player 1 won");
                        color=playerColor[0];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==1)
                    {
                        console.log("Player 2 won");
                        color=playerColor[1];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==2)
                    {
                        console.log("Player 3 won");
                        color=playerColor[2];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==3)
                    {
                        console.log("Player 4 won");
                        color=playerColor[3];
                        isOver=true;
                        triggerGameOver(color);
                    }
                //   
                }
             }
            else if(mode==3)//Player vs AI vs AI vs AI
            {
               // console.log("HERE???!!!");
                if(getCur1()>=56 && getCur2()>=56 && getCur3()>=56 && getCur4()>=56)
                {
                    if(colorCounter==0)
                    {
                        console.log("Player 1 won");
                        color=playerColor[0];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==1)
                    {
                        console.log("Computer 1 won");
                        //color=enemyColor[0];
                        color=playerColor[1];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==2)
                    {
                        console.log("Computer 2 won");
                    //  color=enemyColor[1];
                    color=playerColor[2];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==3)
                    {
                        console.log("Computer 3 won");
    //                   color=enemyColor[2];
                        color=playerColor[3];
                        isOver=true;
                        triggerGameOver(color);
                    }
                }
           
            }
            else if(mode==4)//Player vs AI vs PLAYER vs AI
            {
                if(getCur1()>=56 && getCur2()>=56 && getCur3()>=56 && getCur4()>=56)
                {
                    if(colorCounter==0)
                    {
                        console.log("Player 1 won");
                        color=playerColor[0];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==1)
                    {
                        console.log("Computer 1 won");
                        //color=enemyColor[0];
                        color=playerColor[1];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==2)
                    {
                        console.log("Player 2 won");
                    //  color=enemyColor[1];
                         color=playerColor[2];
                        isOver=true;
                        triggerGameOver(color);
                    }
                    else if(colorCounter==3)
                    {
                        console.log("Computer 2 won");
    //                   color=enemyColor[2];
                        color=playerColor[3];
                        isOver=true;
                        triggerGameOver(color);
                    }
                }
           
            }
        //}
        

        // if(isOver)
        // triggerGameOver()
       return isOver;
    }


    function generateAiToken()
    {
         

        
        var forceKill=false;
        var forceTokenOut=false;
        var forceSafeSpot=false;
        var aiCanReachEnd=false;
        var allToken=[getEnemyCur1(),getEnemyCur2(),getEnemyCur3(),getEnemyCur4()];
        var baseVal=-1;
        var aiCanKill=false;
        var aiThinkKillToken=0;

       // console.log("AI CAN KILL 1:"+aiCanKill);
        for(var i=0;i<allToken.length;i++)
        {
      
            if(allToken[i]<0)
            continue;
            
            if(checkForEnemyThinkKill (getColorEnemy(),allToken[i]))
            {
                aiThinkKillToken=  i+1; //Is the token
                aiCanKill=true;
                break;
            }

       
       
        }

        if(aiCanKill==false)
        {
            for(var i=0;i<allToken.length;i++)
            {
                if(!aiCanReachEnd)
                {
                    if( (allToken[i]+diceNo) == 56 )
                    {
                        //Ai can reach home.
                        baseVal=i+1;
                        aiCanReachEnd=true;
                        break;
                    }
                }
                else
                {
                    break;
                }
            }
        }
       



        if(aiCanKill)
        {
            baseVal=aiThinkKillToken;
           //  console.log("KILL FOUND TOKEN :"+aiThinkKillToken);
          
            //Confirm kill here! Can use to reset.
        }
        else if(aiCanReachEnd) //Check for destination end.
        {
         //   console.log("CAN REACH DESTINATION");
            //Ai will reach it's destination position.
        }
        else
        {

        //Token logic based on difficulty level here.
       // console.log("AI ALGORITHM");
        var outTokens=0;
        for(var i=0;i<allToken.length;i++){
            if(allToken[i]>-1)
            outTokens++;
        }


        if(aiDifficultyMode==0)
        {
            if(outTokens<2 && diceNo>=6) //Making minimum two out of cage logic. 
            {
                for(var i=0;i<allToken.length;i++)
                {
                    if(allToken[i]<0)
                    {
                        diceNo=1;
                        baseVal=i+1;
                        break;
                    }
                }
            }
            else
            {  //Sequential logic here as well as if existing tokens can't make it to home,new token logic here.
                for(var i=0;i<allToken.length;i++)
                {
                    if(allToken[i]<0 && diceNo>=6)
                    {
                       //New Token.
                       diceNo=1;
                       baseVal=i+1;
                       break;
                    }

                      if((allToken[i]) > -1 && (allToken[i]+diceNo) <= 56)
                    {
                       //Existing Token.
                      baseVal=i+1;
                      break;
                    } 
                }
            }
            

        }
          else if(aiDifficultyMode==1)
        {
            var newTokenOut=false;
            var safeSpotFound=false;
            
            //In medium we get the tokens out first then check for safe spot. 
            if(diceNo>=6) 
            {
                if(outTokens<4) //Tokens are still in the cage.
                {
                    for(var i=0;i<allToken.length;i++)
                    {
                        if(allToken[i]<0 && diceNo>=6)
                        {
                           //New Token.
                           newTokenOut=true;
                           diceNo=1;
                           baseVal=i+1;
                           break;
                        }
                    }
                    
                }
            }

            if(newTokenOut==false)
            {

                    var color=getColorEnemy();
                    var arrX=[];
                    var arrY=[];
                    if(color==1)
                    {
                        //Red
                        arrX=redNodeX;
                        arrY=redNodeY;
                    }
                    else if(color==2)
                    {
                        //Yellow
                        arrX=yellowNodeX;
                        arrY=yellowNodeY;
                    }
                    else if(color==3)
                    {
                        //Green
                        arrX=greenNodeX;
                        arrY=greenNodeY;
                    }
                    else if(color==4)
                    {
                        //Blue
                        arrX=blueNodeX;
                        arrY=blueNodeY;
                    }


                megaloop:
                for(var i=0;i<allToken.length;i++)
                {
                    
                    var curr=allToken[i];

                    if(curr<0)
                    continue;

                    var toReach=(curr+diceNo);

                    


                    for(var j=0;j<redNodeX.length;j++) //We are using redNodeX just for the sake of length of the array.
                    {
                       

                        for(var k= 0;k<safePosX.length;k++)
                        {
                            if((arrX[toReach]==safePosX[k]) && (arrY[toReach]==safePosY[k]))
                            {
                                console.log("SAFE SPOT FOUND");
                                baseVal=i+1;
                                safeSpotFound=true;
                                break megaloop;
                            }
                        }
                       
                    }
                    


 

                }
            }


            if(newTokenOut==false && safeSpotFound==false)
            {
                for(var i=0;i<allToken.length;i++)
                {
                    if(allToken[i]<0 && diceNo>=6)
                    {
                       //New Token.
                       diceNo=1;
                       baseVal=i+1;
                       break;
                    }

                      if((allToken[i]) > -1 && (allToken[i]+diceNo) <= 56)
                    {
                       //Existing Token.
                      baseVal=i+1;
                      break;
                    } 
                }
            }



        }
        else if(aiDifficultyMode==2)
        {
            //In hard we check for safe spot over token out.
            var newTokenOut=false;
            var safeSpotFound=false;

            var color=getColorEnemy();
          
            var arrX=[];
            var arrY=[];

            if(color==1)
            {
                //Red
                arrX=redNodeX;
                arrY=redNodeY;
            }
            else if(color==2)
            {
                //Yellow
                arrX=yellowNodeX;
                arrY=yellowNodeY;
            }
            else if(color==3)
            {
                //Green
                arrX=greenNodeX;
                arrY=greenNodeY;
            }
            else if(color==4)
            {
                //Blue
                arrX=blueNodeX;
                arrY=blueNodeY;
            }


            megaloop:
            for(var i=0;i<allToken.length;i++)
            {

                var curr=allToken[i];
                var toReach=(curr+diceNo);

               

                if(curr<0)
                continue;


                for(var j=0;j<redNodeX.length;j++) //We are using redNodeX just for the sake of length of the array.
                {
                    

                    for(var k= 0;k<safePosX.length;k++)
                    {
                        if((arrX[toReach]==safePosX[k]) && (arrY[toReach]==safePosY[k]))
                        {
                            baseVal=i+1;
                            safeSpotFound=true;
                            break megaloop;
                        }
                    }
               
                }
            }

            if(safeSpotFound==false)
            {
                if(diceNo>=6) 
                {
                    if(outTokens<4) //Tokens are still in the cage.
                    {
                        for(var i=0;i<allToken.length;i++)
                        {
                            if(allToken[i]<0 && diceNo>=6)
                            {
                               //New Token.
                               newTokenOut=true;
                               diceNo=1;
                               baseVal=i+1;
                               break;
                            }
                        }
                        
                    }
                }
            }


            if(newTokenOut==false && safeSpotFound==false){
                for(var i=0;i<allToken.length;i++)
                {
                    if(allToken[i]<0 && diceNo>=6)
                    {
                       //New Token.
                       diceNo=1;
                       baseVal=i+1;
                       break;
                    }

                      if((allToken[i]) > -1 && (allToken[i]+diceNo) <= 56)
                    {
                       //Existing Token.
                      baseVal=i+1;
                      break;
                    } 
                }
            }

        }
    }

        return baseVal;




    

        
        

        
        
       
      /*  for(var i=0;i<allToken.length;i++)
        {
             if(allToken[i]<0 && diceNo>=6)
            {
                //New Token.
                diceNo=1;
                baseVal=i+1;
                break;
            }

            if((allToken[i]) > -1 && (allToken[i]+diceNo) <= 56)
            {
                //Existing Token.
                baseVal=i+1;
                break;
            }
        }*/

        //return baseVal;
    }

    function getFromColorCounter()
    {
        if(gameModeType==3)
        {
            if(colorCounter==1)
            {

            }
        }
    }

    var playerColor=[0,0,0,0];

    function afterDiceRollLogic()
    {
       // textDiceObj.text=diceNo;
       // if(chanceAIStatus)
       //console.log("AFTER DICE ROLL IS AI :"+getAIChanceStatus());
      if( getAIChanceStatus()) 
       {
        // console.log(" AI CHANCE");
            if(!checkForLastTurns(true)){
                setAICanMoveStatus(false);
              //   console.log("STEP 3.1");

              return;
            }
           //  console.log("STEP 3.2");
         
            setAICanMoveStatus(true);

           selectedTokenNo=generateAiToken();
            //  console.log(" AI selectedTokenNo :"+selectedTokenNo+"BLUE 1 CURR :"+blue1curr);


           if(selectedTokenNo==1)
               {

               // console.log("TARGET PLAYER END 1 :"+targetPlayerEnd);

                  targetPlayerEnd=getEnemyCur1()+diceNo; 
        
               }
             else if(selectedTokenNo==2)
              {
               // console.log("TARGET PLAYER END 2 :"+targetPlayerEnd);

                  targetPlayerEnd=getEnemyCur2()+diceNo; 
                }
              else if(selectedTokenNo==3)
              {
              //  console.log("TARGET PLAYER END 3 :"+targetPlayerEnd);

                  targetPlayerEnd=getEnemyCur3()+diceNo; 
                }
              else if(selectedTokenNo==4)
              {
               // console.log("TARGET PLAYER END 4 :"+targetPlayerEnd);

                  targetPlayerEnd=getEnemyCur4()+diceNo; 
               }
          
           timer=0.0;//Making it look like ai is thinking his next move.//This is also debug only(we can change the time depending on the situation)
        }
        else if(getChanceStatus())
        {
            //console.log(" PLAYER CHANCE");
          setDiceRolledStatus(true);
  
 
           if(!checkForLastTurns(false))
            return;
           

           var canSelectToken=false;
   
          
            if( getCur1()<0  && getCur2()<0 && getCur3()<0 && getCur4()<0) //Cannot get out of the cage.
            {
                if(diceNo<6)
                {
                    idleMoveCounter++;
             
                    sixCounter=0;
                    endMove(false);
                    return;
                }
            }

             
               
            if((getCur1()<56 || getCur2()<56 || getCur3()<56 || getCur4()<56)) //Can still play.  
            {
                canSelectToken=true;
            
            }
             
                    


            
            var checkForAutomation=false;

         

           
            

            //if(diceNo<6)
            {
             
                var allTokens=[getCur1(),getCur2(),getCur3(),getCur4()];
                
                var outTokens=0; 
                
                var baseVal=0;


                
                var sameTileStatus=false;

                //SAME TILE LOOP.
                for(var i=0;i<allTokens.length;i++)
                {

                    if(allTokens[i]<0 ||allTokens[i]>=56)
                     continue;
                     
                        for(var j=0;j<allTokens.length;j++)
                        {
                            if(allTokens[j]<0 ||allTokens[j]>=56)
                            continue;

                            if(allTokens[i]!=allTokens[j])  
                            {
                                // Tokens are not on same tile.
                                sameTileStatus=false;
                                break;
                            }else{
                                // Tokens are on same tile.
                                baseVal=i+1;
                                sameTileStatus=true;
                            }


                        }    
                    
                }

                if(sameTileStatus)
                {
                 
                    checkForAutomation=true;//For same tile automation.
                    
                } 

             

                var counterAuto=0;
                 for(var i=0;i<allTokens.length;i++)
                {
                     if(allTokens[i]>=0 && ((allTokens[i]+diceNo)<=56) )
                     {
                            counterAuto++;
                            
                     }
                }  

                if(counterAuto==1)
                {
                    checkForAutomation=true;//If tokens are on home run and the addition of the current token with the dice can't reach destination,then automate.
                }

                if(diceNo>= 6)
                {
                    if(getCur1()<0 || getCur2()<0 || getCur3()<0 || getCur4()<0 )
                    {    
                        checkForAutomation=false; //Automation cannot happen if it is a six and tokens are still caged.
                    }
                }
             }

            if(checkForAutomation)
            {
               
                var allTokens=[getCur1(),getCur2(),getCur3(),getCur4()];
                var baseCounter=0;
                var baseToken=0;
             
                for(var i=0;i<allTokens.length;i++)
                {
                 
                    if(allTokens[i]>-1 && allTokens[i]<56 && ((allTokens[i]+diceNo)<=56))
                    {
                        baseCounter++;
                        baseToken=i+1;    
                    }

                }


            
                 if(baseCounter==1)//Automate token selection
                {
                
                   if(baseToken==1)
                     targetPlayerEnd=getCur1()+diceNo;
                  else if(baseToken==2)
                     targetPlayerEnd=getCur2()+diceNo;
                  else if(baseToken==3)
                     targetPlayerEnd=getCur3()+diceNo;
                  else if(baseToken==4)
                     targetPlayerEnd=getCur4()+diceNo;

                      
                    if(targetPlayerEnd>56) //The automated token can not reach it's target. //so end the move.
                    {
                        idleMoveCounter++;
                      //  console.log("Not repeat move");
                        sixCounter=0;
                        endMove(false);
                        return;
                    }   


                     canSelectToken=false;
                     timer=0.3;//So that first move is instant.
                     setSelectionTokenStatus(false);
                     selectedTokenNo=baseToken;
                     setPlayerReady(true);
                   }

                 else if(baseCounter>=1)//All the tokens are on the same tile
                 {

                     if(baseVal==1)
                          targetPlayerEnd=getCur1()+diceNo;
                     else if(baseVal==2)
                         targetPlayerEnd=getCur2()+diceNo;
                     else if(baseVal==3)
                         targetPlayerEnd=getCur3()+diceNo;
                    else if(baseVal==4)
                      targetPlayerEnd=getCur4()+diceNo;



                   

                      
                    if(targetPlayerEnd>56) //The automated token can not reach it's target. //so end the move.
                    {
                        //console.log("Automated token can not reach it's target");
                      //  console.log("Not repeat move");
                        sixCounter=0;
                        idleMoveCounter++;
                        endMove(false);
                        return;
                    }    

                      canSelectToken=false;
                      timer=0.3;//So that first move is instant.
                      setSelectionTokenStatus(false);
                      selectedTokenNo=baseVal;
                      setPlayerReady(true);
                  }
              
            }
     


            if(canSelectToken)
            {
                  setSelectionTokenStatus(true);
                 showBadges();
             }  
            

        }
         
    }


   /* window.addEventListener("focus", handleBrowserStateFOCUS.bind(context, true));
    window.addEventListener("blur", handleBrowserStateBLUR.bind(context, false));

    function handleBrowserStateFOCUS(isActive){
    // do something
    console.log("FOCUSED")
    }
    function handleBrowserStateBLUR(isActive){
        // do something
        console.log("BLUR")
        }*/

 

    var gameModevsAI;

    var selectDifficultyStatus=false;
    var selectNoOfPlayerStatus=false;
    function update() 
    {
        // textObj.text = "PRESSED ";
        var self=this;
        deltaTime = game.time.elapsed/1000;
        
      //  console.log("FOCUSED :"+focused);

        //Example on how to use a timer //IMP:init variable with zero
        //{
        //  timer+=deltaTime;
        //}

        if(splashStatus)
        {
             if(splashTimer>=splashTimerEnd){

                splashBG.visible=false;
                splashStatus=false;
                menuStatus=true;
                splashTimer=0;
            }else{
                splashTimer+=deltaTime;
            }
            
            return;
        }
        
         
        game.input.keyboard.onDownCallback = function() 
        { 
            
        
            var key=game.input.keyboard.event.keyCode;
         // console.log("KEY :"+key);
            if(menuStatus==true)
            {          

                if(key!=13)
                return;
                
                 //Disable menu status
                 menuStatus=false;
                 // introBG.visible=false;
                 introBGactive(false);
                 //Prepare for modestatus
                 modeStatus=true;
                 //inModeBG.visible=true;
                 modeBGactive(true);
                 return;
            }
            else if(modeStatus==true)
            {

                if(key==52)
                {
                //console.log("DEBUG HERE");
                //gameModeType=3; //OG VAL :0
                   
                //sendGAEvent("GameMode","AI"," ");
                //selectDifficultyStatus=true;
                  selectNoOfPlayerStatus=true;
                  modeStatus=false;
                  modeBGactive(false);
                  gameModevsAI=false;
                  console.log("SET GAME MODE VS AI FALSE");
                  // difficultyBGactive(true);
                }
                else if(key==53)
                {
                    modeStatus=false;
                   selectNoOfPlayerStatus=true;
                  // inModeBG.visible=false;
                  gameModevsAI=true;
                  console.log("SET GAME MODE VS AI TRUE");

                  modeBGactive(false);
                  difficultyBGactive(false);
                  //markerSelectActive(true);
                }
                /*else if(key==54)
                {
                    gameModeType=1; //DEBUG ONLY.
                }*/
                else
                {
                    return;
                }
                noOfPlayerBGActive(true);

               
               

               //  console.log("GAME MODE TYPE :"+gameModeType);
                return;
            }
            else if(selectNoOfPlayerStatus)
            { 
                 if(key==52) //4 //vs 2
                {
          
                   
                    if(gameModevsAI)
                    {
                        gameModeType=0;
                        noOfPlayerBGActive(false);
                        selectDifficultyStatus=true;
                        difficultyBGactive(true); 

                    }
                    else{
                        gameModeType=1;
                        selectColorStatus=true;
                        noOfPlayerBGActive(false);
                        markerSelectActive(true) 
                    }
                   
                }
                else if(key==53) //5 //vs 4
                {
                    if(gameModevsAI)
                    {
                        gameModeType=3;
                        selectDifficultyStatus=true;
                        noOfPlayerBGActive(false);
                        difficultyBGactive(true);
                    }
                    else{
                        gameModeType=2;
                 //      selectColorStatus=true;
                        noOfPlayerBGActive(false);
                     //   markerSelectActive(true)
                     setColorPlayer(playerColor[0]);


                     selectColorStatus=false;
                      markerSelectActive(false);
                     inGameBG.visible=true;
                     gameStatus=true;
     
                     setDiceRolledStatus(false);
                     setShouldRollDiceStatus(true);
                     setChanceStatus(true);
                     
                    // chanceAIStatus=false;
                    setAIChanceStatus(false); 
                    animateBGStatus=true;
                     console.log("Your turn ! press 5 to roll dice");
                    
     
                     resetDiceSprites();
                     //showAds();
                     initPlaces();
                     hideBadges();
                    }
                }
                else if(key==54) //5 //vs 4
                {
                    if(gameModevsAI)
                    {
                     
                    }
                    else{
                        gameModeType=4;
                        selectColorStatus=true;
                        noOfPlayerBGActive(false);
                        markerSelectActive(true)
                    }
                }
                else{
                    return;
                }
                selectNoOfPlayerStatus=false;


                return;
            }
            else if(selectDifficultyStatus)
            {
               
                if(key==52)//4
                {
                    console.log("EASY");
                    aiDifficultyMode=0;
                }
                else if(key==53) //5
                {
                    console.log("MEDIUM");
                    aiDifficultyMode=1;
                }
                else if(key==54)//6
                {
                    console.log("HARD");
                    aiDifficultyMode=2;
                }else{
                    return;
                }
                //inDifficultyBG.visible=false;
                difficultyBGactive(false);
                selectDifficultyStatus=false;
                selectColorStatus=true;
             //   inPickBG.visible=true;
                markerSelectActive(true);  
                selectColorStatus=true;
                selectDifficultyStatus=false;

            }
            else if(selectColorStatus==true)
            {
                
               // console.log("KEY :"+key);
                if(key==56)//8
                {
                    playerColor[0]=4;//blue
                }
                else if(key==54)//6
                {
                    playerColor[0]=2;//yellow
                }
                else if(key==52)//4
                {
                    playerColor[0]=1;//red
                }
                else if(key==53) //5
                {
                    playerColor[0]=3;//green
                }
                else
                {
                    return;
                }
                setColorPlayer(playerColor[0]);


                selectColorStatus=false;
                 markerSelectActive(false);
                inGameBG.visible=true;
                gameStatus=true;

                setDiceRolledStatus(false);
                setShouldRollDiceStatus(true);
                setChanceStatus(true);
                
               // chanceAIStatus=false;
               setAIChanceStatus(false); 
               animateBGStatus=true;
                console.log("Your turn ! press 5 to roll dice");
                 //textEnterToRollObj.visible=true;
               // textEnterToRollObj.text="Press Enter to roll the dice";

               resetDiceSprites();
             //  showAds();
                initPlaces();
                hideBadges();
               // showBadges();
                return;
            }
            else if(gamePaused)
            {
                if(key==0 || key==27)
                {
                    //Resume.
                    handleResume();
                }
                else if(key==53)
                {
                    //Restart.
                    handleRestart();
                }
                else if(key==54)
                {
                    //Home.
                    handleHome();
                }
            } 
            else if(gameStatus==true ) //&& getChanceStatus()
            {
               // console.log("HERE??");

              if(key==0 || key==27)
              {
                    {
                        handlePause();
                        return;
                    }
          
              }

              else if(animateDiceStatus==true)
              return;

              else if(getShouldRollDiceStatus()   && !getDiceRolledStatus())
              {
                
                if(key==13 || key==53)
                {    
                    receivedInputFromMP("1","DICE ROLL");
                  //  console.log("CALLED THIS 1");
                    animateDiceStatus=true;
                    textEnterToRollObj.visible=false;
                    hidePointers();
                    setShouldRollDiceStatus(false);
                }
                else
                {
                    return;
                }
                  
                }
               else if(getSelectTokenStatus())  
                {

                    if(key==50)//2
                    {
                        if(getCur1()<0)
                        {
                            if( diceNo<6)
                            {
                                return;
                            }  
                            else
                            {
                                diceNo=1;
                            }
                        }
                        else
                        {
                            if((getCur1()+diceNo)>56){
                                return;
                            }
                        } 

                        selectedTokenNo=1;
                        targetPlayerEnd=getCur1()+diceNo;
                    //    console.log("Target player end :"+targetPlayerEnd +"1");
                    }
                    else if(key==52)//4
                    {
                        if(getCur2()<0)
                        {
                            if( diceNo<6)
                            {
                                return;
                            }  
                            else
                            {
                                diceNo=1;
                            }
                        } else
                        {
                            if((getCur2()+diceNo)>56){
                                return;
                            }
                        } 

                        selectedTokenNo=2;
                        targetPlayerEnd=getCur2()+diceNo;
                      //  console.log("Target player end :"+targetPlayerEnd +"2");
                    }else if(key==54)//6
                    {
                        if(getCur3()<0)
                        {
                            if( diceNo<6)
                            {
                                return;
                            }  
                            else
                            {
                                diceNo=1;
                            }
                        }
                          else
                        {
                            if((getCur3()+diceNo)>56){
                                return;
                            }
                        } 

                        selectedTokenNo=3;
                        targetPlayerEnd=getCur3()+diceNo;
                     //   console.log("Target player end :"+targetPlayerEnd +"3");
                    }else if(key==56)//8
                    {
                        if(getCur4()<0)
                        {
                            if( diceNo<6)
                            {
                                return;
                            }  
                            else
                            {
                                diceNo=1;
                            }
                        } 
                         else
                        {
                            if((getCur4()+diceNo)>56){
                                return;
                            }
                        } 

                        selectedTokenNo=4;
                        targetPlayerEnd=getCur4()+diceNo;
                   //     console.log("Target player end :"+targetPlayerEnd +"4");
                    }else{

                        return;
                    }











                    setSelectionTokenStatus(false);
                    //selectTokenStatus=false;
                //    playerReady=true;
                    setPlayerReady(true);
                    timer=0.3;//So that first move is instant.
                }

               
 
            }
            else if(gameOverStatus)
            {
                console.log("Game Over!!");
                if(key==53){
                   
                    handleRestart();
                    //Restart.
                
                }else if(key==54){
                    //Home.
                    //Press any key status.
                    handleHome();

                }
            }

        }

      //  debugbadges();

        if(gameOverStatus)
        {
        //    console.log("Stop executing below code."); 
            return;
        }
        if(gamePaused)
        {
         //   console.log("Stop executing below code."); 
            return;
        }

        if(animateDiceStatus){
            animateDice(deltaTime);
        //    console.log("Animating dice!!!");
        }

        if(shouldObserverDiceResult){
            diceResultObservance(deltaTime);
        }


        if(gameStatus)
        {
        if(getChanceStatus()==true)
        //if(chancePlayerStatus==true)
        {
           // animateBG=true;
          
           animateBG(getColor(),deltaTime);
             //if(diceRolledStatus)
             if(getDiceRolledStatus())
             {
                 
                //if(selectTokenStatus==false &&  getPlayerReady())//playerReady==true) 
                
                if(!getSelectTokenStatus() &&  getPlayerReady())
                {
                    
                    //Player has selected his token and dice no is ready ,update your movement.
                    if(timer>=animTimer)
                    {
                       movePlayer( getColor(),selectedTokenNo,false);
                       timer=0;
                    }
                   
                   animateMarker(getColor(),selectedTokenNo,deltaTime);
                   timer+=deltaTime;
                } 
                
                
             }

        
             //if(selectTokenStatus)
            if(getSelectTokenStatus())
            {
                updateBadges(deltaTime,getColor());
            }

            if(getShouldRollDiceStatus() && !getDiceRolledStatus())
            {
                updatePointers(deltaTime,false);
            }
              
            //  console.log("STILL HERE");
        }
       // else if(chanceAIStatus==true)
        else if(getAIChanceStatus()==true)
       {
     //   console.log("STEP 1.2 "); 
          // animateBG(enemyColor[0],deltaTime);
          animateBG( getColorEnemy(),deltaTime);
            /*if(!aiPrepared)
            {
             
                //Roll the dice.
 
 

                aiPrepared=true;
                
             
                
            }
            else*/
            {
                if(!getAIReactedStatus())
                {
                    // console.log("STEP 1.3 "); 

                    if(aiReactionTimer>1.0 ) 
                    {
                        // console.log("STEP 2 :"+colorCounter);

                        setAIReactedStatus(true);
                        aiReactionTimer=0;
                        animateDiceStatus=true;
                        hidePointers();
                                   
                    }
                    else
                    {

                        aiReactionTimer+=deltaTime;
                        updatePointers(deltaTime,true);
                        // console.log("STEP 1.5 :"+colorCounter+":: AI_R :"+aiReactionTimer);                      
                    }

                    return;

                }
                

                
               // if(aiReactedStatus && aiCanMove)
               if(getAIReactedStatus() && getAICanMoveStatus()) 
               {
               //  console.log("STEP 4");

                    if(timer>=animTimer)
                    {
                      //  aiReady=true;
                        setAIReadyStatus(true);
                       // movePlayer(enemyColor[0],selectedTokenNo,true);
                        movePlayer(getColorEnemy(),selectedTokenNo,true); 
                       timer=0;
                     }
                    timer+=deltaTime;
                }
                if(getAIReadyStatus())
                {
                 //   animateMarker(enemyColor[0],selectedTokenNo,deltaTime);
                 animateMarker(getColorEnemy(),selectedTokenNo,deltaTime);
                }
            }

            

            
        }
        else if(animateKillStatus==true)
        {
            if(timer>=0.05)
            {
                animateKill();
                timer=0;
            }
            timer+=deltaTime;

        }
    }
       
    }

 


    function handleRestart(){
      //  showAds(1);
      //showAds();
         showAds();
        resetVariables();
        initPlaces();

        gameOverStatus=false;
       gameStatus=true;
       gamePaused=false;
       

    }
    function handleHome(){
        resetVariables();
        gameOverStatus=false;
        menuStatus=true;
        modeStatus=false;
        selectColorStatus=false;
        gameStatus=false;
        resetGame();
    }

     

};
