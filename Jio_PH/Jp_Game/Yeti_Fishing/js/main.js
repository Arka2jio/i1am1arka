//wait for the document focus
document.addEventListener("focus", function() {
    //this is important as sometimes the system take a while
    //to get focus properly
    setTimeout(function() {
        UnPauseEvent();
    }, 300);
});
//tell the game/app when the document loses the focus
document.addEventListener("blur", function() {
    PauseEvent();
});


var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    // width: 320,
    // height: 240,
    parent: 'game',
    scene: [ blank, menuscene, instruct, gamescene, gameover ],
    physics: {
        default: 'matter',
        matter: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
        }
    }
};
    
var game = new Phaser.Game(config);
var scoreObject = new Score("YetiFishing");
var adobj = null;

function PauseEvent(){}
function UnPauseEvent(){}

keyCallback = {
    softLeft:   function() { /*console.log('You click on SoftLeft')*/ },
    enter:      function() { /*console.log('You click on Enter')*/ },
    softRight:  function() { /*console.log('You click on SoftRight')*/ },
    dUp:        function() { /*console.log("you clicked 2")*/ },
    dDown:      function() { /*console.log("you clicked 8")*/ },
    dLeft:      function() { /*console.log("you clicked 8")*/ },
    dRight:     function() { /*console.log("you clicked 8")*/ },
    quit :      function() { /*console.log("you clicked 8")*/ }
};

document.addEventListener('keyup', handleKeyup);

function handleKeyup(e) 
{
    switch (e.key) 
    {
        case 'ArrowUp':
        case '2': 
            keyCallback.dUp();
            break;
        case 'ArrowDown':
        case '8': 
            keyCallback.dDown();
            break;
        case 'ArrowLeft':
        case '4': 
            keyCallback.dLeft();
            break;
        case 'ArrowRight':
        case '6':
            keyCallback.dRight();
            break;
        case 'SoftLeft':
        case 'Control':
            keyCallback.softLeft();
            break;
        case 'SoftRight':
        case 'Alt':
            keyCallback.softRight();
            break;
        case 'Enter':
        case '5':
            keyCallback.enter();
            isShot = true;
            break;
        case 'EndCall':
            keyCallback.quit();
            break;
        default:
            //keyCallback.other(e.key);
    }
}

function  ResetKeys()
{
    keyCallback = {
        softLeft:   function() { /*console.log('You click on SoftLeft')*/ },
        enter:      function() { /*console.log('You click on Enter')*/ },
        softRight:  function() { /*console.log('You click on SoftRight')*/ },
        dUp:        function() { /*console.log("you clicked 2")*/ },
        dDown:      function() { /*console.log("you clicked 8")*/ },
        dLeft:      function() { /*console.log("you clicked 8")*/ },
        dRight:     function() { /*console.log("you clicked 8")*/ },
        quit :      function() { /*console.log("you clicked 8")*/ }
    };
}































