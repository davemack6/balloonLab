#pragma strict

public var target : GameObject;
public var zdistance:int = -20;
public var ydistance:int = 5;

function FixedUpdate () {
	// follow the target along the x/y planes
	
	var tvec=target.transform.position+Vector3(0,ydistance,zdistance); // above and behind object
	var evec=Vector3.Slerp(transform.position,tvec,Time.deltaTime*5);
	transform.position=evec;

}