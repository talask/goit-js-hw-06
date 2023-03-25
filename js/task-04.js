let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", fnDecrement);
incrementBtn.addEventListener("click", fnIncrement);

function fnDecrement(event) {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

function fnIncrement(event) {
    counterValue += 1;
    valueEl.textContent = counterValue;
}