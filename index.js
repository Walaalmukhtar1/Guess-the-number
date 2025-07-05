let max = 100;
let min = 1;
let num = Math.floor(Math.random() * (max - min + 1) + min)
let remainingAttempts = 5;
let submit = document.getElementById("submit").onclick = function() {
    let input = document.getElementById("input").value;
    let msg = document.getElementById("msg");
    let attempts = document.getElementById("attempts");
    
    let guess = Number(input);
    
    if (guess == num){
        msg.textContent = `Bingo! You guessed it right! 🎉`;
        return;
    }

    remainingAttempts--;
    attempts.textContent = `${remainingAttempts}`;

    if (remainingAttempts == 0){
        msg.textContent =`No remaining attempts. The number was ${num}.`;
        return;
    }
    else if (guess > num) {
        msg.textContent = `The number is less than ${guess}`;
        
    }
    else if (guess < num) {
        msg.textContent =`The number is greater than ${guess}`;
    }

}
