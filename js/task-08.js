const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget;
     
    if (email.value.trim() === "" || password.value.trim() === "") {
        return alert("Заповніть, будь ласка, усі поля форми реєстрації!");
    }

    const formEl = {
        email: email.value.trim(),
        password: password.value.trim()
    };
    
    console.log(formEl);
    e.currentTarget.reset();
}