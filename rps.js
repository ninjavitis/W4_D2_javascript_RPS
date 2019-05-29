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
var draws = 0;
var winRatio = 0.0;
var gamesPlayed = 0;

// reset_button.addEventListener("mouseup", game_loop);
resultsDisplay.style.display = "none";


for (i=0; i < choices.length; ++i)
  {
    choices[i].addEventListener("click", function()
    {
      // set the player selection 
      playerPick = this.id;
      playerSelection = options[playerPick];
      playerDisplay.src = playerSelection;

      cpuPick = Math.floor(Math.random()*3);
      cpuSelection = options[cpuPick];
      cpuDisplay.src = cpuSelection;

      // unhide the results
      resultsDisplay.style.display = "flex";
      resultsDisplay.style.justifyContent = "center";

      //win logic  
     if (playerPick == 0 && cpuPick == 1)
    {
      losses ++;
    } else if (playerPick == 0 && cpuPick == 2)
    {
      wins ++;
    } else if (playerPick == 1 && cpuPick == 0)
    {
      wins ++;
    } else if (playerPick == 1 && cpuPick == 2)
    {
      losses ++;
    } else if (playerPick == 2 && cpuPick == 0)
    {
      losses ++;
    } else if (playerPick == 2 && cpuPick == 1)
    {
      wins ++;
    } else
    {
      draws ++;
    }
      gamesPlayed += 1;
      winsDisplay.innerHTML = "Wins: " + wins;
      losssesDisplay.innerHTML = "Losses: " + losses;
      drawsDisplay.innerHTML = "Draws: " + draws;
      winRatioDisplay.innerHTML = "Win Ratio: " + ((wins/gamesPlayed)*100).toFixed(2) + "%";

    });
  };









