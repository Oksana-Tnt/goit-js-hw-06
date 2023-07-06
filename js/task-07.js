const inputEl=document.querySelector("#font-size-control");
const spanEl=document.querySelector("#text");

inputEl.addEventListener("input", onChangeInlineStyle);
let step = 16;
function onChangeInlineStyle(){
    step +=1;
    
        spanEl.style.fontSize = `${step}px`;
    
}
