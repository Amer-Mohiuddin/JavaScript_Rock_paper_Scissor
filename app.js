let userScore=0;
let compScore=0;
let userScorepara=document.querySelector("#user-score");
let compScorepara=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const drawGame=()=>{
    msg.innerText="Game was draw.Play Again!";
    msg.style.backgroundColor="#081b31";
}
const genCompChoice=()=>
{
    let options=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You lose!  ${compChoice} beats your ${userChoice}`;;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice) => {
    const compChoice=genCompChoice();
    
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
    let userWin=true;
    if(userChoice==="rock")
    {
        userWin=compChoice==="scissor"?true:false;
    }
    else if(userChoice==="paper")
    {
        userWin=compChoice==="rock"?true:false;
    }
    else{
        userWin=compChoice==="paper"?true:false;  
    }
    showWinner(userWin,userChoice,compChoice);
}

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})