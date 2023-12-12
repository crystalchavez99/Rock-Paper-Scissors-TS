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
    }else if(action[p1].wins === action[p2].loses){
        return `Player 1 Wins!`
    }else if(action[p2].wins === action[p1].loses){
        return `Player 2 Wins!`
    }

}

console.log(winner(player1,player2));