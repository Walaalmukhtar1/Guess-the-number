let max = 100;
let min = 1;
let num = Math.floor(Math.random() * (max - min + 1) + min);
let remainingAttempts = 5;
let gameOver = false;
let submit = document.getElementById("submit").onclick = function() {
    let input = document.getElementById("input").value;
    let msg = document.getElementById("msg");
    let attempts = document.getElementById("attempts");
    let rawInput = document.getElementById("input").value.trim();

    if (rawInput === "" || isNaN(rawInput)) {
        msg.textContent = `⚠️ Please enter a valid number`;
        return;
    }


    let guess = Number(input);
    if (gameOver) return;

    if (guess === "") {
        msg.textContent = `Please enter a valid number`;
    }
    if (guess == num){
        msg.textContent = `Bingo! You guessed it right! 🎉`;
        endGame();
        return;
    }

    remainingAttempts--;
    attempts.textContent = `${remainingAttempts}`;

    if (remainingAttempts == 0){
        msg.textContent =`No remaining attempts. The number was ${num}.`;
        endGame();
        return;
    }
    else if (guess > num) {
        msg.textContent = `The number is less than ${guess}`;
        
    }
    else if (guess < num) {
        msg.textContent =`The number is greater than ${guess}`;
    }

}

function endGame() {
    gameOver = true;
    input.disabled = true;
    submit.disabled = true;
    retry.style.display = "inline";
}

retry.onclick = function() {
    num = Math.floor(Math.random() * (max - min + 1) + min);
    remainingAttempts = 5;
    gameOver = false;
    attempts.textContent = 5;
    msg.textContent = "";
    input.value = "";
    input.disabled = false;
    submit.disabled = false;
    retry.style.display = "none";

}