var game = document.getElementById("gm4html5_div_id");
var adsBool;
function fullscreen()
{
	var elem = game;
	
	if ( elem.fullscreenEnabled ) {
            elem.mozRequestFullScreen();
        } 
}

function exitapp()
{
	window.close();
}

function onCreate()
{
	setupBasicKeys();
	cacheAds();
}

function setupBasicKeys()
{
	//var jioConf = {"gameName": "Dont Drop","gameVersion": "1.0.0", "autoControl": ["volume", "exit"] };
    //var jioSDK = new Jiogames(jioConf);
}

function cacheAds() {
		getKaiAd({
	publisher: 'dd43168c-29e9-482c-8b3e-2c45fca5afb0',
	app: 'Dont Drop',
	slot: 'DontDrop',
	onerror: err => console.error('Custom catch:', err),
	onready: ad => {
		// Ad is resolved, loaded, and is ready to display
		
		// calling 'display' will display the ad
		//ad.call('display')
		this.interstitialAd =ad;
	}
	})
	}


			function showAdsKaiOs()
			{
				if(this.interstitialAd!=null){

					this.interstitialAd.call('display')
					this.interstitialAd.on('close', () => this.interstitialAd=null )
					adsBool = true;
					console.log("ads displayed   "+adsBool);

				}else{
					adsBool = false;
					console.log("ads not available    "+adsBool);
				}
			return adsBool;
		}

function showAds() {
        var AdPlacementId = 'image_ad8';
        VMAX.cacheAd(AdPlacementId);

        VMAX.onAdReady = function(AdPlacementId) {
            VMAX.showAd(AdPlacementId);
        }
        VMAX.onAdError = function(AdPlacementId, errorCode) {
            console.log("coming into the error case");
            console.log(errorCode);
        }
    }
	function setScore(score){
	}
function postScore(score)
	{
		//var jioConf = { "autoControl": ["volume", "exit"],
       //            "gameName": "Dont Drop", "gameVersion": "1.0.0"};  
      //  var jioSDK = new Jiogames(jioConf);
		//jioSDK.postScore(score);  
	}