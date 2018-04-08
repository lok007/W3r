var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12,
};
function objLength(obj){
	var x = 0;
	for(a in obj){
	x+=1
  }
  console.log(x)
}
objLength(student)