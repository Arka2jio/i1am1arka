var titleTimer=document.getElementById("titleTimer");var free_timer=document.getElementById("free_timer");var free_timer_text=document.getElementById("firstfreeText");var free_timer_sec=document.getElementById("lastfreeText");var currTime=15;free_timer.innerHTML=currTime;var free_timerTimer=-1;var browserLangIndex=-1;var errorTimer;var errorWaitTime=15;var errorTimes=0;var MAX_ERROR_TIMES=2;var dimensionErrorTimes=0;var MAX_DIMENSION_ERROR_TIMES=3;var freeManager;var freeLoader;var freeDisplayContainer;var intervalTimer;var freeContainer=document.getElementById("freeContainer");var orgW=0;var orgH=0;var lastOrientation=0;var isCountDown=false;var free_Width=0;var free_Height=0;var iOSVersion=parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||false;var isPC=navigator.userAgent.indexOf("Windows")>-1&&navigator.userAgent.indexOf("Windows Phone")<0;var isPad=navigator.userAgent.indexOf("iPad")>-1;var freeObj;var locFree=[];locFree[0]=["en","Ad will close in","s"];locFree[1]=["vi","Quảng cáo sẽ đóng sau","s"];locFree[2]=["fr","La publicité disparaîtra dans","s"];locFree[3]=["de","Werbung schließt sich in","s"];locFree[4]=["es","El anuncio se cerrará en","s"];locFree[5]=["it","La pubblicità si chiuderà tra","s"];locFree[6]=["br","O anúncio vai desaparecer em","s"];locFree[7]=["tr","Reklam","s içinde kapanacak"];locFree[8]=["ru","Окно с рекламой закроется через","s"];locFree[9]=["id","Iklan akan ditutup dalam","s"];locFree[10]=["th","โฆษณาจะปิดใน","s"];locFree[11]=["tw","廣告剩餘時間：","s"];locFree[12]=["cn","广告关闭倒计时：","s"];function createfreeDisplayContainer(){freeDisplayContainer=new google.ima.AdDisplayContainer(freeContainer)}function requestFree(){titleTimer.style.display="none";if(parent.lang.length<2){if(browserLangIndex<0){var a="";if(navigator.browserLanguage){a=navigator.browserLanguage.toLowerCase()}else{a=navigator.language.toLowerCase()}var n=locFree.length;for(var b=0;b<n;b++){if(a.indexOf(locFree[b][0])>=0){browserLangIndex=b;break}}if(browserLangIndex<0){browserLangIndex=0}}}else{var n=locFree.length;for(var b=0;b<n;b++){if(parent.lang.indexOf(locFree[b][0])>=0){browserLangIndex=b;break}}if(browserLangIndex<0){browserLangIndex=0}}free_timer_text.innerHTML=locFree[browserLangIndex][1];free_timer_sec.innerHTML=locFree[browserLangIndex][2];errorWaitTime=15;isCountDown=!false;a=navigator.browserLanguage?navigator.browserLanguage.toLowerCase():navigator.language.toLowerCase();google.ima.settings.setLocale(a);createfreeDisplayContainer();freeDisplayContainer.initialize();freeLoader=new google.ima.AdsLoader(freeDisplayContainer);freeLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,onfreeManagerLoaded,false);freeLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,onFreeError,false);var k=new google.ima.AdsRequest();if(parent.GameStarted){console.log("parent['adType']="+parent.adType);if(parent.adType==2){parent.dataLayer.push({adNetwork:"AFG",adPosition:"mid-roll",adHtmlContainer:"freeContainer",adDescriptionUrl:"http%3A%2F%2Fludigames.com%2Fdetails%2F"+parent.productKey,event:"displayAd"})}else{console.log("Video");parent.dataLayer.push({adNetwork:"AFG",adPosition:"mid-roll-video",adHtmlContainer:"freeContainer",adDescriptionUrl:"http%3A%2F%2Fludigames.com%2Fdetails%2F"+parent.productKey,event:"displayAd"})}}else{parent.dataLayer.push({adNetwork:"AFG",adPosition:"pre-roll",adHtmlContainer:"freeContainer",adDescriptionUrl:"http%3A%2F%2Fludigames.com%2Fdetails%2F"+parent.productKey,event:"displayAd"})}k.adTagUrl=parent.adUrl;var m=window,h=document,f=h.documentElement,c=h.getElementsByTagName("body")[0],l=m.innerWidth||f.clientWidth||c.clientWidth,j=m.innerHeight||f.clientHeight||c.clientHeight;k.linearAdSlotWidth=l;k.linearAdSlotHeight=j;k.nonLinearAdSlotWidth=l;k.nonLinearAdSlotHeight=j;k.forceNonLinearFullSlot=true;if(l!=orgW){orgW=l}if(j!=orgH){orgH=j}freeLoader.requestAds(k);errorTimer=setInterval(function(){errorWaitTime-=1;if(errorWaitTime<0){showGame()}},1000)}function onfreeManagerLoaded(i){freeManager=i.getAdsManager(freeContainer);freeManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,onFreeError);freeManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,onContentPauseRequested);freeManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,onContentResumeRequested);freeManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED,onFreeEvent);freeManager.addEventListener(google.ima.AdEvent.Type.LOADED,onFreeEvent);freeManager.addEventListener(google.ima.AdEvent.Type.STARTED,onFreeEvent);freeManager.addEventListener(google.ima.AdEvent.Type.COMPLETE,onFreeEvent);freeManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE,onFreeEvent);try{var b=window,j=document,h=j.documentElement,f=j.getElementsByTagName("body")[0],a=b.innerWidth||h.clientWidth||f.clientWidth,k=b.innerHeight||h.clientHeight||f.clientHeight;freeManager.init(a,k,google.ima.ViewMode.FULLSCREEN);freeManager.start()}catch(c){showGame()}}function onFreeEvent(a){freeObj=a.getAd();switch(a.type){case google.ima.AdEvent.Type.LOADED:parent.document.getElementById("freeFrame").style.display="inline";clearInterval(errorTimer);if(!freeObj.isLinear()){}else{currTime=15000}break;case google.ima.AdEvent.Type.STARTED:if(isCountDown){isCountDown=false;free_timerTimer=setInterval(countdown,1000);alignFree(freeObj)}if(freeObj.isLinear()){}if(!parent.GameStarted){parent.GameStarted=true}break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:case google.ima.AdEvent.Type.COMPLETE:if(freeObj.isLinear()){clearInterval(intervalTimer)}showGame();break;case google.ima.AdEvent.Type.USER_CLOSE:showGame();break}}function onFreeError(a){if(a.getError().getErrorCode()==google.ima.AdError.ErrorCode.NONLINEAR_DIMENSIONS_ERROR){errorTimes=0;dimensionErrorTimes++}errorTimes++;if((errorTimes>=MAX_ERROR_TIMES)||(dimensionErrorTimes>=MAX_DIMENSION_ERROR_TIMES)){showGame()}else{try{parent.adType=2;titleTimer.style.display="none";clearInterval(free_timerTimer);free_timerTimer=-1;clearInterval(errorTimer);errorWaitTime=15;currTime=15;free_timer.innerHTML=currTime;if(freeLoader!=null){freeLoader.destroy()}freeLoader=undefined;if(freeDisplayContainer!=null){freeDisplayContainer.destroy()}freeDisplayContainer=undefined;if(freeManager!=null){freeManager.destroy()}freeManager=undefined}catch(b){}requestFree()}}function onContentPauseRequested(){}function onContentResumeRequested(){}function showGame(){try{titleTimer.style.display="none";clearInterval(free_timerTimer);free_timerTimer=-1;clearInterval(errorTimer);errorWaitTime=15;errorTimes=0;dimensionErrorTimes=0;currTime=15;free_timer.innerHTML=currTime;if(freeLoader!=null){freeLoader.destroy()}freeLoader=undefined;if(freeDisplayContainer!=null){freeDisplayContainer.destroy()}freeDisplayContainer=undefined;if(freeManager!=null){freeManager.destroy()}freeManager=undefined;parent.document.getElementById("freeBG").style.opacity=100}catch(a){}parent.close_freeFrame()}function alignFree(h){if(typeof(freeManager)=="undefined"){return}if(isCountDown){return}if(typeof(h)=="undefined"){return}var n=window,k=document,j=k.documentElement,c=k.getElementsByTagName("body")[0],m=n.innerWidth||j.clientWidth||c.clientWidth,l=n.innerHeight||j.clientHeight||c.clientHeight;free_Width=h.getWidth();free_Height=h.getHeight();var a=free_Width/m>free_Height/l?free_Width/m:free_Height/l;if(a>1){a*=100;a=Math.round(a)}else{a=100}if(!h.isLinear()){if(m>l&&free_Width!=0&&free_Height/2+l/2+31>l&&!isPad){freeContainer.style.marginTop=(free_Height-l-50/2-(iOSVersion>=8?18:0))+"px"}else{freeContainer.style.marginTop=(free_Height/2+(free_Width==0?free_Height-free_Height/4:0)-l/2-(iOSVersion>=8?18:0))+"px"}if(m>l&&free_Width==0&&!isPC&&!isPad){freeContainer.style.marginBottom=(free_Height*3-l-45+(iOSVersion>=8?18:0))+"px"}freeContainer.style.marginLeft=-9}else{freeContainer.style.marginTop=-9;freeContainer.style.marginLeft=-9}freeContainer.childNodes[0].style.margin="auto";freeContainer.childNodes[0].style.width=a+"%";freeContainer.childNodes[0].style.height=a+"%";var f=freeContainer.childNodes[0].childNodes.length;for(var b=0;b<f;b++){freeContainer.childNodes[0].childNodes[b].style.margin="auto";freeContainer.childNodes[0].childNodes[b].style.width=a+"%";freeContainer.childNodes[0].childNodes[b].style.height=a+"%"}titleTimer.style.textAlign="center";if(!h.isLinear()){if(m>l){if(isPC||isPad){titleTimer.style.top=(free_Height/2+(free_Width==0?free_Height-free_Height/4:0)+l/2+1+50-(iOSVersion>=8?18:0))+"px"}else{if(free_Width==0){titleTimer.style.top=l+15-(iOSVersion>=8?18:0)+"px"}else{titleTimer.style.top=l-(iOSVersion>=8?18:0)+"px"}}}else{titleTimer.style.top=(free_Height/2+(free_Width==0?free_Height-free_Height/4:0)+l/2+1-(iOSVersion>=8?18:0))+"px"}titleTimer.style.display="inline"}else{titleTimer.style.display="none"}}function countdown(){currTime-=1;free_timer.innerHTML=currTime+1;if(currTime==13){alignFree(freeObj)}if(currTime<0){showGame()}}function resumeFree(){if(typeof(freeManager)!="undefined"){if(free_timerTimer!==-1){clearInterval(free_timerTimer)}free_timerTimer=setInterval(countdown,1000)}}function suspendFree(){if(typeof(freeManager)!="undefined"){if(free_timerTimer!==-1){clearInterval(free_timerTimer);free_timerTimer=-1}}}requestFree();errorTimes=0;dimensionErrorTimes=0;window.requestFree=requestFree;window.createfreeDisplayContainer=createfreeDisplayContainer;window.onfreeManagerLoaded=onfreeManagerLoaded;window.onFreeEvent=onFreeEvent;window.onFreeError=onFreeError;window.onContentPauseRequested=onContentPauseRequested;window.onContentResumeRequested=onContentResumeRequested;window.showGame=showGame;window.alignFree=alignFree;window.countdown=countdown;window.resumeFree=resumeFree;window.suspendFree=suspendFree;