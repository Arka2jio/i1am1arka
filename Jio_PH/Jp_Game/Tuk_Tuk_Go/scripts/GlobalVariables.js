var highScore = 0;
var globalVolume = 1;
var gameMute = false;

    var openAdEvent = new CustomEvent('showad', ()=>{console.log('ShowAd Event Created')});
    var closeAdevent = new CustomEvent('closead', ()=>{console.log('CloseAd Event Created')});

    var openBannerAd = new CustomEvent('showbannerad', ()=>{console.log('Close Banner Ad Event Created')});    
    var hideBannerAd = new CustomEvent('hidebannerad', ()=>{console.log('Hide Banner Ad Event Created')});  

    var adDisplayed = 0;    
    var bannerAdsReady = false;


InitKaiAds();
InitBannerAds();


function InitKaiAds() {
    // create and dispatch the event
    
    //this.clickAdEvent = new CustomEvent('clickad', ()=>{console.log('Click Ad Event Created')});

    //document.getElementById("ad-container").style.visibility = "hidden";
   
      //container: document.getElementById('ad-container'),      
        
        document.addEventListener('showad', function(e) { 
          console.log("Calling to Show Ads")
          //document.getElementById("ad-container").style.visibility = "visible";
          getKaiAd({
            publisher: "c06b842b-26f6-493f-b7f3-fd1d1265e2eb",
            app: "TukTukGo",
            slot: "",
            test: 0,
            onerror: function(t) {
                console.error("Custom catch:", t);

            },
            onready: function(t) {
                console.log("Ad is Loaded"),
                adDisplayed = 1;
                t.call("display")

                t.on('close', () => adDisplayed = 0);
                t.on('display', () => adDisplayed = 1);

            }

        });
        });

        document.addEventListener('closead', function(e) { 
          //adsReady = false;
          //document.getElementById("ad-container").style.visibility = "hidden";
        });    
  }



  function InitBannerAds() {    
      //document.getElementById("ads-banner").style.top = "50px";    
        
    this.openBannerAd = new CustomEvent('showbannerad', ()=>{console.log('Close Banner Ad Event Created')});
    this.hideBannerAd = new CustomEvent('hidebannerad', ()=>{console.log('Hide Banner Ad Event Created')});
    this.clickBannerAd = new CustomEvent('clickbannerad', ()=>{console.log('Click Banner Ad Event Created')});
      
      document.addEventListener('showbannerad', function(e) {       
          getKaiAd({        
              publisher: 'c06b842b-26f6-493f-b7f3-fd1d1265e2eb',        
              app: 'TukTukGo',        
              slot: '',        
              test: 0,                
              h: 50,        
              w: 240,        // Max supported size is 240x264        
              
              container: document.getElementById('ads-banner'),              
              onerror: err => console.error('Custom catch:', err),        
              onready: function(t) {          
                  // Ad is resolved, loaded, and is ready to be displayed          
                  // calling 'display' will display the ad                
                  t.call('display', {            
                      // In KaiOS the app developer is responsible            
                      // for user navigation, and as such can provide            
                      // navigational className and/or a tabindex                
                      
                      tabindex: 0,                  
                      // if the application is using            
                      // a classname to navigate            
                      // this classname will be applied            
                      // to the container            
                      navClass: 'items',                  
                      //display style will be applied            
                      // to the container block or inline-block            
                      display: 'inline-block',          
                    })
                    
                    document.addEventListener('clickbannerad', function(e) { 
                      t.call('click')
                      console.log('Click Banner Ads')
                    });
          
                    t.on('click', ()=> {
                     console.log("Banner Ads clicked")
                    })
          
                    t.on('close', ()=> {
                      bannerAdsReady = false;
                      console.log("Banner Ads closed")
                    })
          
                     t.on('display', ()=> {
                      bannerAdsReady = true;
                      console.log("Banner Ads display")
                    })
                }      
            })    
        });  
    }  
    
    function ShowBannerAds() {    
        document.dispatchEvent(this.openBannerAd)    
        document.getElementById("ads-banner").style.visibility = "visible";  
    }  
    
    function HideBannerAds() {        
     bannerAdsReady = false;
     document.getElementById("ads-banner").style.visibility = "hidden";  
    }

    function ClickBannerAds () {
      console.log('Call Click Banner Ads')
      document.dispatchEvent(this.clickBannerAd)
     }

  function ShowKaiAds () {
    console.log('Show Ads')
    document.dispatchEvent(openAdEvent)
  }
  
  function CloseKaiAds () {
    console.log('Close Ads')
    document.dispatchEvent(closeAdevent)
  }