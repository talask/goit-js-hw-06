const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
const spanText = document.querySelector('#name-output').textContent;

const fnPasteName = event => {
    spanEl.textContent = inputEl.value.trim().length ? inputEl.value : spanText;
};

inputEl.addEventListener("input", fnPasteName);