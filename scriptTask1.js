//Task1 - Print Student details from an object 
const student = {
    name : 'Renuka Mewada',
    age : 20,
    branch : 'Computer Science And Engineering',
    rollNumber : 1111,
    email : 'trewqwsd@gmail.com',
    address : '123, Green city, Bhopal'
};
console.log("Student Details:");
for (const key in student) {
  if (student.hasOwnProperty(key)) {
    console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${student[key]}`);
  }
}




