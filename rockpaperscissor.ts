let action = {0: "rock", 1: "paper", 2: "scissors"};
function randomChoice(){
    let choice = Math.floor(Math.random() * 3);
    return action[choice];
}

console.log(randomChoice())