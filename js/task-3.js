const refs = {
  inputEl: document.querySelector('#name-input'),
  outputEl: document.querySelector('#name-output'),
};
const onInputHandler = e => {
  const inpValue = e.currentTarget.value.trim();
  if (inpValue !== '') refs.outputEl.textContent = inpValue;
};
const onBlurHandler = e => {
  if (e.currentTarget.value === '') refs.outputEl.textContent = 'Anonymous';
};
refs.inputEl.addEventListener('input', onInputHandler);
refs.inputEl.addEventListener('blur', onBlurHandler);
