let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;


for(i = 0; i < numbers.length; i+=1) {
    sum += numbers[i];
}

let average = sum/numbers.length;

if(average > 20) {
    console.log("the average is higher than 20");
} else {
    console.log("the average is less or equal to 20");
}