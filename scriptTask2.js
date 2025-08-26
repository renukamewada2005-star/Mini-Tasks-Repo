//Task2 - Find Highest marks from an array
function highestMarksFromAnArray(array){
let highest = array[0];
for (const key in array) {
        const element = array[key];
             if(element > highest){
            highest = element;
         }
     }
console.log('the highest marks is:'+highest); 
}
let array = [66,89,43,95,87];
highestMarksFromAnArray(array);