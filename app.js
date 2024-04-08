let userScore = 0;
let botScore = 0;
let boxes = document.querySelectorAll('.box');
let msg = document.querySelector('.msg');
const userscorepara = document.querySelector('#user-score');
const botscorepara = document.querySelector('#bot-score');

const genbotChoice = () =>{
    const boxes = ['rock','paper','scissor'];
    var randomIndex = Math.floor(Math.random() * boxes.length);
    var chosenBox = boxes[randomIndex];
    return chosenBox;
};

const playGame = (userChoice) =>{
    const botChoice = genbotChoice();
    if(userChoice === botChoice){
        msg.innerText = 'Match Draw Play Again!';
        msg.style.backgroundColor = 'rgb(31,43,39)';

    }else if(userChoice === 'paper' && botChoice === 'rock' || userChoice === 'rock' && botChoice === 'scissor' || userChoice === 'scissor' && botChoice === 'paper'){
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `🏆You Win!🏆 Your ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor = 'green';
    }
    else{
        botScore++;
        botscorepara.innerText = botScore;
        msg.innerText = `😭You Lose!😭 ${botChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';    
    };
};

boxes.forEach((box) =>{
    box.addEventListener('click',() =>{
        let userChoice = box.getAttribute('id');
        playGame(userChoice);
    });
});




