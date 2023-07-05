const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onCheckValidInput);

function onCheckValidInput (event){    
    console.log (inputEl.getAttribute("data-length")); 

    if(event.currentTarget.value.length !== Number(inputEl.getAttribute("data-length"))){
        inputEl.classList.add("invalid");        


    } else if (event.currentTarget.value.length === Number(inputEl.getAttribute("data-length")))
    {
        inputEl.classList.add("valid");
        
    }                 
      
};