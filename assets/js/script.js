const choices = document.querySelectorAll(".choices");
let pScore = 0;
let cScore = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    const player = this.value;

    const computerchoice = ["Fire", "Grass", "Water"];
    const computer = computerchoice[Math.floor(Math.random() * 3)];

    function whowon(player, computer) {
        const thisgame = `${player} vs ${computer}`;
        if (player === computer) {
          alert(`${thisgame} is a Tie`);
          return;
        }
  
        if (player === "Fire") {
          if (computer === "Water") {
            alert(`${thisgame} = You Win`);
            pScore++;
          } else {
            alert(`${thisgame} = Computer Wins`);
            cScore++;
          }
        }
        //Check for Grass
        else if (player === "Grass") {
          if (computer === "Fire") {
            alert(`${thisgame} = You Win`);
            pScore++;
          } else {
            alert(`${thisgame} = Computer Wins`);
            cScore++;
          }
        }
        //Check for Water
        else {
          if (computer === "Grass") {
            alert(`${thisgame} = You Win`);
            pScore++;
          } else {
            alert(`${thisgame} = Computer Wins`);
            cScore++;
          }
        }
      }