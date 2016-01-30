
public var power:float = 1000.0; // raw power of the fan
public var dispersion:float = 2.0; // how quickly its power disperses, 0 = constant power, 1 = power inverse to distance, 2 =  power inverse to square of distance, etc.
public var colliders:Array;

function Start(){
	colliders=new Array();
}

function FixedUpdate(){

    for (var i=0; i < colliders.length; i++) {	
            Debug.Log('wind on ' + colliders[i]);

            var holder:GameObject = colliders[i];
			var diff = holder.transform.position - transform.position;
			var dist = diff.magnitude;
			
			if(dist<1) dist=1;
			dist=Mathf.Pow(dist,dispersion);
			var effect=power/dist;
			
			if(effect>=1){
				holder.GetComponent.<Rigidbody>().AddForce(transform.TransformDirection(Vector3.up)*effect);
			}
	}
		
}

function OnTriggerEnter (c:Collider) {
    var collisionHolder:GameObject = c.gameObject;
   
    Debug.Log('collision with ' + collisionHolder);
    colliders.Add(collisionHolder);
}

function OnTriggerExit(c:Collider){
    var collisionHolder:GameObject = c.gameObject;
    colliders.Remove(collisionHolder);
}


