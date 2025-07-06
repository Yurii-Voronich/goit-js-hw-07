const refs = {
  loginFormEl: document.querySelector('.login-form'),
};

const onSubmitHandler = e => {
  e.preventDefault();
  const formData = {
    email: refs.loginFormEl.elements.email.value.trim(),
    password: refs.loginFormEl.elements.password.value.trim(),
  };

  const data = {
    email: formData.email,
    password: formData.password,
  };
  if (Object.values(data).includes('')) {
    alert('All form fields must be filled in');
  } else {
    console.log(data);
    refs.loginFormEl.reset();
  }
};
refs.loginFormEl.addEventListener('submit', onSubmitHandler);
