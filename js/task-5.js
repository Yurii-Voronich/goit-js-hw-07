const refs = {
  buttonEl: document.querySelector('.change-color'),
  bodyEl: document.querySelector('body'),
  colorEl: document.querySelector('.color'),
};
const onClickHandler = e => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const value = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = value;
  refs.colorEl.textContent = value;
};
refs.buttonEl.addEventListener('click', onClickHandler);
