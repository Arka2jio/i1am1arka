const ROT_SPEED = 0.75, REEL_SPEED = 0.02, HOOK_SPEED = 1.5, FISH_SPEED = 0.75;
var FISH_DATA = [{
    id: 'Dorado',
    path: 'images/Dorado.png',
    score: 100,
    scale: 0.15,
},{
    id: 'Shark',
    path: 'images/Shark.png',
    score: -100,
    scale: 0.1,
},{
    id: 'Eel',
    path: 'images/Eel.png',
    score: -100,
    scale: 0.1,
},{
    id: 'Fish',
    path: 'images/Fish.png',
    score: 50,
    scale: 0.15,
},{
    id: 'Tuna',
    path: 'images/Tuna.png',
    score: 250,
    scale: 0.15,
},{
    id: 'Prawn',
    path: 'images/Prawn.png',
    score: 100,
    scale: 0.2,
}]

var tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
var tempParentMatrix = new Phaser.GameObjects.Components.TransformMatrix();

class gamescene extends Phaser.Scene
{
    
    /*
        this.bg
        this.yeti
        this.line   
        this.hookLine
        
        this.isCast
        this.reelIn
        this.rotDir
        
        this.fishArray
        this.fishCollisionGroup
        this.caughtFish
        
        this.fishSpawner
        this.isGameOver
    */
    constructor()
    {
        super("gamescene");
    }
    
    preload()
    {
        this.scene.bringToTop();
        ResetKeys();
        this.load.image('bgImg','images/gamebg.png');
        this.load.image('yetiImg','images/Yeti.png');
        this.load.image('lineImg','images/line.png');
        this.load.image('hookImg','images/Hook.png');
        for(var i = 0; i < FISH_DATA.length; i++)
        {
            this.load.image(FISH_DATA[i].id,FISH_DATA[i].path);
        }
        this.load.audio('hookSFX','audio/hookFish.mp3')
        this.load.audio('catchSFX','audio/catchFish.mp3')
    }
    
    create()
    {
        scoreObject.ResetScore();
        adobj = new SceneAD();
        this.isPaused = false;
        
        this.bg = this.add.image(config.width/2,config.height/2,'bgImg').setOrigin(0.5).setScale(0.5);
        this.yeti = this.add.image(config.width/2,config.height/2-30,'yetiImg').setOrigin(0.5,1).setScale(0.15);
        
        this.hookLine = this.add.container(0,0);
        this.line = this.add.container(0,0);
        this.line.add(this.add.image(0,0,'lineImg').setOrigin(0.5,0).setScale(0.01,0.3));
        this.hookLine.add(this.line);
        
        this.hook = this.add.image(0, this.line.getAt(0).displayHeight, 'hookImg').setOrigin(0.5,0).setScale(0.2);
        this.hookLine.add(this.hook);
        this.matter.add.gameObject(this.hook);
        this.hook.setBody({
                type: 'circle',
                radius: 7
            });
        this.hook.setSensor(true);
        this.hookLine.setPosition(config.width/2+35,5)
        
        this.scoretext = this.add.text(5, 12, '', { font: 'bold 18px Arial', fill: '#000040' }).setOrigin(0, 0.5);
        this.SetScoreText();
        
        this.InitVars();
        
        this.fishSpawner = this.time.addEvent({ delay: 3500, callback: this.SpawnFish, callbackScope: this, loop: true });
        
        keyCallback.enter = function(){
            game.scene.getScene('gamescene').CastLine();
        }
        
        this.matter.world.on('collisionstart',function(event,bodyA, bodyB)
        {
            this.CheckHookFishCollision(bodyA.gameObject,bodyB.gameObject);

        },this);

        PauseEvent = function(){
			game.scene.getScene('menuscene').Pause();
		}
		UnPauseEvent = function(){
			game.scene.getScene('menuscene').Resume();
		}
	}
	
	Pause()
	{
		this.isPaused = true;
		
	}
	
	Resume()
	{
		this.isPaused = false;
	}
    
    
    update()
    {
        if(this.isPaused === true)
            return;
        if(this.gameOver == false)
        {
            this.HookManager();
            this.MoveFishes();
        }
        else if(this.gameOver == true)
        {
            this.timer += game.loop.delta;
            if(this.timer >= 2000)
            {
                this.yeti.destroy();
                this.bg.destroy();
                this.line.destroy();
                this.hookLine.destroy(true,true);
                checkArray(this.fishArray)
                for(var i = this.fishArray.length - 1; i >= 0; i--)
                {
                    this.fishArray[i].fish.destroy();
                    this.fishArray.pop();
                }
                scoreObject.SetHighScore();
                this.gameOver = null;
                try{
                    console.log("try load AD");
                    //adobj = new SceneAD("gameover");
                    adobj.setNextScene("gameover");
                    adobj.showAD();
                }
                catch(err){
                    console.log("AD load Failed \n" + err);
                    game.scene.start("gameover");

                }
//                game.scene.start("gameover");
            }    
            
        }
    }
    
    InitVars()
    {
        this.gameOver = false;
        this.timer = 0;
        this.isCast = false;
        this.reelIn = false;
        this.rotDir = 1;
        this.caughtFish = null;
        this.fishArray = new Array(0);
        this.fishCollisionGroup = this.add.group();
    }
    
    CastLine()
    {
        if(!this.isCast)
            this.isCast = true;
    }
    
    HookManager()
    {
        if(this.isCast)
        {
//            console.log(this.hookLine);
            if(this.reelIn)
            {
                this.line.scaleY -= REEL_SPEED;
                this.hook.y -= HOOK_SPEED;
                if(this.line.scaleY <= 1)
                {
                    this.line.scaleY = 1;
                    this.isCast = false;
                    this.reelIn = false;
                    this.CheckCatch();
                }
            }
            else
            {
                this.line.scaleY += REEL_SPEED;
                this.hook.y += HOOK_SPEED;
                if(this.hook.x > config.width || this.hook.x < 0 || this.hook.y > config.height)
                    this.reelIn=true;
                if(this.CheckForHook())
                    this.reelIn = true;
            }
        }
        else
        {
            if(this.hookLine.angle > 40 || this.hookLine.angle < -40)
                this.rotDir *= -1;
            this.hookLine.angle += ROT_SPEED * this.rotDir;
        }
    }

    CheckForHook()
    {
        var d;
        for(var i = 0; i < this.fishArray.length; i++)
        {
            if(this.fishArray[i] != null)
            {

                this.hook.getWorldTransformMatrix(tempMatrix,tempParentMatrix);
                d = tempMatrix.decomposeMatrix();
                var dist = Math.sqrt(Math.pow(this.fishArray[i].fish.x - d.translateX, 2) + Math.pow(this.fishArray[i].fish.y - d.translateY, 2))
                if(dist < 30 && d.translateY > this.fishArray[i].fish.y - this.fishArray[i].fish.displayHeight/2)
                {
                    this.sound.play('hookSFX');
                    this.fishArray[i].isCaught = true;
                    this.caughtFish = this.fishArray[i];
                    return true;
                }
            }
        }
        return false;
    }
    
    SpawnFish()
    {
//        console.log("spawn fish");
        checkArray(this.fishArray);
        var spawnPos ={x:0,y:0};
        var flip = false;
        var x = Math.floor(Math.random() * 100)
        if(x < 50)
        {
            spawnPos.x = -50;
            flip = true;
        }
        else
        {
            spawnPos.x = config.width + 50;
            flip = false;
        }
        spawnPos.y = Math.floor(Math.random() * (config.height - 10 - config.height/2 + 30)) + config.height/2 - 10;
        var rnd = Math.floor(Math.random() * FISH_DATA.length);
        var l_fish = this.matter.add.image(spawnPos.x,spawnPos.y,FISH_DATA[rnd].id).setOrigin(0.5).setScale(FISH_DATA[rnd].scale);
        l_fish.flipX = flip;
        l_fish.setCollisionGroup(-1);
        l_fish.setSensor(true);
        this.fishCollisionGroup.add(l_fish);
        this.fishArray.push(new Fish(l_fish,flip?1:-1,FISH_DATA[rnd].score,this.hook,this.removeFish));
//        console.log(this.fishArray)
    }
    
    CheckCatch()
    {
        console.log('here')
        if(this.caughtFish != null)
        {
            this.sound.play('catchSFX');
            if(this.caughtFish.fishPoints < 0)
            {
                console.log('wrong')
                this.gameOver = true;
            }
            else
            {
                console.log('score  ' + this.caughtFish.fishPoints)
                scoreObject.AddScore(this.caughtFish.fishPoints);
                this.SetScoreText();
            }
            RemoveElement(this.fishArray,this.caughtFish);
            this.caughtFish.fish.destroy();
            this.caughtFish = null;
        }
    }
    
    removeFish(obj)
    {
        RemoveElement(game.scene.getScene('gamescene').fishArray,obj);
    }
    
    MoveFishes()
    {
        for(var i = 0; i < this.fishArray.length; i++)
        {
            if(this.fishArray[i] != null)
                this.fishArray[i].MoveFish();
        }
    }
    
    SetScoreText()
    {
        this.scoretext.setText('Score : ' + scoreObject.GetScore());
    }
    
    CheckHookFishCollision(bodyA, bodyB)
    {
//         var l_hook, l_fish;
//         if(this.caughtFish == null && this.isCast)
//         {
//             if(this.hook == bodyA && this.fishCollisionGroup.contains(bodyB))
//             {
//                 l_hook = bodyA;
//                 l_fish = bodyB;
// //                 console.log("fish hit hook");
//             }
//             else if(this.hook == bodyB && this.fishCollisionGroup.contains(bodyA))
//             {
//                 l_hook = bodyB;
//                 l_fish = bodyA;
// //                console.log("fish hit hook 2");
//             }
//             if(l_hook && l_fish)
//             {
//                 this.sound.play('hookSFX');
//                 this.reelIn = true;
//                 for(var i = 0;i < this.fishArray.length; i++)
//                 {
//                     if(this.fishArray[i].fish == l_fish)
//                     {
//                         this.fishArray[i].isCaught = true;
//                         this.caughtFish = this.fishArray[i];
//                         break;
//                     }
//                 }
//             }
//         }
    }
}

class Fish
{
    constructor(fish,dir,score,hookObj,destroyCallback)
    {
        this.fish = fish;
        this.dir = dir;
        this.isCaught = false;
        this.destroyCall = destroyCallback;
        this.hook = hookObj
        this.fishPoints = score;
    }
    
    MoveFish()
    {
        if(!this.isCaught)
        {
            this.fish.x += this.dir * FISH_SPEED;
            if((this.dir == 1 && this.fish.x > config.width + this.fish.displayWidth/2) || (this.dir == -1 && this.fish.x < -this.fish.displayWidth/2))
            {
                this.destroyCall(this);
                this.fish.destroy();
            }
        }
        else
        {
            var d = this.hook.getWorldTransformMatrix(tempMatrix,tempParentMatrix);
            d = tempMatrix.decomposeMatrix();
            this.fish.setPosition(d.translateX,d.translateY);
        }
    } 
}

function GetHookPos(hook)
{
    var d = hook.getWorldTransformMatrix(tempMatrix,tempParentMatrix);
    d = tempMatrix.decomposeMatrix();
}

function RemoveElement(arr,obj)
{
    for(var i = 0; i < arr.length; i++)
        if(arr[i] === obj)
            arr[i] = null;
    return arr;
}

function checkArray(arr)
{
    var index = -1;
    while(index < arr.length)
    {
        for(index = 0; index < arr.length; index++)
        {
            if(arr[index] == null)
            {
                break;
            }
        }
        if(index < arr.length)
        {
            for(var i = index; i < arr.length - 1; i++)
            {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
            arr.pop();
        }
    }
}




























