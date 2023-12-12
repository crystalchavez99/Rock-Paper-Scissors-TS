let action = 
{ 
    0: {
        value: "rock",
        wins: "scissors",
        loses: "paper"
    }, 
    1: {
        value: "paper",
        wins: "rock",
        loses: "scissors"
    }, 
    2: {
        value: "scissors",
        wins: "paper",
        loses: "rock"
    }
};
function randomChoice(): string {
    let choice = Math.floor(Math.random() * 3);
    return action[choice].value;
}

let player1 = randomChoice();
let player2 = randomChoice()

function winner(p1: string, p2: string) {
    console.log(p1, p2)
    if (p1 == p2) {
        return `It's a tie!`
    }
    for(let key in action){
        let instance = action[key].value
        if(instance == p1 && action[key].wins == p2){
            return `Player 1 Wins!`
        }else  if(instance == p2 && action[key].wins == p1){
            return `Player 2 Wins!`
        }
    }

}

console.log(winner(player1,player2));