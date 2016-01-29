
var levelEndPopup = false;

function OnTriggerEnter(other : Collider)
{
	if(other.gameObject.CompareTag("Balloon"))
    {
        levelEndPopup = true;
        //Application.LoadLevel("startScreen");
        //Debug.Log("You're free!!  Thanks for playing the demo...");
        
    }
    
}

function OnGUI() {

	if(levelEndPopup == true){
		//Make the gui Popup		
		var sw=Screen.width;
		var sh=Screen.height;
        GUI.Box(Rect(sw/2-200, sh/2-200, 400, 400), "Level Completed!");
	
		//Add Buttons
		if(GUI.Button(Rect(sw/2-100,sh/2-200,100,40),"Main Menu")){
			Application.LoadLevel("startScreen");
			levelEndPopup = false;
		}
				
				
		//Freeze Player 	
		// Turn off the ClickPush function
		//Balloon.GetComponent("LockScript").enabled = false;
		Time.timeScale = 0;
		
		//Get Time Elapsed
		var timeElapsed = LevelControl.timeElapsed;
		var timeScore = timeElapsed * -.2;
		
		Debug.Log("TIME ELAPSED = " + timeElapsed);
				
		//Get score
		var score = Balloon.score;
		Debug.Log("SCORE IS = " + score);
				
		//Add and give score
		
		
		
			
		//Buttons for Next Level - Retry - Main Menu		
		
								
	}

}







