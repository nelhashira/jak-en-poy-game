// Weapon container
const weapon = document.querySelector("#weapon");
// Play button
const startBtn = document.querySelector("#play");
// Prompt container
const prompt = document.querySelector("#prompt");
// Icon button (weapons)
const icons = document.querySelectorAll(".icon");
// CLose button
const closeBtn = document.querySelector("#close");
// Submit button
const form = document.querySelector("#form");
// Player's name
const playerName = document.querySelector("#username");
// Warning message
const warning = document.querySelector("#input-warning");
// Score sheets
const score = document.querySelector("#score");
// Player 1 Score
const player1 = document.querySelector("#player-1");
// Player 2 Score
const player2 = document.querySelector("#player-2");
// Greetings Box
const greet = document.querySelector("#greet");
// PlayAGain button
const playAgain = document.querySelector("#again");

// My Pick weapon
const p1WeaponName = document.querySelector("#my-pick");
// Enemy Pick Weapon
const p2WeaponName = document.querySelector("#enemy-pick");

// Function Start
function startGame() {
   greet.style.display = "none";
   prompt.classList.add("show-prompt");
}

// Reload Function
function resetValues() {
   location.reload();
   return false;
}

// Display prompt
startBtn.addEventListener("click", startGame);

// Play AGain
playAgain.addEventListener("click", resetValues);

// Close Prompt
closeBtn.addEventListener("click", () => {
   prompt.classList.remove("show-prompt");
});

// Submit player name
form.addEventListener("submit", (e) => {
   e.preventDefault();

   // If submitted
   if (e.target.classList.contains("submitted")) {
      if (playerName.value === "") {
         warning.style.visibility = "visible";
      } else {
         player = playerName.value;
         // Remove prompt
         prompt.classList.remove("show-prompt");
         // Remove button
         startBtn.style.display = "none";
         // Display weapon
         weapon.style.display = "block";
         // Display scoresheets
         score.style.display = "flex";
      }
   } else {
      console.log(e.target.nodeName);
   }
});

// Initial Score
let myScore = 0;
let aiScore = 0;

// My enemy (ai) weapon - randomized
function enemyWeapon() {
   const weaponList = ["fa-hand-rock", "fa-hand-scissors", "fa-hand-paper"];
   const index = Math.floor(Math.random() * weaponList.length);
   return weaponList[index];
}

// Choose weapon (add click event)
icons.forEach((icon) => {
   icon.addEventListener("click", (e) => {
      // Enemy weapon
      const enemyWeapons = enemyWeapon();
      // Your choosen weapon
      const myWeapon = e.target.classList[1];
      //
      if (
         (myWeapon === "fa-hand-rock" && enemyWeapons === "fa-hand-scissors") ||
         (myWeapon === "fa-hand-paper" && enemyWeapons === "fa-hand-rock") ||
         (myWeapon === "fa-hand-scissors" && enemyWeapons === "fa-hand-paper")
      ) {
         myScore++;
      } else if (myWeapon === enemyWeapons) {
         myScore += 0;
         aiScore += 0;
      } else {
         aiScore++;
      }

      // Pick info
      p1WeaponName.textContent = sliceText(myWeapon);
      p2WeaponName.textContent = sliceText(enemyWeapons);

      // Scores
      player1.textContent = myScore;
      player2.textContent = aiScore;

      let title = document.querySelector("#greet-title");

      if (player1.innerText == "10") {
         title.textContent = "You Win";
         title.style.color = "#2ecc71";
         document.querySelector("#winner-name").textContent = playerName.value;
         greet.style.display = "block";
      }
      if (player2.innerText == "10") {
         title.textContent = "You Lose";
         title.style.color = "#e74c3c";
         document.querySelector("#winner-name").textContent = "Computer";
         greet.style.display = "block";
      }
   });
});

function sliceText(text) {
   let str = text.toUpperCase();
   return str.slice(str.lastIndexOf("-") + 1);
}
