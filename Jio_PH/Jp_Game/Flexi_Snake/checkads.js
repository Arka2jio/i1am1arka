var PR = 'flexi_snake_pr';
var MR = 'flexi_snake_mr';
var app = 'flexi_snake';
var pubid = 'ec13e8ef-de19-49ea-8f51-f99a6b7fc657';
var nextShow, adscalled =false, showGameCalled= false;

function showGame() {
    showGameCalled = true;
    adscalled = false;
    nextShow = Date.now() + 45000;
    window.gamezop && window.gamezop.play && window.gamezop.play();
    setTimeout(function() {
        showAd(MR, true)
    }, 40000);
}

function showAd(unit, wait) {
    showGameCalled = false;
    return getKaiAd({
        publisher: pubid,
        app: app,
        slot: unit,
        timeout: 8000,
        onerror: function(err) {console.error('Ad Error:', err), !showGameCalled && showGame()},
        test: 0,
        onready: function(ad) {
            if(!wait) {
                ad.call('display')
            } else {
                window.addEventListener('message', function checkAd(e) {
                    if((e.data.state === 'over' || e.data.state === 'levelup') && Date.now() > nextShow && !adscalled) {
                        window.removeEventListener('message', checkAd);
                        adscalled = true;
                        window.gamezop && window.gamezop.pause && window.gamezop.pause();
                        ad.call('display')
                    }
                });
            }
		    ad.on('click', function() {!showGameCalled && showGame()})
		    ad.on('close', function() {!showGameCalled && showGame()})
        }
    })
}

document.addEventListener("DOMContentLoaded", function() {
    showAd(PR, false)
});
