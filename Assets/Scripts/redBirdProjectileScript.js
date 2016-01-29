#pragma strict

public var direction:Vector3;
public var lifeSpan:int = 5;
public var speed:float = 1;
private var spawnTime:int;

var path : Vector3[];

function Start(){
/*
	path = new Vector3[7];

    path[0] = Vector3(gameObject.transform.position.x, gameObject.transform.position.y, gameObject.transform.position.z);
	
	path[1] = Vector3(gameObject.transform.position.x - 2, gameObject.transform.position.y, gameObject.transform.position.z);

    path[2] = Vector3(gameObject.transform.position.x - 2, gameObject.transform.position.y - 1, gameObject.transform.position.z);

    path[3] = Vector3(gameObject.transform.position.x - 3, gameObject.transform.position.y - 1, gameObject.transform.position.z);

	path[4] = Vector3(gameObject.transform.position.x - 6, gameObject.transform.position.y - 1, gameObject.transform.position.z);
	path[5] = Vector3(gameObject.transform.position.x - 10, gameObject.transform.position.y - 1, gameObject.transform.position.z);
	path[6] = Vector3(gameObject.transform.position.x - 20, gameObject.transform.position.y - 1, gameObject.transform.position.z);


	iTween.MoveTo(gameObject, iTween.Hash("path", path, "time",15, "isLocal",true));
	
	
	
	//spawnTime=Time.time;
	if(lifeSpan>0) {
		Destroy(gameObject,lifeSpan);
		}
*/		
		
}

function Update () {
	//transform.position=transform.position+transform.TransformDirection(direction)*speed*Time.deltaTime;
}