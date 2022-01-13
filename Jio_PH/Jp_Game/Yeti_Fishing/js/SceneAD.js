class SceneAD 
{
    constructor(nextScene = null, displayOnLoad = false)
    {
        this.ad = null;
        this.nextScene = nextScene;
		if(displayOnLoad)
			this.LoadAndDisplayAD();
		else
			this.LoadAD();
    }
    LoadSceneAfterAD()
    {
        if(this.nextScene != null)
            game.scene.start(this.nextScene);
    }
    LoadAD()
    {
        // UpdateSoftKeys("none");
        try
        {
        	console.log("try getAD");
	        getKaiAd(
	        {
	            publisher: '5243d2d4-0b5d-4e2f-bb17-948c7771c234',
	            app: 'YetiFishing',
	            slot: 'fish_Test',
	            timeout: 2500,
	            test: 0,
	            onerror: err => 
	            {
	            	console.log("ERROR LOADING AD");
	            	this.LoadSceneAfterAD();
	            	console.error('Custom catch:', err)
	            },
	            onready: ad => 
	            {
	            	console.log("AD Ready to display");
	                //ad.call('display')
	                this.ad = ad;
                    
	                ad.on('display', () => {
	                    console.log("AD displayed");
	                    // UpdateSoftKeys('SceneAD');
	                })
	                ad.on('close', () => {
	                    console.log("closeAD and load" + this.nextScene);
	                    this.LoadSceneAfterAD();
	                })
	            }
	        })
        }
        catch(err)
        {
        	console.log("ERROR Loading AD");
        	this.LoadSceneAfterAD();
        }
	}
	
	LoadAndDisplayAD()
	{
		try
        {
        	console.log("try getAD");
	        getKaiAd(
	        {
	            publisher: '5243d2d4-0b5d-4e2f-bb17-948c7771c234',
	            app: 'YetiFishing',
	            slot: 'fish_Test',
	            timeout: 2500,
	            test: 0,
	            onerror: err => 
	            {
	            	console.log("ERROR LOADING AD");
	            	this.LoadSceneAfterAD();
	            	console.error('Custom catch:', err)
	            },
	            onready: ad => 
	            {
	            	console.log("AD Ready to display");
	                ad.call('display')
	                //this.ad = ad;
                    
	                ad.on('display', () => {
	                    console.log("AD displayed");
	                    // UpdateSoftKeys('SceneAD');
	                })
	                ad.on('close', () => {
	                    console.log("closeAD and load" + this.nextScene);
	                    this.LoadSceneAfterAD();
	                })
	            }
	        })
        }
        catch(err)
        {
        	console.log("ERROR Loading AD");
        	this.LoadSceneAfterAD();
        }
	}
    setNextScene(sceneName)
    {
        this.nextScene = sceneName;
    }
    showAD()
    {
        this.ad.call('display');
    }
}





















