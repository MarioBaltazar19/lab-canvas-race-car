const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const player = new Component(225, 600, 50, 50, "red", ctx);

let game = new Game(ctx, 500, 700, player);

game.start();

document.addEventListener("keydown", (e) => {
    switch(e.code){
        case "ArrowRight" :
            player.speedX+=1;
            break;
        case "ArrowLeft" :
            player.speedX-=1;
            break;
    }
});

document.addEventListener("keyup", (e) => {
    player.speedX = 0;
    player.speedY = 0;
});
