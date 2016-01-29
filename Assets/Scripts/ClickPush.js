#pragma strict

public var pushForce:int = 50;
private var balloon:Balloon;
public var clickDelta:Vector3;

//Audio Variables
//public var track1 : AudioClip;
//private var audio1Volume : float = 0.0;
private var track1Playing : boolean = false;
 
function Start(){
	balloon=GetComponent(Balloon);
	
	//GetComponent.<AudioSource>().clip = track1;
	//GetComponent.<AudioSource>().volume = audio1Volume;
	//GetComponent.<AudioSource>().Play();
}

function FixedUpdate () {

	if(!balloon.destroyed && Input.GetMouseButton(0)){
	
		var clickPoint=Camera.main.ScreenToWorldPoint(Vector3(Input.mousePosition.x, Input.mousePosition.y,transform.position.z-Camera.main.transform.position.z));
		//Debug.Log("point: "+clickPoint);
		
		
		clickDelta = transform.position-clickPoint;
		
		var mag:float = clickDelta.magnitude;
		
		if(mag<1) mag=1;
		mag=pushForce/mag; // reduce force the further away you click
		
		clickDelta=mag*clickDelta.normalized;
		clickDelta.z=0;
		
		//Debug.Log("delta: "+clickDelta);
		GetComponent.<Rigidbody>().AddForce(clickDelta);
		
		/*
		if (audio1Volume <= 0.2) {
	        fadeIn();
	        }
	    
		} else {
			fadeOut();
			}
		*/		
	}
}
/*

function fadeIn() {
    if (audio1Volume < 1) {
        audio1Volume += 0.2 * Time.deltaTime;
        GetComponent.<AudioSource>().volume = audio1Volume;
    }
}
 
function fadeOut() {
    if(audio1Volume > 0.2) {
        audio1Volume -= 0.1 * Time.deltaTime;
        GetComponent.<AudioSource>().volume = audio1Volume;
    }
}
*/