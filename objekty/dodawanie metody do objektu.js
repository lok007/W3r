function Cylinder(h,d){
	this.h = h;
	this.d = d;
}
Cylinder.prototype.Obj = function(){
	var r = this.d / 2;
	var x = this.h * Math.PI *r*r;
	return x.toFixed(4)
}

var cylinder1 = new Cylinder(7,4)
console.log(cylinder1.Obj())
