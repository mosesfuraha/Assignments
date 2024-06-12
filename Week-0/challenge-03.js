
//BMI = mass / height ** 2 = mass / (heigth * height)
const MarkBmi = {
  fullName: "Mark Miller",
  mass: 98,
  height: 1.69,
  calcMarkBMI: function () {
    this.result = this.mass / this.height ** 2;
    return this.result;
  },
};

const JohnBmi = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcJohnBMI: function () {
    this.result = this.mass / (this.height * this.height);
    return this.result;
  },
};

MarkBmi.calcMarkBMI();
JohnBmi.calcJohnBMI();
console.log(MarkBmi.result, JohnBmi.result);
if (MarkBmi.result > JohnBmi.result) {
  console.log(
    `${MarkBmi.fullName} with  ${MarkBmi.result} BMI has much  more height than ${JohnBmi.fullName} with  ${JohnBmi.result} BMI`
  );
} else if (JohnBmi.result > MarkBmi.result) {
  console.log(
    `${JohnBmi.fullName} with  ${JohnBmi.result} BMI has much  more height than ${MarkBmi.fullName} with  ${MarkBmi.result} BMI`
  );
}
