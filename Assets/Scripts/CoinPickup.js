#pragma strict

public var value:int=1;
//public var collectEffect:GameObject;

function OnTriggerEnter(other:Collider){
	var balloon=other.transform.GetComponent(Balloon);
	if(balloon){
		Destroy(gameObject);
		//if(collectEffect) Instantiate(collectEffect,transform.position,transform.rotation);
		balloon.AddScore(value);
	}
}

function Update ()
{
    transform.Rotate (0,50*Time.deltaTime,0); //rotates 50 degrees per second around z axis
}




