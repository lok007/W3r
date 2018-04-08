// is ams 371 = 3^3 + 7^3 + 1^3
function isAms(num){
	var numStr = num.toString();
  	var tab = [];
	var y = 0;
	for(i=0; i<numStr.length; i++){
		var x = Number(numStr.charAt(i))
		tab[i]= x*x*x;
		y = y + tab[i];
	}
	if(y==num){console.log(num + " is lucky")}
	else{console.log(num + " is unlucky")}
}
isAms(371)
