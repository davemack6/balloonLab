#pragma strict

var instantKill=false;
var damageLevel:float = 1.0;

function GetDamage (speed:float) {
	if(instantKill) return 1000;
	else return damageLevel * speed;
}

