const bg = document.querySelector(".background");
const dino = document.querySelector(".dino");

function moveCactus(cactus) {
  const initialPositionX = screen.width - (screenX + 60);
  let positionX = initialPositionX;
  cactus.style.left = `${positionX}px`;

  let leftInterval = setInterval(() => {
    const dinoPositionY = dino.style.bottom.replace("px", "");

    if (positionX < -60) {
      clearInterval(leftInterval);
      bg.removeChild(cactus);
    } else if (positionX > 0 && positionX < 60 && dinoPositionY < 60) {
      clearInterval(leftInterval);

      document.body.innerHTML =
        '<div class="game-over"><h1>Fim de jogo :/</h1></div>';
    } else {
      positionX -= 10;

      if (positionX <= initialPositionX) cactus.style.display = "block";

      cactus.style.left = `${positionX}px`;
    }
  }, 21);
}

(function createCactus() {
  let cactusGenerateTime = Math.random() * 6000;

  const cactus = document.createElement("div");
  cactus.classList.add("cactus");
  bg.appendChild(cactus);

  moveCactus(cactus);

  setTimeout(createCactus, cactusGenerateTime);
})();
