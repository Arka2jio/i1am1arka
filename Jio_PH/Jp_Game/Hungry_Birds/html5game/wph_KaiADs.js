function getKaiADs(){
	if (typeof getKaiAd !== 'undefined') {
		getKaiAd({
			publisher: 'ed3d6803-8550-4fc7-be5b-092dfd785e91',
			app: 'Hungry Birds',
			slot: 'Default',
			test: 0,
			onerror: err => console.error('Custom catch:', err),
			onready: ad => {
				// Ad is resolved, loaded, and is ready to display
				gml_Script_gmcallback_KaiADisready(); //interstitial ready
				// calling 'display' will display the ad
				//ad.call('display')
			}
		})
	}
}

kaiBanner = null;

function showKaiBanner(){
    if (typeof getKaiAd !== 'undefined') {
        var adContainer;
        var adTabIndex;
        
        adContainer = document.getElementById('ad-container');
        getKaiAd({
                publisher: 'ed3d6803-8550-4fc7-be5b-092dfd785e91',
                app: 'Hungry Birds',
                slot: 'Default',
                h: 60,
                w: 224,
                container: adContainer,
                test: 0,
                onerror: err => console.error('Custom catch:', err),
                onready: ad => {
                    ad.call('display', {
                        tabindex: adTabIndex,
                        navClass: 'navItem',
                        display: 'block'
                    })

                    //ad.on('close', () => gml_Script_gmcallback_KaiAdClosed() )
                    //ad.on('display', () => gml_Script_gmcallback_KaiAdShowed() )

                    kaiBanner = ad
                    ad.on('display', () => gml_Script_gmcallback_KaiBannerShown() )
                }
        })  
     }
}

function clickBanner(){
    if (kaiBanner != null){
        kaiBanner.call('click');
    }
}

function closeBanner(close){
    if (kaiBanner != null){
        var containerAD = document.getElementById("ad-container");
        if (close){
            //kaiBanner.call('close');
            containerAD.style.display = "none";
            gml_Script_gmcallback_KaiBannerClosed();
        }
        else{
            containerAD.style.display = "block";
            gml_Script_gmcallback_KaiBannerShown();
        }
    }
}

function showKaiInterstitial(){
	if (typeof getKaiAd !== 'undefined') {
		getKaiAd({
			publisher: 'ed3d6803-8550-4fc7-be5b-092dfd785e91',
			app: 'Hungry Birds',
			slot: 'Default',
			test: 0,
			onerror: err => console.error('Custom catch:', err),
			onready: ad => {
				ad.call('display')

				ad.on('close', () => gml_Script_gmcallback_KaiAdClosed() )
				ad.on('display', () => gml_Script_gmcallback_KaiAdShowed() )
			}
		})	
	}
}

function vibration(ms){
    navigator.vibrate = navigator.vibrate ||
                  navigator.webkitVibrate ||
                  navigator.mozVibrate || 
                  navigator.msVibrate;
    if (navigator.vibrate) {             
		window.navigator.vibrate(ms);
    }
	
}

/////

function handleKeyDown(evt) {
    switch (evt.key) {
        case 'Enter':
        case 'Call':
        case '5':
            // Action case press center key
          	gml_Script_gmcallback_enterKey();
        break;

        case 'SoftLeft':
        	gml_Script_gmcallback_softLeft();
        break;

        case 'SoftRight':
        	gml_Script_gmcallback_softRight();
        break;

        case 'ArrowLeft':
        case '4':
        	gml_Script_gmcallback_left();
        break;

        case 'ArrowRight':
        case '6':
        	gml_Script_gmcallback_right();
        break;

        case 'ArrowUp':
        	gml_Script_gmcallback_up();
        break;

        case 'ArrowDown':
        	gml_Script_gmcallback_down();
        break;
        

        /*case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        	gml_Script_gmcallback_number(null, null, evt.key);
        break;*/

       	case 'Backspace':
        case 'End':
        case 'Escape':
        case 'Home':
        case 'Delete':
        case 'EndCall':
       		gml_Script_gmcallback_back();
       	break;

    }
}

function handleKeyUp(evt) {
    switch (evt.key) {
        case 'Enter':
        case 'Call':
        case '5':
            // Action case release center key
          	gml_Script_gmcallback_enterKeyRe();
        break;

        case 'SoftLeft':
        	gml_Script_gmcallback_softLeftRe();
        break;

        case 'SoftRight':
        	gml_Script_gmcallback_softRightRe();
        break;

        case 'ArrowLeft':
        case '4':
        	gml_Script_gmcallback_leftRe();
        break;

        case 'ArrowRight':
        case '6':
        	gml_Script_gmcallback_rightRe();
        break;

        case 'ArrowUp':
        	gml_Script_gmcallback_upRe();
        break;

        case 'ArrowDown':
        	gml_Script_gmcallback_downRe();
        break;

        /*case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        	gml_Script_gmcallback_numberRe(null, null, evt.key);
        break;*/

       	case 'Backspace':
        case 'End':
        case 'Escape':
        case 'Home':
        case 'Delete':
        case 'EndCall':
       		gml_Script_gmcallback_backRe();
       	break;

       
    }
}

function repFocus(){
	if (document.hasFocus()){
		gml_Script_gmcallback_GD_resume();
	}
}

function InitKaiOS(){
   
	document.addEventListener('keydown', handleKeyDown);
	document.addEventListener('keyup', handleKeyUp);
	document.addEventListener("visibilitychange", function() {
	  if (document.visibilityState === 'visible') {
	    //gmcallback_GD_resume();
	  	if (document.hasFocus()){
	    	gml_Script_gmcallback_GD_resume();
	  	}
	  	else{
	  		gml_Script_gmcallback_checkFocus();
	  	}
	    
	  } else {
	    gml_Script_gmcallback_GD_pause();
	  }
	});
	
}

function ExitKaiOS(){
	window.close();
}