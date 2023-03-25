const inputEl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputEl.addEventListener("input", fnChangeFontSize);

function fnChangeFontSize() {
    text.style.fontSize = `${inputEl.value}px`;
}