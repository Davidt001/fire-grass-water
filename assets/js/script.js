const choices = document.querySelectorAll(".choices");
let pScore = 0;
let cScore = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    const player = this.value;

    const computerchoice = ["Fire", "Grass", "Water"];
    const computer = computerchoice[Math.floor(Math.random() * 3)];