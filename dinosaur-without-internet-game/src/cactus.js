const bg = document.querySelector(".background");

function moveCactus(cactus) {
  const initialPositionX = screen.width - (screenX + 60);
  let positionX = initialPositionX;
  cactus.style.left = `${positionX}px`;

  let leftInterval = setInterval(() => {
    if (positionX < -60) {
      clearInterval(leftInterval);
      bg.removeChild(cactus);
    } else {
      positionX -= 10;

      if (positionX <= initialPositionX) cactus.style.display = "block";

      cactus.style.left = `${positionX}px`;
    }
  }, 17);
}

(function createCactus() {
  let cactusGenerateTime = Math.random() * 6000;

  const cactus = document.createElement("div");
  cactus.classList.add("cactus");
  bg.appendChild(cactus);

  moveCactus(cactus);

  setTimeout(createCactus, cactusGenerateTime);
})();
