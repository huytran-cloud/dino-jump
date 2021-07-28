const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function() {
            dino.classList.remove("jump");
        }, 1000);
    }
}

let isAlive = setInterval(function () {
    //Dino's Y position
    let dinoTop = window.getComputedStyle(dino).getPropertyValue("top");

    //Cactus's Y position
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );

    //Collision dino vs cactus
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Game over!");
    }

}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});