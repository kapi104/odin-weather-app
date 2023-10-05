import mainF from '.';
import toggleLoading from './displayLoadingAnimation';

const searchBar = document.querySelector('.search input[type="text"]');
const btn = document.querySelector('.search input[type="submit"]');
const form = document.querySelector('form');

const checkSearchBar = (e) => {
  e.preventDefault();
  const searchValue = searchBar.value;

  if (searchValue !== '') {
    form.classList.add('disableInputs');
    document.activeElement.blur();
    toggleLoading();

    mainF(searchValue).then(() => {
      form.classList.remove('disableInputs');
      toggleLoading();
    });

    searchBar.value = '';
  }
};

form.addEventListener('submit', checkSearchBar);
