const calcAveragee = (scoreOne, scoreTwo, scoreThree) => {
  const average = (scoreOne + scoreTwo + scoreThree) / 3;
  return average;
};

const avgKoalasScore = calcAveragee(22, 33, 44);
console.log("The avergae of Koalas is", avgKoalas);
const avgDolphinsScore = calcAveragee(12, 34, 1);
console.log("the average of Dolphins is ", avgDolphins);
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins are the winner`);
  } else if (avgDolphins >= 2 * avgDolphins) {
    console.log("Kaolas won");
  }
};
