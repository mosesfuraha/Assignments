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
