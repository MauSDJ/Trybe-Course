let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddQuantity = [];

for(let i = 0; i < numbers.length; i+=1) {
    if(numbers[i] % 2 !== 0) {
        oddQuantity.push(numbers[i]);
    } else {
        console.log("There is no no odd number in this array.")
    }
}
console.log(oddQuantity.length);