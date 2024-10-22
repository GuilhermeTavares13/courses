document.addEventListener("keypress", (event) => {
    retriveInstrumentAudio(event.key);
    buttonAnimation(event.key);
});



for (let i = 0; i <= document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

       retriveInstrumentAudio(this.innerHTML);
       buttonAnimation(this.innerHTML);
    });
}

function retriveInstrumentAudio(instrument) {

    let instrumentSelected;
    switch (instrument) {
        case 'w':
            instrumentSelected = 'tom-1';
            break;
        case 'a':
            instrumentSelected = 'tom-2';
            break;
        case 's':
            instrumentSelected = 'tom-3';
            break;
        case 'd':
            instrumentSelected = 'tom-4';
            break;
        case 'j':
            instrumentSelected = 'snare';
            break;
        case 'k':
            instrumentSelected = 'crash';
            break;
        case 'l':
            instrumentSelected = 'kick-bass';
            break;
        default:
            console.log(content);
            break;
    }
    let audio = new Audio('./sounds/'+instrumentSelected+'.mp3');
    audio.play();
}


function buttonAnimation(currentKey) {
   let activeButton = document.querySelector("." + currentKey);

   activeButton.classList.toggle("pressed");
   setTimeout(() => activeButton.classList.toggle("pressed"), 100);
}

