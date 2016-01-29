#pragma strict

public var colliders:Array;
public var damageActive=false;
public var damage:float=10.0; // damage per second when in effect

public var effectOffset=5; // number of seconds to wait before first fire
public var effectDelay=10; // number of seconds to wait between firing
public var effectDuration=5; // number of seconds effect continues for

private var nextFire=0;
public var effect:Renderer;

function Start(){
	colliders = new Array();
	nextFire = Time.time+effectOffset;
	effect.enabled = false;
}

function Update(){

	if(damageActive){
		
		
		for(var i=0;i<colliders.length;i++){
			var holder:GameObject = colliders[i] as Object ;  
			holder.SendMessage("TakeDamage",damage*Time.deltaTime);
		}
		if(Time.time>=nextFire){
			nextFire=Time.time+effectDelay;
			damageActive=false;
			effect.enabled=false;
		}
	}else{
		if(Time.time>=nextFire){
			damageActive=true;
			effect.enabled=true;
			nextFire=Time.time+effectDuration;
		}
	}
}

function OnTriggerEnter (c:Collider) {
	colliders.Add(c);
}

function OnTriggerExit(c:Collider){
	colliders.Remove(c);
}