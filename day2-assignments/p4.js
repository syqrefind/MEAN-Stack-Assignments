var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(student);
delete student.rollno;
console.log(student);

// Enumeration
var count = 0;
for (property in student){
    count += 1;    
}
console.log("The length of the student object is " + count +". (Counted by enumeration)")

// Using Object.keys
console.log("The length of the student object is " + Object.keys(student).length+ ". (Counted by using Object.keys)")

