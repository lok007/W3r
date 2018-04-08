var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 33]];


for(i=0; i<students.length; i++){
			if(students[i][1] >=50){
				console.log(students[i][0] + " otrzymał ocenę pozytywną")
      }
      else {console.log(students[i][0] + " otrzymał ocenę"+ 		 
      " negatywną")
      }
}