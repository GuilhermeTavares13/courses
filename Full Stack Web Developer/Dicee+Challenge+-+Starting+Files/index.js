let randomNumber = 6;

function rollDice(target) {
    randomNumber = Math.floor(Math.random()*6+1);   

    let srcImg = './images/dice'+randomNumber+'.png';
  
    document.querySelector(target).setAttribute("src",srcImg);

    if (document.querySelector('.img1').getAttribute("src").match(/(\d+)/)[0] > 
    document.querySelector('.img2').getAttribute("src").match(/(\d+)/)[0]) {
        document.querySelector("h1").textContent = "Player 1 Wins";
    } 
    else if (document.querySelector('.img1').getAttribute("src").match(/(\d+)/)[0] < 
        document.querySelector('.img2').getAttribute("src").match(/(\d+)/)[0]) {
        document.querySelector("h1").textContent = "Player 2 Wins";
    } 
    else {
        document.querySelector("h1").textContent = "Draw"; 
    }
}
