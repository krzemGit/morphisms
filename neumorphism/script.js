const textParagraph = document.getElementById("text");
const neuCard = document.getElementById("card");

const textContent = "neumorphism";

let count = 0;
let colorCount = 0;

function addLetter() {
  count += 1;
  textParagraph.innerText = textContent.slice(0, count);
  if (count < textContent.length) setTimeout(addLetter, 200);
}

addLetter();

const textColors = ["red", "yellow", "blue"];
neuCard.addEventListener("click", () => {
  if (colorCount < 2) colorCount += 1;
  else colorCount = 0;
  textParagraph.className = textColors[colorCount];
});
