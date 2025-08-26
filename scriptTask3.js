//Task3: Student Marks Calculator:
const students = [
    {name:"Student0",
    marks: {Hindi: 89, English: 90, Maths:68 }
    },
     {name:"Student1",
    marks: {Hindi: 80, English: 99, Maths:64 }
    },
     {name: "Student2",
    marks: {Hindi: 88, English: 91, Maths:60 }
    }
];
function marksCalculator(students) {
let newArray = students.map((student) => {
      const score = Object.values(student.marks);
      const result = score.reduce((a,b)=>{
         return a+b;
      })
      return result;
});

console.log("Student Marks Calculator:");
for (const key in newArray) {
     const element = newArray[key];
     console.log(`The Total Marks of Student${key} is ${element}`);
}

const highestMarks = Math.max(...newArray);
console.log(`The highest marks among all the students is :${highestMarks}`);
}
marksCalculator(students);