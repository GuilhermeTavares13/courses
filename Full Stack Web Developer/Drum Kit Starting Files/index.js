for (let i = 0; i <= document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", () => {
        let audio = new Audio('./sounds/'+document.querySelectorAll(".drum").style.backgroundImage+'.mp3');
        audio.play();
    });
}

