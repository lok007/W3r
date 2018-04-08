function stars(x){
  
	for(i=0; i<x; i++){
		var string = "";
		for(j=0; j<=i; j++){
		string = string + " *" 
    }
		console.log(string)
	}
}
stars(10)