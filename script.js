//define the function playround
function playround(humanChoice , computerChoice)
{
    let humanScore = 0 ; 
    let computerScore = 0 ; 
    const humanChoiceInsensitive = humanChoice.toLowerCase() ; 
    if(humanChoiceInsensitive=== computerChoice)
    { 
        console.log("It's a tie..But you played well!!") ; 
    }
    else if((humanChoiceInsensitive == "rock" && computerChoice == "paper") || (humanChoiceInsensitive== "scissors" && computerChoice == "rock") || 
    (humanChoiceInsensitive == "paper" && computerChoice == "scissors"))
    {
        computerScore +=1 ; 
        console.log("You lose!! You choses" , humanChoice , " and computer choses " , computerChoice , " and " ,computerChoice  , "beats" , humanChoice) ; 
    }
    else
    {
        humanScore +=1 ; 
        console.log("It's a Win..Hurray!! You choses" , humanChoice , " and computer choses " , computerChoice , " and " ,humanChoice , "beats" , computerChoice ) ; 
    }
}

function getComputerSElection()
{
    let noOfChoices = 3 ; 
    let computerSelection ; 
    let computerValue = Math.floor(Math.random() * noOfChoices) ;
    if(computerValue === 0)
    {
        computerSelection = "rock" ; 
    }
    else if(computerValue === 1)
    {
        computerSelection = "paper"
    }
    else{
        computerSelection = "scissors"
    }
    return computerSelection ; 
}

// get the user input 
const humanSelection = prompt("Enter either rock paper or scissors") ; 
const computerSelection = getComputerSElection()
// invoke the function playround
playround(humanSelection , computerSelection)