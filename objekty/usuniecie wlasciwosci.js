var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12,
};
console.log("Przed:");
console.log(student);

delete student.rollno;
console.log("Po:");
console.log(student)