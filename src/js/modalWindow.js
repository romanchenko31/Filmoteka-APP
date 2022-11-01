import { MovieApiService } from './MovieApiService';
import modalWindowHendelbar from '..//template/modalWindow.hbs';
import { popupButtons } from './popupButtons';

const movieApiService = new MovieApiService;
const body = document.querySelector('body');

function modalShow() {
  const filmList = document.querySelector('.film-list');
  const divModalWindow = document.querySelector('.modalWindow');
  filmList.addEventListener('click', async (e) => { 
  
    if (e.target.closest('li')) {
      const id = e.target.closest('li').id;
      const getMoviesData = await movieApiService.getMoviesById(id);
      getMoviesData.popularity = getMoviesData.popularity.toFixed(1);
      const marcupModalWindow = modalWindowHendelbar(getMoviesData);
      divModalWindow.parentElement.classList.add('backdrop');
      body.classList.add('bodyIsHidden');
      divModalWindow.innerHTML = marcupModalWindow;
      popupButtons(id);
    } 
  });
}

function modalHidden() {
  const divModalWindow = document.querySelector('.modalWindow');
  divModalWindow.parentElement.addEventListener('click', (e) => {
    if (e.target.className === 'backdrop' || e.target.className === 'close' ) {
      divModalWindow.parentElement.classList.remove('backdrop');
      body.classList.remove('bodyIsHidden');
      divModalWindow.innerHTML = '';
    } 
  })
}

export {modalShow, modalHidden};
