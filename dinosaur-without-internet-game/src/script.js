let dinoIsJumping = false;
const dino = document.querySelector(".dino");

function upElement(element, positionY) {
  element.style.bottom = `${positionY}px`;
}

function downElement(element, positionY) {
  element.style.bottom = `${positionY}px`;
}

function jump() {
  dinoIsJumping = true;

  let positionY = 0;
  const animationTimeMs = 19;

  let upInterval = setInterval(() => {
    if (positionY >= 150) {
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (positionY <= 0) {
          clearInterval(downInterval);

          dinoIsJumping = false;
        } else {
          positionY -= 20;
          downElement(dino, positionY);
        }
      }, animationTimeMs);
    } else {
      positionY += 20;
      upElement(dino, positionY);
    }
  }, animationTimeMs);
}

function handleKeyDonw(e) {
  if (e.keyCode === 32 && !dinoIsJumping) {
    jump();
  }
}

document.addEventListener("keydown", handleKeyDonw);
