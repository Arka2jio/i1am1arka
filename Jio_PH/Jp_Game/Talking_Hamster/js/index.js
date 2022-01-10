var w = window.screen.width;
var h = window.screen.height;
var orient;
if (w>=h) { orient="land"; } else { orient="port"; }

document.body.style.backgroundImage = "url('/img/"+orient+"/0.jpg')"; 

var lock;
var volume = navigator.volumeManager;
var audio = new Audio();

var intervalId;
var timerId;
var cadr = 1;
var TIME = 0;

navigator.getUserMedia = (navigator.getUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.webkitGetUserMedia);
var mediaRecorder;
var chunks = [];

if (navigator.getUserMedia) {
   navigator.getUserMedia (
      { audio: true },
	  function(stream) { 
	  mediaRecorder = new MediaRecorder(stream);   
	  mediaRecorder.ondataavailable = e => chunks.push(e.data);
      mediaRecorder.onstop = e => export_media(new Blob(chunks, { "type" : "audio/ogg; codecs=opus" }));
	  },
      function(err) { window.open("error.html","_self"); }
   );
} else { window.open("error.html","_self"); }

function startrec() {
  chunks = [];
  document.getElementById("softkey-right").setAttribute("data-l10n-id","empty");
  document.getElementById("softkey-left").setAttribute("data-l10n-id","empty");
  lock = window.navigator.requestWakeLock('screen');
  mediaRecorder.start();
  timerId = setInterval(mytime, 1000);
}

function export_media(med) {
	
  
  var mysrc = URL.createObjectURL(med);
  audio.src =  mysrc;
  audio.type = "audio/ogg";
  audio.playbackRate = 1.5;
  audio.mozPreservesPitch = false;
  
  
  }
  
  function mytime() {
	  TIME++;
	  if (TIME>60) {stoprec(); document.getElementById("rec").innerHTML=""; document.getElementById("softkey-center").setAttribute("data-l10n-id","record");}
  }


function stoprec() {
  document.getElementById("softkey-left").setAttribute("data-l10n-id","play");
  document.getElementById("softkey-right").setAttribute("data-l10n-id","help");
  clearInterval (timerId);
  TIME=0;
  mediaRecorder.stop();
  lock.unlock();
  
}

function anim() {
  document.body.style.backgroundImage = "url('/img/"+orient+"/"+cadr+".jpg')"; 
  cadr++;
  if (cadr==4) {cadr=1;} else {cadr++;}
}

function handleKeydown(e) {
  switch(e.key) {
    case 'SoftLeft':
      softkeyCallback.left();
      break;
    case 'SoftRight':
      softkeyCallback.right();
      break;
    case 'Enter':
      softkeyCallback.center();
      break;
	case '1':
       volume.requestDown(); 
	   volume.requestShow();
	break;	
	case '3':
		volume.requestUp();
		volume.requestShow();
	break;
  }
};



const softkeyCallback = {
    left: function() { 
       if (document.getElementById("softkey-left").getAttribute("data-l10n-id")=="play") {
		   navigator.vibrate(100);
		   audio.play();
		   document.getElementById("softkey-center").setAttribute("data-l10n-id","empty");
		   document.getElementById("softkey-right").setAttribute("data-l10n-id","empty");
		   document.getElementById("softkey-left").setAttribute("data-l10n-id","stop");
		   intervalId = setInterval(anim, 100);
		   audio.onended = function(){ 
		   navigator.vibrate(100);
		   document.getElementById("softkey-center").setAttribute("data-l10n-id","record");
		   document.getElementById("softkey-right").setAttribute("data-l10n-id","help");
		   document.getElementById("softkey-left").setAttribute("data-l10n-id","play"); 
		   clearInterval(intervalId);
		   document.body.style.backgroundImage = "url('/img/"+orient+"/0.jpg')"; 
		   };
	   } else if (document.getElementById("softkey-left").getAttribute("data-l10n-id")=="stop") {
		   audio.pause();
		   audio.currentTime = 0;
		   navigator.vibrate(100);
		   document.getElementById("softkey-center").setAttribute("data-l10n-id","record");
		   document.getElementById("softkey-right").setAttribute("data-l10n-id","help");
		   document.getElementById("softkey-left").setAttribute("data-l10n-id","play");
		   clearInterval(intervalId);
		   document.body.style.backgroundImage = "url('/img/"+orient+"/0.jpg')"; 
	   }
     },
  
    center: function() { 
       if (document.getElementById("softkey-center").getAttribute("data-l10n-id")=="record") {
		   document.getElementById("softkey-center").setAttribute("data-l10n-id","stop");
		   document.getElementById("rec").innerHTML="[REC]"
		   startrec();
	   } else {
		   if (document.getElementById("softkey-center").getAttribute("data-l10n-id")=="stop") {
		   document.getElementById("softkey-center").setAttribute("data-l10n-id","record");
		   document.getElementById("rec").innerHTML=""
		   stoprec();
	   }
	   }
      },
  
    right: function() { 
      window.open("help.html","_self");
     }
};

document.addEventListener('keydown', handleKeydown);

document.addEventListener("DOMContentLoaded", () => {
	getKaiAd({
	publisher: 'ef30ef98-e411-4952-89b7-4cf1e1bb4437',
	app: 'talkinghamster',
	slot: 'fullscreen',
	test: 0,
	onerror: err => console.error('Custom catch:', err),
	onready: ad => {
		ad.call('display')
		
		// user clicked the ad
		ad.on('click', () => console.log('click event') )

		// user closed the ad (currently only with fullscreen)
		ad.on('close', () => document.addEventListener('keydown', handleKeydown) )

		// the ad succesfully displayed
		ad.on('display', () => document.removeEventListener('keydown', handleKeydown) )
	}
})
});	