let userSelectionContainer = document.querySelector("#container") ; 

userSelectionContainer.addEventListener("click", function(ev){
    if(ev.target.tagName === "BUTTON")
    {
    let userValue = ev.target.id ; 
    console.log(userValue) ; 
    }
})
