#pragma strict

private var health:float = 0.0;
public var maxHealth:float = 100.0;
public var destroyed:boolean = false;
public static var floatingObjects:Array;
static var score:int = 0;

function Awake() {
	if(!Balloon.floatingObjects){
		Balloon.floatingObjects=Array();
	}
	Balloon.floatingObjects.Add(this);
} 
function Start() {
	health=maxHealth;
	score=0;
}

function OnCollisionEnter(coll:Collision){
	var surface=coll.transform.GetComponent(DamageSurface);
		
	if(surface!=null) {
		TakeDamage(surface.GetDamage(Mathf.Floor(coll.relativeVelocity.magnitude)));
		}
	
	//add in Balloon resetting to not push balloon back
	//transform.Translate(transform.position.x, transform.position.y, 0);
}

function AddScore(amount:int) {
	score = score + amount;	
}

function GetScore(){
	return score;
}

function BlowUp(){
	destroyed=true;
}


function TakeDamage(amount:int){
	health = health - amount;
	if(health<0){
		health=0;
		destroyed=true;
	}
}

function GetHealthPercentage(){
	return Mathf.Floor(100*health/maxHealth);
}