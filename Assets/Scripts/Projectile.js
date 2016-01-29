#pragma strict

public var direction:Vector3;
public var lifeSpan:int = 5;
public var speed:float = 1;
private var spawnTime:int;

function Start(){
	spawnTime=Time.time;
	if(lifeSpan>0){
		Destroy(gameObject,lifeSpan);
		}
}

function Update () {
	transform.position=transform.position+transform.TransformDirection(direction)*speed*Time.deltaTime;
}