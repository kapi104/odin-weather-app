const alert = document.querySelector('.alertBox');
const main = document.querySelector('main');
const message = alert.querySelector('.message');

const handleError = (errorCode) => {
  if (typeof errorCode === 'number') {
    if (errorCode === 400) {
      message.innerHTML = "Couldn't find location you are looking for.";
    } else {
      message.innerHTML = `error code: ${errorCode}`;
    }
  } else {
    message.innerHTML = errorCode;
  }
  alert.classList.remove('invisible');
  main.classList.add('disableInputs');
};

const removeAlert = () => {
  alert.classList.add('invisible');
  main.classList.remove('disableInputs');
};

document
  .querySelector('.alertBox button')
  .addEventListener('click', removeAlert);

export default handleError;
