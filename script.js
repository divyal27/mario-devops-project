const mario = document.getElementById("mario");
const block = document.getElementById("block");

// 🔹 Score setup
let score = 0;
const scoreDisplay = document.getElementById("score");

// 🔹 Jump function
function jump() {
    if (!mario.classList.contains("jump")) {
        mario.classList.add("jump");

        setTimeout(function () {
            mario.classList.remove("jump");
        }, 500);
    }
}

// 🔹 Key press event
document.addEventListener("keydown", function () {
    jump();
});

// 🔹 Start score interval
let scoreInterval = startScore();

// 🔹 Function to start score
function startScore() {
    return setInterval(function () {
        score++;
        scoreDisplay.innerText = score;
    }, 100);
}

// 🔹 Collision detection
let checkDead = setInterval(function () {
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 50 && blockLeft > 0 && marioTop >= 130) {
        clearInterval(scoreInterval);
        alert("Game Over! Your score: " + score);
    }
}, 10);

// 🔹 Restart Game Function
function restartGame() {
    score = 0;
    scoreDisplay.innerText = score;

    clearInterval(scoreInterval);
    scoreInterval = startScore();
}