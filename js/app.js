// Button (random generator)
const randBtn = document.querySelector("#random-btn");
// Reset Button
const resetBtn = document.querySelector("#reset-btn");

// Score sheets
const p1ScoreSheet = document.querySelector("#player1-score");
const p2ScoreSheet = document.querySelector("#player2-score");

// Icon box
const p1Icon = document.querySelector("#player1-box");
const p2Icon = document.querySelector("#player2-box");

// COngrats box
const modal = document.querySelector("#congrats-box");
const playerName = document.querySelector("#player-name");

// Objects
const weapon = [
   {
      iconClass: "fa-hand-rock",
   },
   {
      iconClass: "fa-hand-scissors",
   },
   {
      iconClass: "fa-hand-paper",
   },
];

// CLose modal
document.querySelector("#close-modal").addEventListener("click", function () {
   modal.style.display = "none";
});

// Reset values
resetBtn.addEventListener("click", function () {
   document.location.reload();
});

// Return random number (0-2)
const randomGenerator = () => Math.floor(Math.random() * weapon.length);

// Player 1
function playerOne() {
   let i = randomGenerator();
   return weapon[i];
}

// Player 2
function playerTwo() {
   let i = randomGenerator();
   return weapon[i];
}

let p1Score = 0;
let p2Score = 0;

randBtn.addEventListener("click", function (e) {
   if (p1ScoreSheet.innerHTML >= 10 || p2ScoreSheet.innerHTML >= 10) {
      if (confirm("Would you like to reset the game?")) {
         document.location.reload();
      }
   }
   // Player 1
   let p1 = playerOne();
   let temp1 = weaponGenerator(p1, p1Icon).split(" ");
   let p1Weapon = temp1[temp1.length - 1];

   // // Player 2
   let p2 = playerTwo();
   let temp2 = weaponGenerator(p2, p2Icon).split(" ");
   let p2Weapon = temp2[temp2.length - 1];

   // Battle Begins
   if (
      (p1Weapon === "fa-hand-rock" && p2Weapon === "fa-hand-scissors") ||
      (p1Weapon === "fa-hand-paper" && p2Weapon === "fa-hand-rock") ||
      (p1Weapon === "fa-hand-scissors" && p2Weapon === "fa-hand-paper")
   ) {
      p1Score++;
   } else if (p1Weapon === p2Weapon) {
      p1Score += 0;
      p2Score += 0;
   } else {
      p2Score++;
   }

   // Scoresheet
   p1ScoreSheet.innerHTML = p1Score;
   p2ScoreSheet.innerHTML = p2Score;

   if (p1ScoreSheet.innerHTML == 10 || p2ScoreSheet.innerHTML == 10) {
      modal.style.display = "block";
      if (p1ScoreSheet.innerHTML == 10) {
         playerName.innerHTML = "Player 1";
      } else {
         playerName.innerHTML = "Player 2";
      }
   }
});

// Remove class attribute
p1Icon.removeAttribute("class");

// Generate class icon
function weaponGenerator(player, icon) {
   let newClassArr = [];
   newClassArr.push("far");
   if (newClassArr.length === 1) {
      newClassArr.push(player.iconClass);
   }
   icon.className = "";
   return (icon.className += newClassArr.join(" "));
}
