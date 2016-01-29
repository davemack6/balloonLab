#pragma strict

var newSkin : GUISkin;
var logoTexture : Texture2D;
var fontSize : int;

function theFirstMenu() {
    var screenWidth : int = Screen.width;
	var screenHeight : int = Screen.height;
    
    screenWidth = (screenWidth / 2) - 150;
    screenHeight = (screenHeight / 2) - 150;
    //Debug.Log(screenHeight);
   
    //layout start
    //GUI.BeginGroup(new Rect(screenWidth, screenHeight, 500, 1000, "asdfasdf"));
    //GUI.BeginGroup (new Rect (Screen.width / 2 - 200, Screen.height / 2 - 150, 800, 600));
    
    //the menu background box
    //GUI.Box(Rect(0, 200, 300, 250), "bu");

	//logo picture
    //GUI.Label(Rect(0, 0, 300, 200), "logo goes here");
    
    //////main menu buttons
    //game start button
    /*
    if(GUI.Button(Rect(50, 100, 120, 120), "Start \nDemo")) {
	    var script = GetComponent("MainMenuScript"); 
	    //script.enabled = false;
	    //var script2 = GetComponent("MapMenuScript"); 
	    //script2.enabled = true;
	    Application.LoadLevel("1-1");
    }
    */
    
    //Options Button
    /*   UNCOMMENT FOR OPTIONS MENU
    if(GUI.Button(Rect(130, 100, 120, 120), "Options")) {
    	Debug.Log('open options menu');
    }*/
    
    //quit button
    /*
    if(GUI.Button(Rect(200, 100, 120, 120), "Quit")) {
    	Application.Quit();
    }
    */
    
    //layout end
    GUI.EndGroup(); 
}




function OnGUI () {
    //load GUI skin
    
    //GUI.skin = newSkin;
    //GUI.skin.label.fontSize = GUI.skin.box.fontSize = GUI.skin.button.fontSize = fontSize;

    //execute theFirstMenu function
    theFirstMenu();
}




