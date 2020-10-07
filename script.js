const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const currentTime = new Date();

  const seconds = currentTime.getSeconds();
  const secondDeg = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  const mins = currentTime.getMinutes();
  const minsDeg = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDeg}deg)`;

  const hours = currentTime.getHours();
  const hoursDeg = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;

  if(seconds == 0){
    secondHand.style.transitionDuration = '0s';
    minHand.style.transitionDuration = '0s';
    hourHand.style.transitionDuration = '0s';
  } else {
    secondHand.style.transitionDuration = '0.05s';
    minHand.style.transitionDuration = '0.05s';
    hourHand.style.transitionDuration = '0.05s';
  }
  
  requestAnimationFrame(setDate);
}

setDate();