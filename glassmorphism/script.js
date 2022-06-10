let xMove = 5;
let yMove = 5;

const bigCircle = document.querySelector(".circle1");
const midCircle = document.querySelector(".circle2");
const smCircle = document.querySelector(".circle3");

document.addEventListener("mousemove", (e) => {
  xMove = +(e.pageX / 100).toFixed(0);
  yMove = +(e.pageY / 100).toFixed(0);
  bigCircle.style.transform = `translate(${-650 + xMove}px, ${-350 + yMove}px)`;
  midCircle.style.transform = `translate(${330 - xMove}px, ${0 - yMove}px)`;
  smCircle.style.transform = `translate(${-350 + yMove}px, ${260 + xMove}px)`;
});
