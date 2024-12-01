//define the function playround
function playGround(humanChoice , computerChoice)
{
    let computerScore = 0 ; 
    let humanScore = 0 ; 

    for(let i = 0 ; i< 5 ; i++){
        const humanChoiceInsensitive = humanChoice.toLowerCase() ; 
        if(humanChoiceInsensitive=== computerChoice)
        { 
            console.log("It's a tie..But you played well!!") ; 
        }
        else if((humanChoiceInsensitive == "rock" && computerChoice == "paper") || (humanChoiceInsensitive== "scissors" && computerChoice == "rock") || 
        (humanChoiceInsensitive == "paper" && computerChoice == "scissors"))
        {
            computerScore +=1 ; 
            console.log("You lose!! You choses" , computerChoice  , "beats" , humanChoice) ; 
        }
        else
        {
            humanScore +=1 ; 
            console.log("It's a Win..Hurray!! " , humanChoice , "beats" , computerChoice ) ; 
        } 
        if(i!==4)
        {
            humanChoice =     getHumanChoice()
            computerChoice =   getComputerChoice() ; 
        }
    }

        console.log("Your Score" , humanScore , "Computer Score" , computerScore) ; 
        if(humanScore > computerScore)
        {
            console.log("Hurray , You win") ; 
        }
        else if(computerScore > humanScore){
            console.log("You lose !! Try again") ; 
        }
        else{
            console.log("It's a tie") ; 
        }

}

function getComputerChoice()
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

function getHumanChoice()
{
    return prompt("Enter : rock / paper / scissors") ;
}

// get the user input 


const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playGround(humanSelection , computerSelection )
