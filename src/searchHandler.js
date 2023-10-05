import mainF from '.';
import removeAside from './deleteDOMElements';

const searchBar = document.querySelector('.search input[type="text"]');
const form = document.querySelector('form');

const checkSearchBar = (e) => {
  e.preventDefault();
  const searchValue = searchBar.value;

  removeAside();

  mainF(searchValue);

  searchBar.value = '';
};

form.addEventListener('submit', checkSearchBar);
