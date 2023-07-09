const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onCheckValidInput);

function onCheckValidInput (event){    
   
    if(event.currentTarget.value.length !== Number(event.currentTarget.getAttribute("data-length"))){
       
        addClass("valid", "invalid");  

    } else {   
       
        addClass("invalid","valid");       
    }      
    
      function addClass(class1, class2){
        event.currentTarget.classList.remove(class1);
        event.currentTarget.classList.add(class2);    
      }
};