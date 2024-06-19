const calcAveragee = (scoreOne, scoreTwo, scoreThree) => {
  const average = (scoreOne + scoreTwo + scoreThree) / 3;
  return average;
};

const avgKoalasScore = calcAveragee(22, 33, 44);
console.log("The avergae of Koalas is", avgKoalasScore);

const avgDolphinsScore = calcAveragee(12, 34, 1);
console.log("the average of Dolphins is ", avgDolphinsScore);
const checkWinner = function (avgDolphinsScore, avgKoalasScore) {
  if (avgDolphinsScore >= 2 * avgKoalasScore) {
    console.log(`Dolphins are the winner`);
  } else if (avgDolphinsScore >= 2 * avgDolphinsScore) {
    console.log("Kaolas");
  }
};


// const array = [10, 20, 50, 1000, 700, 600];
// const result = [];
// array.forEach((value) => {
//   result.push(value % 2 === 0);
// });
// console.log(result);


