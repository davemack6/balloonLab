#pragma strict

//import System.Collections.Generic;
public var power:float = 1000.0; // raw power of the fan
public var dispersion:float = 2.0; // how quickly its power disperses, 0 = constant power, 1 = power inverse to distance, 2 =  power inverse to square of distance, etc.
public var colliders:Array;

function Start(){
	colliders=new Array();
}

/*
function FixedUpdate(){

	for (var i=0; i < colliders.length; i++) {
	
			var holder:GameObject = colliders[i];
			var diff = holder.transform.position - transform.position;
			var dist = diff.magnitude;
			
			if(dist<1) dist=1;
			dist=Mathf.Pow(dist,dispersion);
			var effect=power/dist;
			
			if(effect>=1){
				holder.rigidbody.AddForce(transform.TransformDirection(Vector3.up)*effect);
			}
	}
		
}

function FixedUpdate(){
	for(var i=0;i<colliders.length;i++){
		if(colliders[i].rigidbody!=null){
			var diff=colliders[i].transform.position-transform.position;
			var dist=diff.magnitude;
			if(dist<1) dist=1;
			dist=Mathf.Pow(dist,dispersion);
			var effect=power/dist;
			if(effect>=1){
				colliders[i].rigidbody.AddForce(transform.TransformDirection(Vector3.up)*effect);
			}
		}
	}
}*/

function OnTriggerEnter (c:Collider) {
	colliders.Add(c);
}

function OnTriggerExit(c:Collider){
	colliders.Remove(c);
}


