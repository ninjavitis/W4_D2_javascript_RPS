var reset_button = document.getElementById("reset_button");
var choices = document.getElementsByClassName("choice");
var playerDisplay = document.getElementById("player_selection");
var cpuDisplay = document.getElementById("cpu_selection");
var resultsDisplay = document.getElementById("results");
var winsDisplay = document.getElementById("wins");
var losssesDisplay = document.getElementById("losses");
var drawsDisplay = document.getElementById("draws");
var winRatioDisplay = document.getElementById("win_ratio");

var options = [
  "https://media.giphy.com/media/xT9Igf2wBfQ8ClCDNC/giphy.gif", 
  "https://media.giphy.com/media/yUrUb9fYz6x7a/giphy.gif", 
  "https://media.giphy.com/media/fk3b5iSLqUhdm/giphy.gif"
];
var playerSelection ="";
var cpuSelection="";
var wins = 0;
var losses = 0;
var ties = 0;
var winRatio = 0.0;
var gamesPlayed = 0;

// reset_button.addEventListener("mouseup", game_loop);
resultsDisplay.style.display = "none";


// function game_loop(){
//   console.log("start");

//   // reset the game state
//   resultsDisplay.style.display = "none";
//   playerDisplay.src = "";
//   cpuDisplay.src = "";

  
// }


for (i=0; i < choices.length; ++i)
  {
    choices[i].addEventListener("click", function()
    {
      // set the player selection 
      playerSelection = options[this.id];
      playerDisplay.src = playerSelection;

      // get the cpus pick
      getCPUChoice();

      // unhide the results
      resultsDisplay.style.display = "block";

      //win logic
      





      //update win/loss record
      updateWins();

      //
      gamesPlayed =+ 1;









    });
  }

function getCPUChoice()
{
  cpuSelection = options[Math.floor(Math.random()*2)];
  cpuDisplay.src = cpuSelection;
}

function updateWins()
{
  winsDisplay.innerHTML = "Wins: test";
  losssesDisplay.innerHTML = "Losses: test";
  drawsDisplay.innerHTML = "Draws: test";
  winRatioDisplay.innerHTML = "Win Ratio: " + wins/gamesPlayed;
}







