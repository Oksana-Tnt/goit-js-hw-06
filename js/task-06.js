const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onCheckValidInput);

function onCheckValidInput (event){    
   
    if(event.currentTarget.value.length !== Number(event.currentTarget.getAttribute("data-length"))){
       
        event.currentTarget.classList.remove("valid");
        event.currentTarget.classList.add("invalid");          


    } else if (event.currentTarget.value.length === Number(event.currentTarget.getAttribute("data-length")))    
    {
        event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.add("valid");
       
    }      
    
      
};