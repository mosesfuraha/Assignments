const calcTip = (billValue) => {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let index = 0; index < bills.length; index++) {
  const tip = calcTip(bills[index]);
  tips.push(tip);
  totals.push(tip + bills[index]);
}
console.log(bills, tips, totals);
