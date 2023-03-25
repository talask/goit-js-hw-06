const inputEl = document.querySelector('#validation-input');
const inputDataAtr = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", fnCheckLength);

function fnCheckLength() {
    
    const newNameClass = inputEl.value.trim().length == inputDataAtr ? "valid" : "invalid";

    if(inputEl.classList.contains("valid")) {
        inputEl.classList.remove("valid");
    }
    if(inputEl.classList.contains("invalid")) {
        inputEl.classList.remove("invalid");
    }

    inputEl.classList.add(newNameClass);
}