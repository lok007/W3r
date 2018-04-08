function primeFactorsTo(x){
var tab = [];
	for(i=2; i<=x;i++){
    var tab2 =[];
		for(j=1; j<=i; j++){
			if(i%j==0){tab2.push(j)}
    }
    if(tab2.length==2){tab.push(i)}
  }
console.log(tab)
}
primeFactorsTo(100)