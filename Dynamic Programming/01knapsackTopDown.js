let weight = [1, 3, 5, 2, 7, 10];
let price = [20, 10, 25, 15, 30, 7];

let arrlength = weight.length;
let knapsackBag = 20;

const t = Array.from({ length: knapsackBag + 1 }, () => Array(arrlength + 1));


for (let i = 0; i < arrlength + 1; i++) {
    for (let j = 0; j < knapsackBag + 1; j++) {
        if (i == 0 || j == 0) {
            console.log(`${i} ${j}`);
            t[i][j] = 0;
        }
    }
}

console.log(arrlength, knapsackBag,JSON.stringify(t));

function knapsackTopDown(weight, price, knapsackBag, t, arrlength) {
  for (let i = 1; i < arrlength + 1; i++) {
    for (let j = 1; j < knapsackBag + 1; j++) {
      if (weight[i - 1] < j) {
        
        t[i][j] = Math.max(
          price[i - 1] + t[i - 1][j - weight[i- 1]],
          t[i - 1][j]
        );
      } else {
        t[i][j] =   t[i - 1][j];
      }
    }
  }
  return t[arrlength][knapsackBag]
}

const profit=knapsackTopDown(weight, price, knapsackBag, t, arrlength);
console.log(profit);
