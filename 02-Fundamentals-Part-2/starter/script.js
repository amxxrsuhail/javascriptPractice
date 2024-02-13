const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0 ; i < bills.length ; i++){
    tips.push(calcTip(bills[i]));
    totals.push(tips[i]+bills[i]);
}

console.log("tips: "+tips);
console.log("totals: "+ totals);

const calcAverage = (arr) =>{
  let total = 0;
    for(let i = 0 ; i < arr.length ; i++){
       total  +=  arr[i]
    }
    return total/arr.length;
}
calcAverage(totals)
console.log(calcAverage(totals))
// console.log((26.4+ 339.25+ 202.4+ 528+ 44.4+ 120.75+ 12+ 1320+ 98.9+ 59.8)/10)