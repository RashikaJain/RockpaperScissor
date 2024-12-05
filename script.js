// get the container here to show the results 
let userSelectionContainer = document.querySelector("#container") ; 
let humanResult =  document.querySelector("#humanResult") ; 
let computerResult = document.querySelector("#computerResult") ;
let humanChose = document.querySelector("#humanChoice") ; 
let computerChose = 
document.querySelector("#computerChoice") ;  

// get the selection by adding event listener
userSelectionContainer.addEventListener("click", getHumanChoice) ; 


let computerScore = 0 ;  
let humanScore = 0 ; 

// get the human choice 
function getHumanChoice(ev){
    let userValue = ev.target.id ;
    if (!["rock", "paper", "scissors"].includes(userValue)) {
        console.log("Invalid choice. Please click rock, paper, or scissors.");
        return;
    } 
    let computerSelection = getComputerChoice() 
    playGame(userValue , computerSelection)    
}

// get the computer choice 
function getComputerChoice()
{
    let randomNum = Math.floor(Math.random() * 3);
    if(randomNum === 0)
    {
        return "rock" ; 
    }
    else if (randomNum === 1)
    {
        return "paper" ; 
    }
    else
    {
        return "scissors"
    }
}

// play game 
function playGame(humanSelection , computerSelection)
{
    if(humanSelection === computerSelection)
    {
        console.log("It's a tie")
    }
    else if((humanSelection == "rock" && 
    computerSelection == "paper") || 
    (humanSelection == "paper" && 
    computerSelection == "scissors")
    || (humanSelection=="scissors" && 
    computerSelection == "rock"))
    {
        console.log("this time , computer got the lucky chance")
        computerScore++ ;  
    }
    else
    {
        humanScore++; 
        console.log("Yeah,  you are genius man!!") ; 
    }
    totalScore(humanSelection , computerSelection) ; 
    if(humanScore === 5 || computerScore === 5)
        {
            let result = document.querySelector("#resultDisplay") ; 
            if(humanScore===5)
            {
                result.innerText = "The result is : you won , you are a champ" ; 
            }
            else
            {
                result.innerText = "The result is : You lose" ; 
            }
            humanScore = 0 ; 
            computerScore = 0 ; 
        }
}

// calculated score is shown using textNode
function totalScore(humanSelection , computerSelection)
{
    humanChose.textContent = "You Chose : " + humanSelection ;
    computerChose.textContent = "Computer Chose : " + computerSelection ; 
    humanResult.textContent =  "Your Score :" + humanScore ; 
    computerResult.textContent = "Computer Score : " + computerScore ; 
}
