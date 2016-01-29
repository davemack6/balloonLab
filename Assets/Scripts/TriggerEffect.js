#pragma strict

public var effectDelay:float = 1; // number of seconds between trigger and effect

public var triggered=false;
public var fired=false;

public var fireEffect:GameObject;
public var fireLocation:Transform;
public var triggerEffect:GameObject;
private var triggerTime:float;
private var fireTime:float;

public var resetTriggerTime=0;

function Update(){

	if(triggered){
		if(!fired){
		
			if(Time.time-triggerTime > effectDelay){
				fired=true;
				fireTime=Time.time;
				Instantiate(fireEffect,fireLocation.position,fireLocation.rotation);
			}
		
		}else{
			if(resetTriggerTime>0 && (Time.time-fireTime)>resetTriggerTime){
				fired=false;
				triggered=false;
			}
		}
	}
}

function OnTriggerEnter (c:Collider) {
	triggered=true;
	triggerTime=Time.time;
	if(triggerEffect) Instantiate(triggerEffect,transform.position,transform.rotation);
//	if(animation) animation.Play("trigger"); // e.g. breaking a tripwire
}