const refs = {
    decrementBtn : document.querySelector('[data-action="decrement"]'),
    incrementBtn : document.querySelector('[data-action="increment"]'),
    spanValue : document.querySelector('#value'),
};

refs.decrementBtn.addEventListener("click", onDecrementValue);
refs.incrementBtn.addEventListener("click", onIncrementValue);

let counterValue=0;

function onIncrementValue (){
    counterValue += 1;
    refs.spanValue.textContent=counterValue;
}

function onDecrementValue (){
    counterValue -= 1;
    refs.spanValue.textContent=counterValue;
}