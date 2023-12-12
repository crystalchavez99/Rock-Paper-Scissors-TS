var action = { 0: "rock", 1: "paper", 2: "scissors" };
function randomChoice() {
    var choice = Math.floor(Math.random() * 3);
    return action[choice];
}
console.log(randomChoice());
