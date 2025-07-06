const refs = {
  inputEl: document.querySelector('#name-input'),
  outputEl: document.querySelector('#name-output'),
};
const onInputHandler = e => {
  const inpValue = e.currentTarget.value.trim();
  if (inpValue.length !== 0) refs.outputEl.textContent = inpValue;
  else refs.outputEl.textContent = 'Anonymous';
};
refs.inputEl.addEventListener('input', onInputHandler);
