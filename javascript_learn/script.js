alert("It works!")
'speechSynthesis' in window ? console.log("Web Speech API supported!") : console.log("Web Speech API not supported :-(")

const synth = window.speechSynthesis
let ourText = "Hey there what's up!!!! Lets play a game"
let utterThis = new SpeechSynthesisUtterance(ourText)
synth.speak(utterThis)


const game = ["Stone", "Paper", "Scissor"];
let index = Math.floor(Math.random() * game.length);
let comp = game[index];

let user;
let a = 0, b = 0;
do {
    while (a < 3 && b < 3) {
        ourText = "1 for Stone 2 for Paper 3 for Scissor";
        utterThis = new SpeechSynthesisUtterance(ourText);
        synth.speak(utterThis);
        user = prompt("\n1 for Stone\n2 for Paper\n3 for Scissor\n");
       
        if ((user == 1 && index == 1) || (user == 2 && index == 2) || (user == 3 && index == 0)) {
            b++;
            console.log(`YOU: ${game[user - 1]}   AI: ${game[index]}\n hahaha I win!!!\nStatus: \nYOU: ${a}  AI: ${b}\n`);
        }
        else if ((user == 1 && index == 2) || (user == 2 && index == 0) || (user == 3 && index == 1)) {
            a++;
            console.log(`YOU: ${game[user - 1]}  AI: ${game[index]}\nohh you win.... \nStatus : \n YOU: ${a}  AI: ${b}\n`);
        }
        else {
            console.log(`its draw... \nStatus : \n YOU: ${a}  AI: ${b}\n`);
        }

    }
    (a == 3) ? console.log("\nyou win this game......") : console.log("\nI win this game......");
    a = parseInt(prompt("Enter 1 to Play again"));
}
while (a == 1);