document.addEventListener('keydown', (event) => {
  const keyDisplay = document.getElementById('key-display');
  const codeDisplay = document.getElementById('code-display');

  keyDisplay.textContent = event.key;
  codeDisplay.textContent = event.code || event.keyCode;
});