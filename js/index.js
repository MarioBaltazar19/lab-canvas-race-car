
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');





window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const player = new Component(0, 100, 50, 50, "red", ctx);

    let game = new Game(ctx, 500, 700, player);

    game.start();

  }
};
