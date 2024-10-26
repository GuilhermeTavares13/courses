const buttonColours = ["red","blue","green","yellow"];
const gamePattern = [];
const userClickedPattern = [];
let randomChosenColour;


function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}

function playAudio(color) {
    let audio = new Audio('./sounds/'+color+'.mp3');
    audio.play();
}

function animatePress(currentColour) {
    $(".btn."+currentColour).addClass("pressed");

    setTimeout(() => {$(".btn."+currentColour).removeClass("pressed")}, 100);
}

nextSequence();

$(".btn."+randomChosenColour).fadeOut(100).fadeIn(100);

$("div.btn").on("click",(a) => {
    let userChosenColour = a.target.id;
    userClickedPattern.push(userChosenColour);
    playAudio(userChosenColour);
    animatePress(userChosenColour);
});