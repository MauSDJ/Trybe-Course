let productCost = 120;
let salePrice = 130;
let productCostTax = 0.2;
let totalCost = productCost + (productCost*productCostTax);
let profit = salePrice - totalCost;
let profit1000 = profit * 1000;

console.log(profit1000)
if(profit < 0) {
    console.log("Stop selling this product at this price!");
} else {
    console.log(profit);
}

