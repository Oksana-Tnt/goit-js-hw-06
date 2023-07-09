function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  bodyEl: document.querySelector("body"),
  buttonEl: document.querySelector(".change-color"),
  spanEl: document.querySelector(".color"),
};

refs.buttonEl.addEventListener("click", onChangeColor)

function onChangeColor(){
  let color = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = color;
  refs.spanEl.textContent = color;
};