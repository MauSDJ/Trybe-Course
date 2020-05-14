let a = 3, b = 5, c = 1;

if((a > b) && (a > c)) {
    console.log(a);
} else if((b > a) && (b > c)) {
    console.log(b);
} else if((c > a) && (c > b)) {
    console.log(c)
} else {
    console.log("The numbers are equal")
}