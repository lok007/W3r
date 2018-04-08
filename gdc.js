function gcd(x,y){
	var tabx = [];
  var taby = [];
	var tab = [];
	for(i=1; i<x; i++){
		if(x%i==0){
		tabx.push(i);
    }
	}
  for(i=1; i<y; i++){
		if(y%i==0){
		taby.push(i);
    }
	}
	for(i=0;i<taby.length;i++){
  	if (tabx.indexOf(taby[i])!=-1){tab.push(taby[i])}
	}
	console.log(tab[tab.length-1]);
}
gcd(22,33)