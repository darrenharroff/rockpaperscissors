const playerScore = document.querySelector(".score_player_score");
const computerScore = document.querySelector(".score_computer_score");
const buttons = document.querySelector(".buttons");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const response = document.querySelector(".response_text");
const playerIcon = document.querySelector(".player-icon");
const computerIcon = document.querySelector(".computer-icon");

let options = ["Rock", "Paper", "Scissors"];

let computer;
let player;
let cScore = 0;
let pScore = 0;

buttons.addEventListener("click", e => {
  if (e.target.classList.contains("buttons_button")) {
    player = e.target.innerHTML;
    computer = options[Math.floor(Math.random() * options.length)];
    //
    if (pScore == 10 || cScore == 10) {
      return;
    } else {
      if (
        (player == "Rock" && computer == "Scissors") ||
        (player == "Scissors" && computer == "Paper") ||
        (player == "Paper" && computer == "Rock")
      ) {
        pScore++, (playerScore.innerHTML = pScore);
        response.innerHTML = "Player wins!";
      } else if (
        (computer == "Rock" && player == "Scissors") ||
        (computer == "Scissors" && player == "Paper") ||
        (computer == "Paper" && player == "Rock")
      ) {
        cScore++, (computerScore.innerHTML = cScore);
        response.innerHTML = "Computer got it...";
      } else {
        response.innerHTML = "Tie.";
      }

      if (player == "Rock") {
        playerIcon.src = "img/icons8-hand-rock-100.png";
      } else if (player == "Paper") {
        playerIcon.src = "img/icons8-hand-100.png";
      } else if (player == "Scissors") {
        playerIcon.src = "img/icons8-hand-scissors-100.png";
      }

      if (computer == "Rock") {
        computerIcon.src = "img/icons8-hand-rock-100.png";
      } else if (computer == "Paper") {
        computerIcon.src = "img/icons8-hand-100.png";
      } else if (computer == "Scissors") {
        computerIcon.src = "img/icons8-hand-scissors-100.png";
      }

      if (pScore == 10 || cScore == 10) {
        response.innerHTML = "GAME!";
        response.style.fontSize = "3.5rem";
      }
    }
  }
});

// round = (player, computer) => {
//   if (options.includes(player)) {
//     if (
//       (player == "Rock" && computer == "Scissors") ||
//       (player == "Scissors" && computer == "Paper") ||
//       (player == "Paper" && computer == "Rock")
//     ) {
//       return "Player Wins!!";
//     } else if (
//       (computer == "Rock" && player == "Scissors") ||
//       (computer == "Scissors" && player == "Paper") ||
//       (computer == "Paper" && player == "Rock")
//     ) {
//       return "Computer Wins...";
//     } else {
//       return "Tie.";
//     }
//   }
// };

// let pScore = 0;
// let cScore = 0;

// updateScore = () => {
//   console.log(`P:${pScore} - C:${cScore}`);
//   return `P:${pScore} - C:${cScore}`;
// };

// game = rounds => {
//   for (i = 0; i < rounds; i++) {
//     let player = playerPlay();
//     let computer = computerPlay();
//     const result = round(player, computer);
//     if (result == "Player Wins!!") {
//       pScore++;
//     } else if (result == "Computer Wins...") {
//       cScore++;
//     }
//     updateScore();
//   }
//   if (pScore > cScore) {
//     console.log(`Player Wins by ${pScore - cScore}!`);
//   } else if (pScore < cScore) {
//     console.log(`Computer Wins by ${cScore - pScore}!`);
//   } else if (pScore == cScore) {
//     console.log("Tie Game.");
//   }
// };

// game(10);
