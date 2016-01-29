#pragma strict

//var newSkin : GUISkin;
public var balloon:Balloon;
var fontSize : int;

var guiWidth : int;
var guiHeight : int;
static var timeElapsed : int;

//Debug.Log(guiWidth);

function OnGUI(){
	guiWidth = Screen.width/4;
	guiHeight = Screen.height/8;
	
	GUI.Box(Rect(10, 10, 185, guiHeight), "");
	
	//Debug.Log(guiWidth);
	//GUI.Label(Rect(15,15,100,20),"Health:"+balloon.GetHealthPercentage()+"%");
		
	GUI.backgroundColor = Color.yellow;
	GUI.HorizontalScrollbar(Rect (15,15,175,20), 0, balloon.GetHealthPercentage(),0, 100);
	
	if(balloon.destroyed){
		var sw=Screen.width;
		var sh=Screen.height;
		GUI.Label(Rect(sw/2-25,sh/2-60,50,20),"POP!");
		if(GUI.Button(Rect(sw/2-50,sh/2-20,100,40),"Play again")){
			Application.LoadLevel(Application.loadedLevel);
			}
	}
	
	GUI.Label(Rect(15,35,300,50), "Time Elapsed: " + timeElapsed);
	GUI.Label(Rect(130,35,50,20), "Score: " + balloon.GetScore());
	//Debug.Log(timeElapsed);
	
	
	//GUI.skin = newSkin;
    GUI.skin.label.fontSize = GUI.skin.box.fontSize = GUI.skin.button.fontSize = fontSize;

	


}
 function Update() {
 	timeElapsed = Time.time;
 }





