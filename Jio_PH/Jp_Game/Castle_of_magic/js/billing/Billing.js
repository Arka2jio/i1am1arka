(function(D,n){var b="TU30";var l="";var f=!true;var v=true;var j=true;var q=true;var g={};var e={};var d={};var i=null;function a(){e.igpcode=d.igpcode=b;e.platform_code=l;return new Promise(function(F,E){d.roaming=false;d.mnc="ABSENCE";d.mcc="ABSENCE";d.imei="000000000000000";d.sim_operator_name="ABSENCE";d.sim_country_iso="ABSENCE";d.network_country_iso="ABSENCE";d.network_operator_name="ABSENCE";d.simNotSupport=false;d.profileLoaded=false;d.profileProcessed=false;if(f){d.roaming=false;d.mnc="13";d.mcc="262";d.sim_operator_name="";d.sim_country_iso="";d.network_country_iso="";d.network_operator_name="";d.build_device="Alcatel GO FLIP";d.build_model="eng.zxliu.20170310.174358"}if(navigator.mozMobileConnections){var H=navigator.mozMobileConnections[0]["lastKnownHomeNetwork"];if(H!=""){d.mnc=H.substr(H.indexOf("-")+1,2);d.mcc=H.substr(0,3)}d.sim_operator_name="";d.network_operator_name="";d.sim_country_iso="";d.network_country_iso="";d.roaming="false"}var G=function(I){return new Promise(function(K,J){navigator.mozSettings["createLock"]().get(I).onsuccess=function(){K(this.result[I])}})};if(navigator.mozSettings){Promise.all([G("deviceinfo.product_model"),G("deviceinfo.build_number")]).then(function(I){console.log("Promise all return: "+I);d.build_device=I[0];d.build_model=I[1];F()})}else{F()}if(d.mcc=="ABSENCE"||d.mnc=="ABSENCE"||d.mcc==""||d.mnc==""){d.simNotSupport=false;d.profileProcessed=true}else{s("profiles.xml").then(function(O){var K=(new DOMParser()).parseFromString(O,"text/xml");if(K){var M=K.getElementsByTagName("mccmnc");var I=null;var J=d.mcc+d.mnc;for(var L=0;L<M.length;L++){if(M[L].childNodes[0]==n){continue}var N=M[L].childNodes[0].nodeValue;if(N.indexOf(J)>=0){I=M[L].parentElement.parentElement;break}}if(I){d.simNotSupport=false}else{d.simNotSupport=true}}d.profileProcessed=true})}})}function r(){var E="https://secure.gameloft.com/android/unlock/android_2d.php";var G="game="+e.igpcode+"&network_country_ISO="+d.network_country_iso+"&network_operator="+d.mcc+d.mnc+"&network_operator_name="+d.network_operator_name+"&sim_country_iso="+d.sim_country_iso+"&sim_operator="+d.mcc+d.mnc+"&sim_operator_name="+d.sim_operator_name+"&is_network_roaming="+d.roaming+"&android_build_device="+d.build_device+"&android_build_model="+d.build_model+"&v=1.4&ptype=unlock&rbit="+Math.random();var F=E+"?"+G;console.log("profile url: "+F);return F}function s(E){return new Promise(function(G,F){console.log("get xml from: "+E);var H=new XMLHttpRequest({mozSystem:true});H.onreadystatechange=function(){if(this.readyState==4){G(this.responseText)}};H.open("GET",E,true);H.send()})}function y(){d.profileLoaded=false;return new Promise(function(F,E){console.log("requestProfile");s(r()).then(function(K){var H=(new DOMParser()).parseFromString(K,"text/xml");if(K!=""&&c(H)){var G=(new XMLSerializer()).serializeToString(H);localStorage.setItem(d.igpcode+"BackupProfile",G);e.embedded=0;console.log("use online profile");F()}else{var J=localStorage.getItem(d.igpcode+"BackupProfile","");var I=(new DOMParser()).parseFromString(J,"text/xml");if(c(I)){console.log("use cached profile");e.embedded=2;F()}else{s("profiles.xml").then(function(R){var N=(new DOMParser()).parseFromString(R,"text/xml");if(N==null){console.log("Can not read offline profiles");E();return}var P=N.getElementsByTagName("mccmnc");var L=null;var M=d.mcc+d.mnc;for(var O=0;O<P.length;O++){if(P[O].childNodes[0]==n){continue}var Q=P[O].childNodes[0].nodeValue;if(Q.indexOf(M)>=0){L=P[O].parentElement.parentElement;console.log("selected :"+P[O].parentElement.attributes.name.nodeValue);break}}if(c(L)){console.log("use offline profile");e.embedded=1;F()}else{console.log("Can not find sutable mccmnc: "+M);E()}})}}d.profileLoaded=true})})}function c(K){console.log("parseProfile");if(K==null||K==n||K==false){return false}try{var J=false;var I=false;var F=K.getElementsByTagName("mcc");for(var G=0;G<F.length;G++){if(F[G].childNodes[0]&&F[G].childNodes[0].nodeValue.indexOf(d.mcc)>-1){J=true;break}}var E=K.getElementsByTagName("mnc");for(var G=0;G<E.length;G++){if(E[G].childNodes[0]&&E[G].childNodes[0].nodeValue.indexOf(d.mnc)>-1){I=true;break}}if(J==false||I==false){if(d.mcc!="ABSENCE"&&d.mnc!="ABSENCE"&&d.mcc!=""&&d.mnc!=""){d.simNotSupport=true}else{d.simNotSupport=false}throw"mcc or mnc is not match with device"}else{d.simNotSupport=false}if(K.getElementsByTagName("platform_id")[0]){e.platform_id=K.getElementsByTagName("platform_id")[0].childNodes[0].data}else{e.platform_id=e.platform_code}var H=K.getElementsByTagName("profile")[0]||K;if(e.alias=H.getElementsByTagName("alias")[0]&&H.getElementsByTagName("alias")[0].childNodes[0]){e.alias=H.getElementsByTagName("alias")[0].childNodes[0].nodeValue}else{e.alias=""}e.profile_id=H.attributes.id.nodeValue;e.server_number=H.getElementsByTagName("server_number")[0].childNodes[0].nodeValue;e.tnc_string=H.getElementsByTagName("language")[0].childNodes[0].data;e.tnc_lang=H.getElementsByTagName("language")[0].getAttribute("value");e.buy_string=H.getElementsByTagName("buyscreen")[0].childNodes[0].data;e.buy_lang=H.getElementsByTagName("buyscreen")[0].getAttribute("value");e.game_price=H.getElementsByTagName("formatted_price")[0].childNodes[0].nodeValue;e.ready=true}catch(L){console.log("can not parse profile: "+L);e.ready=false}return e.ready}function C(){var G="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";var F="";for(var E=0;E<5;E++){F+=G.charAt(Math.floor(Math.random()*G.length))}console.log("createUniqueCodeV2: "+F);return F}function A(G,F){var H=G.length;for(var E=H;E<F;E++){G="0"+G}return G}function t(H,F){var E=[];var I=H.length;for(var G=0;G<I;G++){E[G>>>2]|=(255&H[G])<<((G&3)<<3)}if(F==true){var I=(((H.length&3)==0)?(H.length>>>2):((H.length>>>2)+1));E[I]=H.length}return E}function p(G){var E=[];var H=G.length<<2;for(var F=0;F<H;F++){E[F]=(((G[F>>>2]>>>((F&3)<<3))<<24)>>24)}return E}function x(J,G){var F=[];var E=0;for(var I=0;I<J.length;I+=8,E++){F[E]=parseInt(J.substr(I,8),2)}var H=t(F,G);return H}function o(I){var F=[];var E=0;for(var H=0;H<I.length;H+=2,E++){F[E]=parseInt(I.substr(H,2),16)}var G=t(F);return G}function z(H,O){var G=H.length-1;if(G<1){return H}if(O.length<4){for(var I=O.length;I<4;I++){O[I]=0}}var L=H[G],M=H[0],N=2654435769,J=0,K;var F,E=(6+52/(G+1))|0;while(E-->0){J=J+N;K=J>>>2&3;for(F=0;F<G;F++){M=H[F+1];L=H[F]+=(L>>>5^M<<2)+(M>>>3^L<<4)^(J^M)+(O[F&3^K]^L);H[F]=H[F]|0}M=H[0];L=H[G]+=(L>>>5^M<<2)+(M>>>3^L<<4)^(J^M)+(O[F&3^K]^L);H[G]=H[G]|0}return p(H)}function h(F){var I="0123456789ABCDEFGHJKMNPQRSTVWXYZ";var J=[];var H=0,G=0;var E;while(H+4<F.length){J[G+0]=I[(F[H+0]>>>3)&31];J[G+1]=I[(((F[H+0]<<8)|(F[H+1]&255))>>>6)&31];J[G+2]=I[(((F[H+0]<<8)|(F[H+1]&255))>>>1)&31];J[G+3]=I[(((F[H+1]<<8)|(F[H+2]&255))>>>4)&31];J[G+4]=I[(((F[H+2]<<8)|(F[H+3]&255))>>>7)&31];J[G+5]=I[(((F[H+2]<<8)|(F[H+3]&255))>>>2)&31];J[G+6]=I[(((F[H+3]<<8)|(F[H+4]&255))>>>5)&31];J[G+7]=I[(((F[H+3]<<8)|(F[H+4]&255))>>>0)&31];H+=5;G+=8}if(H+4==F.length){J[G+0]=I[(F[H+0]>>>3)&31];J[G+1]=I[(((F[H+0]<<8)|(F[H+1]&255))>>>6)&31];J[G+2]=I[(((F[H+0]<<8)|(F[H+1]&255))>>>1)&31];J[G+3]=I[(((F[H+1]<<8)|(F[H+2]&255))>>>4)&31];J[G+4]=I[(((F[H+2]<<8)|(F[H+3]&255))>>>7)&31];J[G+5]=I[(((F[H+2]<<8)|(F[H+3]&255))>>>2)&31];J[G+6]=I[(((F[H+3]<<8)|0)>>>5)&31];J[G+7]="="}else{if(H+3==F.length){J[G+0]=I[(F[H+0]>>>3)&31];J[G+1]=I[(((F[H+0]<<8)|(F[H+1]&255))>>>6)&31];J[G+2]=I[(((F[H+0]<<8)|(F[H+1]&255))>>>1)&31];J[G+3]=I[(((F[H+1]<<8)|(F[H+2]&255))>>>4)&31];J[G+4]=I[(((F[H+2]<<8)|0)>>>7)&31];J[G+5]="=";J[G+6]="=";J[G+7]="="}else{if(H+2==F.length){J[G+0]=I[(F[H+0]>>>3)&31];J[G+1]=I[(((F[H+0]<<8)|(F[H+1]&255))>>>6)&31];J[G+2]=I[(((F[H+0]<<8)|(F[H+1]&255))>>>1)&31];J[G+3]=I[(((F[H+1]<<8)|0)>>>4)&31];J[G+4]="=";J[G+5]="=";J[G+6]="=";J[G+7]="="}else{if(H+1==F.length){J[G+0]=I[(F[H+0]>>>3)&31];J[G+1]=I[(((F[H+0]<<8)|0)>>>6)&31];J[G+2]="=";J[G+3]="=";J[G+4]="=";J[G+5]="=";J[G+6]="=";J[G+7]="="}}}}return J}function B(){var F=C();localStorage.setItem(d.igpcode+"RandomCode",F);var J=e.alias+" ";if(e.alias==""){J=""}var H="";H+="100000";H+="00";H+="000000";H+=A(parseInt(d.igpcode,36).toString(2),21);H+="011011";H+=A(parseInt(F,36).toString(2),26);H+="000010";H+=A(parseInt(e.platform_id).toString(2),15);H+="000011";H+=A(parseInt(e.profile_id).toString(2),14);H+="000100";H+=A(parseInt("EN",36).toString(2),11);H+="000101";H+=A(parseInt("0").toString(2),6);H+="010110";H+=A(parseInt(e.embedded).toString(2),2);if(H.length%8!=0){H+="0000000".substr(0,8-H.length%8)}var G=o("57786eaf7b1c579364a8b96a4d76e5e4");var K=x(H,true);var E=z(K,G);var I=h(E);J+=I.join("");return J}function u(H){var G=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];var P=[34,8,35,25,17,20,14,21,31,10,16,12,29,5,7,27,13,24,3,30,23,32,0,4,9,22,1,18,2,11,26,6,19,28,15,33];var N=function(V){var T=[];for(var U=0;U<V.length;U++){var S=G.indexOf(V[U]);if(S>=0){T[U]=P[S]}}return T};var Q=d.igpcode;var E=N(Q);var F=N(H);var J=[];for(var K=0;K<F.length;K++){J[K]=(E[K%4]+F[K])%36}var O=[];O[0]=P[J[0]];var M,L;for(var K=1;K<J.length;K++){M=(O[K-1]^J[K])%36;L=P[M];for(var I=1;I<J.length;I++){M=(L^J[I])%36;L=P[M]}O[K]=L}var R="";for(var K=0;K<O.length;K++){R+=G[O[K]]}return R}function k(){a().then(function(){y().then(function(){},function(){})});if(navigator.mozMobileMessage){navigator.mozMobileMessage.addEventListener("sent",function(E){console.log("Message sent to: "+(E.message.receiver||E.message.receivers));localStorage.setItem(d.igpcode+"BillingPending",1)});navigator.mozMobileMessage.addEventListener("received",function(H){var E=H.message.body;console.log("recieved: "+E);var G=localStorage.getItem(d.igpcode+"RandomCode","");var F=u(G);if(F!=""&&E.indexOf(F)>=0){console.log("Unlock success");clearTimeout(self.buyTimeout);localStorage.setItem(d.igpcode+"IsFull",1);localStorage.setItem(d.igpcode+"BillingPending",0);m(g.ERR_CODE__GAME_UNLOCK_SUCCESS)}})}}k();function m(E){if(i){i(E)}}g.ERR_CODE__GAME_UNLOCK_SUCCESS=1;g.ERR_CODE__GAME_UNLOCK_FAILED=2;g.ERR_CODE__BILLING_NOT_AVAILABLE=3;g.ERR_CODE__UNLOCK_CODE_FAILED=4;g.ERR_CODE__BILLING_INIT_DONE=5;g.setListenner=function(E){i=E};g.isFullVersion=function(){return localStorage.getItem(d.igpcode+"IsFull",0)=="1"};g.isSIMNSupport=function(){return d.simNotSupport};g.isProfileProcessed=function(){return d.profileProcessed};g.profileLoaded=function(){return d.profileLoaded};g.isBillingPending=function(){return localStorage.getItem(d.igpcode+"BillingPending",0)=="1"};g.deviceMCC=function(){return d.mcc};g.isUseSpecificRule=function(F){if(d.mcc=="ABSENCE"||d.mnc=="ABSENCE"||d.mcc==""||d.mnc==""){return false}var E=0;if(d.mcc=="262"||d.mcc=="232"){E=20}else{if(d.mcc=="234"||d.mcc=="235"){E=21}}if(d.mcc=="286"){E=3}return F==E};g.buyFullVersion=function(){console.log("buyFullVersion");if(f){setTimeout(function(){localStorage.setItem(d.igpcode+"BillingPending",1);if(j){console.log("simulate billing success");localStorage.setItem(d.igpcode+"IsFull",1);localStorage.setItem(d.igpcode+"BillingPending",0);m(g.ERR_CODE__GAME_UNLOCK_SUCCESS)}else{console.log("simulate billing failed");m(g.ERR_CODE__GAME_UNLOCK_FAILED)}},10000);return}if(navigator.mozMobileMessage&&e.ready){var E=B();console.log("send ["+E+"] to "+e.server_number);navigator.mozMobileMessage["send"](e.server_number,E);self.buyTimeout=setTimeout(function(){console.log("buy timeout -> unlock failed");m(g.ERR_CODE__GAME_UNLOCK_FAILED)},180000)}else{console.log("unlock failed");m(g.ERR_CODE__GAME_UNLOCK_FAILED)}};g.checkUnlockCode=function(G){if(f){if(q){console.log("simulate unlock code success");localStorage.setItem(d.igpcode+"IsFull",1);localStorage.setItem(d.igpcode+"BillingPending",0);m(g.ERR_CODE__GAME_UNLOCK_SUCCESS)}else{console.log("simulate unlock code failed");m(g.ERR_CODE__UNLOCK_CODE_FAILED)}return}var E=localStorage.getItem(d.igpcode+"RandomCode","");var F=u(E);if(F==G){console.log("Unlock code success");localStorage.setItem(d.igpcode+"IsFull",1);localStorage.setItem(d.igpcode+"BillingPending",0);m(g.ERR_CODE__GAME_UNLOCK_SUCCESS)}else{console.log("Unlock code failed");m(g.ERR_CODE__UNLOCK_CODE_FAILED)}};g.initBilling=function(){console.log("initBilling");if(f){setTimeout(function(){if(!v){console.log("simulate init billing failed - Billing not available");m(g.ERR_CODE__BILLING_NOT_AVAILABLE)}else{console.log("simulate init billing done");m(g.ERR_CODE__BILLING_INIT_DONE)}},5000);return}if(d.mcc=="ABSENCE"||d.mnc=="ABSENCE"||d.mcc==""||d.mnc==""){console.log("sim not available -> billing not available");m(g.ERR_CODE__BILLING_NOT_AVAILABLE);return}if(e.embedded!=0){y().then(function(){m(g.ERR_CODE__BILLING_INIT_DONE)},function(){console.log("can not find profile for SIM");m(g.ERR_CODE__BILLING_NOT_AVAILABLE)})}else{m(g.ERR_CODE__BILLING_INIT_DONE)}};var w="";g.getTnCString=function(){w="TnC";return e.tnc_lang==="AR"?"\u202A"+e.tnc_string:e.tnc_string};g.getBuyString=function(){w="buy";return e.buy_lang==="AR"?"\u202A"+e.buy_string:e.buy_string};g.getGamePrice=function(){return e.game_price};g.getCurrentStringLang=function(){if(w.indexOf("TnC")!=-1){return e.tnc_lang}if(w.indexOf("buy")!=-1){return e.buy_lang}return"EN"};D.Billing=g})(window);