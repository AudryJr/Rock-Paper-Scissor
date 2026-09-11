// Rock-Paper-Scissors code

// Computer choice
function computerChoice() {
    let x = Math.floor(Math.random() * 9) + 1; // Génère un nombre entre 1 et 9
    
    if ([1, 4, 7].includes(x)) {
        return "r";
    } else if ([2, 5, 8].includes(x)) {
        return "p";
    } else {
        return "s";
    }
}

// Choice map of the player
const choice = new Map();
choice.set("r", "Rock");
choice.set("p", "Paper");
choice.set("s", "Scissor");

console.log('This is the Rock-Paper-Scissors game, enjoy!');

let x_input = "a"; 
let win_count = 0; 
let loss_count = 0;
let draw_count = 0;
let go = 0; 

while (x_input !== 'q') {
    go = 0;
    
    // Boucle de validation de la saisie
    while (go === 0) {
        x_input = prompt("Choose a letter among r (:rock), p (:Paper), s (:Scissor) or q to quit the game");

        x_input = x_input.toLowerCase();

        if (['q', 'r', 'p', 's'].includes(x_input)) {
            go = 1;  
        } else {
            console.log('Type a valid letter among available options.');
        }
    }

    if (x_input !== 'q') {
        const compChoice = computerChoice();
        const playerFormatted = choice.get(x_input);
        const compFormatted = choice.get(compChoice);

        // Affichage des choix
        console.log(`Your choice: ${playerFormatted} vs Computer choice: ${compFormatted}`);
		console.log('');
        // Logique de victoire / égalité / défaite
        if (
            (x_input === 'r' && compChoice === 's') ||
            (x_input === 'p' && compChoice === 'r') ||
            (x_input === 's' && compChoice === 'p')
        ) {
            console.log("You win this round!");
            win_count++;
        } else if (x_input === compChoice) {
            console.log("It's a draw!");
            draw_count++;
        } else {
            console.log("You lose this round!");
            loss_count++;
        }

        console.log(`You have ${win_count} wins, ${loss_count} losses, and ${draw_count} draws.\n`);
    }
}

console.log("Thanks for playing!");