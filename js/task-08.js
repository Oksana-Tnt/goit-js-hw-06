
const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onForm);

function onForm(event){
    event.preventDefault();

    const {email, password} = event.currentTarget.elements;

    if(email.value === "" || password.value === ""){
        alert ("can't be empty field!");
    }

    const data = {
        email: email.value,
        password: password.value,
    };

    console.log(data); 

    event.currentTarget.reset();
}