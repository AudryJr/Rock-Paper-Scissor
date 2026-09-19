// Rock-Paper-Scissors code

// Computer choice
function computerChoice() {
    let x = Math.floor(Math.random() * 9) + 1; // Génère un nombre entre 1 et 9
    
    if ([1, 4, 7].includes(x)) {
        return "rock";
    } else if ([2, 5, 8].includes(x)) {
        return "paper";
    } else {
        return "scissor";
    }
}


function playGame(x_input){


    let win_count = 0; 
    let loss_count = 0;
    let draw_count = 0;
    
    let compChoice = computerChoice();
    
    document.getElementById("affichage2").textContent = `...${x_input}`;

    // Logique de victoire / égalité / défaite
    if (
        (x_input === 'rock' && compChoice === 'scissor') ||
        (x_input === 'paper' && compChoice === 'rock') ||
        (x_input === 'scissor' && compChoice === 'paper')
        ) {
            document.getElementById("affichage").textContent  = `..You won! You played ${x_input}, and the computer ${compChoice}`;
            win_count++;
        } else if (x_input === compChoice) {
            document.getElementById("affichage").textContent = `..Draw! You played ${x_input}, and the computer ${compChoice}`;
            draw_count++;
        } else {
            document.getElementById("affichage").textContent = `..Sorry, you lose! you played ${x_input}, and the computer ${compChoice}`;
            loss_count++;
        }

}


   
const bouton1 = document.getElementById('rock');
const bouton2 = document.getElementById('paper');
const bouton3 = document.getElementById('scissor');


bouton1.addEventListener('click', () => { x_input = 'rock';
    console.log('you pressed rock');
});
bouton2.addEventListener('click', () => { x_input = 'paper';
    console.log('you pressed paper');
});
bouton3.addEventListener('click', () => { x_input = 'scissor';
    console.log('you pressed scissor');
});


const bouton4 = document.getElementById('play');
bouton4.addEventListener('click', ()=> {
    playGame(x_input);
});

