function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  divControlsEl : document.querySelector("#controls"),
  divBoxesEl : document.querySelector("#boxes"),
  createBtnEl : document.querySelector('button[data-create]'),
  destroyBtnEl : document.querySelector('button[data-destroy]'),  
};


refs.createBtnEl.addEventListener("click", onCreateBoxes);
refs.destroyBtnEl.addEventListener("click", onDestroyBoxes);


function onCreateBoxes(event){
  refs.divBoxesEl.insertAdjacentHTML("beforeend", createBoxes(refs.divControlsEl.firstElementChild.value));
};

function createBoxes(amount){  
  let markup = "";
  for ( let i=1, j=30; i<=amount; i+=1, j+=10){
   markup += `<div style="background-color:${getRandomHexColor()}; width : ${j}px; height : ${j}px">hi</div>`;
  }
 return markup;
};

function onDestroyBoxes(){
  refs.divBoxesEl.innerHTML = "";
}