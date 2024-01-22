const playerChoice = document.getElementById("playerChoice");
const BotChoice = document.getElementById("comChoice");
const h1 = document.querySelector("h1");
const yourScorePlace = document.getElementById("yourScore");
const BotScorePlace = document.getElementById("comScore");
var playerscore = 0;
var Botscore = 0;
function chooseFunc(value) {
    if (Botscore == 5 || playerscore == 5) {
        alert("game is over");
    } else {

        switch (value) {
            case 1:
                var randomNum = Math.floor(Math.random() * 3) + 1;
                playerChoice.innerHTML = `<h2>Rock</h2>`;
                switch (randomNum) {
                    case 1:
                        BotChoice.innerHTML = `<h2>Rock</h2>`;
                        h1.innerHTML = `<h2>Its a Tie</h2>`;
                        setTimeout(function () {
                            h1.innerHTML = `<h1>Choose an Option</h1>`;
                        }, 500);
                        break;
                    case 2:
                        BotChoice.innerHTML = `<h2>Paper</h2>`;
                        h1.innerHTML = `<h2>Bot Wins</h2>`;
                        Botscore++;
                        yourScorePlace.innerHTML = `You: ${playerscore}`
                        BotScorePlace.innerHTML = `Bot: ${Botscore}`
                        setTimeout(function () {
                            h1.innerHTML = `<h1>Choose an Option</h1>`;
                        }, 500);
                        break;

                    default:
                        BotChoice.innerHTML = `<h2>Scissors</h2>`;
                        h1.innerHTML = `<h2>You Win</h2>`;
                        playerscore++;
                        console.log(playerscore);
                        yourScorePlace.innerHTML = `You: ${playerscore}`
                        BotScorePlace.innerHTML = `Bot: ${Botscore}`
                        setTimeout(function () {
                            h1.innerHTML = `<h1>Choose an Option</h1>`;
                        }, 500);
                        break;
                }
                break;
            case 2:
                var randomNum = Math.floor(Math.random() * 3) + 1;
                playerChoice.innerHTML = `<h2>Paper</h2>`;
                switch (randomNum) {
                    case 1:
                        BotChoice.innerHTML = `<h2>Rock</h2>`;
                        h1.innerHTML = `<h2>You Win</h2>`;
                        playerscore++;
                        console.log(playerscore);
                        yourScorePlace.innerHTML = `You: ${playerscore}`
                        BotScorePlace.innerHTML = `Bot: ${Botscore}`
                        setTimeout(function () {
                            h1.innerHTML = `<h1>Choose an Option</h1>`;
                        }, 500);
                        break;
                    case 2:
                        BotChoice.innerHTML = `<h2>Paper</h2>`;
                        h1.innerHTML = `<h2>Its a Tie</h2>`;
                        setTimeout(function () {
                            h1.innerHTML = `<h1>Choose an Option</h1>`;
                        }, 500);
                        break;

                    default:
                        BotChoice.innerHTML = `<h2>Scissors</h2>`;
                        h1.innerHTML = `<h2>Bot Wins</h2>`;
                        Botscore++;

                        yourScorePlace.innerHTML = `You: ${playerscore}`
                        BotScorePlace.innerHTML = `Bot: ${Botscore}`
                        setTimeout(function () {
                            h1.innerHTML = `<h1>Choose an Option</h1>`;
                        }, 500);
                        break;
                }
                break;

            default:
                var randomNum = Math.floor(Math.random() * 3) + 1;
                playerChoice.innerHTML = `<h2>Scissors</h2>`;
                switch (randomNum) {
                    case 1:
                        BotChoice.innerHTML = `<h2>Rock</h2>`;
                        h1.innerHTML = `<h2>Bot wins</h2>`;
                        Botscore++;
                        yourScorePlace.innerHTML = `You: ${playerscore}`
                        BotScorePlace.innerHTML = `Bot: ${Botscore}`
                        setTimeout(function () {
                            h1.innerHTML = `<h1>Choose an Option</h1>`;
                        }, 500);

                        break;
                    case 2:
                        BotChoice.innerHTML = `<h2>Paper</h2>`;
                        h1.innerHTML = `<h2>You Win</h2>`;
                        playerscore++;
                        console.log(playerscore);
                        yourScorePlace.innerHTML = `You: ${playerscore}`
                        BotScorePlace.innerHTML = `Bot: ${Botscore}`
                        setTimeout(function () {
                            h1.innerHTML = `<h1>Choose an Option</h1>`;
                        }, 500);
                        break;

                    default:
                        BotChoice.innerHTML = `<h2>Scissors</h2>`;
                        h1.innerHTML = `<h2>Its a Tie</h2>`;
                        setTimeout(function () {
                            h1.innerHTML = `<h1>Choose an Option</h1>`;
                        }, 500);
                        break;
                }
                break;
        }
    }
    if (Botscore == 5 || playerscore == 5) {
        document.querySelector("main").innerHTML = `<h1>Game Over</h1><h2>You: ${playerscore} : ${Botscore}:Bot</h2><br><a href = "">Restart</a>`;
    }
}