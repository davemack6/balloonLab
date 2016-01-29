#pragma strict

public var maxHeight:float;
private var balloon:Balloon;

function Start(){
	balloon=GetComponent(Balloon);
}


function FixedUpdate () {
	var heightLevel=100*(transform.position.y/maxHeight);
	
	
	if(heightLevel>300){
		// game over man game over
			Debug.Log("blown away");
			balloon.BlowUp();
	}else if(heightLevel>100){
		Debug.Log("caught by the winds");
		// blow them away
		GetComponent.<Rigidbody>().AddForce(Vector3.up*heightLevel);
		GetComponent.<Rigidbody>().AddForce(Vector3.right*(0.5-Random.value)*heightLevel*10);
	}else if(heightLevel>75){
		// push them down
		Debug.Log("near the ceiling");
		GetComponent.<Rigidbody>().AddForce(Vector3.up*-10);
	}
	
	
	
	
}