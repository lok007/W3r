var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12,
};
var x = 0;

function textKey(obj){
	if(typeof(obj) == "object"){
		for (x in student) {
			console.log(x)}
  	}
  else{console.log(obj +" nie jest obiektem")}	
}

textKey(student);