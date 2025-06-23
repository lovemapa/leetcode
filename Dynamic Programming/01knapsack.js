let weight = [1, 3, 5, 2, 7, 10];
let price = [20, 10, 25, 15, 30, 7];


let length = weight.length;
let knapsackBag = 20;
const t = Array.from({ length: knapsackBag+1 }, () => Array(length+1).fill(-1));



function knapsack(weight, price, knapsackBag,length) {

  if (knapsackBag == 0 || length == 0) {
    return 0;
  } 
  
  
  if(t[knapsackBag][length]!==-1){
    return t[knapsackBag][length];
  }

  if (weight[length - 1] <= knapsackBag) {
     t[knapsackBag][length]=Math.max(
      price[length - 1] +
        knapsack(weight, price, knapsackBag - weight[length - 1], length - 1),
      knapsack(weight, price, knapsackBag, length - 1)
    );
    return t[knapsackBag][length];
  } else {

    t[knapsackBag][length]=knapsack(weight, price, knapsackBag, length - 1);
    return t[knapsackBag][length]
  }
}

console.log(knapsack(weight, price, knapsackBag, length));
