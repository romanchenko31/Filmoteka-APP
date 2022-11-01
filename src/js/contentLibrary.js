import { MovieApiService } from './MovieApiService';
import { modalShow, modalHidden } from './modalWindow';
import { MovieService } from './MovieService';
import marcupContentLibrary from '..//template/contentLibrary.hbs';

const movieApiService = new MovieApiService;
const movieService = new MovieService;

if (location.pathname === "/library.html") {
  let arrayWatchedId = JSON.parse(movieService.getWatchedMovieIds);
  let arrayQueueId = JSON.parse(movieService.getQueuedMovieIds);
  const buttonWatched = document.querySelector('#watched');
  const buttonQueue = document.querySelector('#queue');
  buttonWatched.classList.add('clicks');
  buttonWatched.addEventListener('click', (e) => {
    history.pushState(null, null, "/library.html#watched");
    arrayWatchedId = JSON.parse(movieService.getWatchedMovieIds);
    renderContentLibrary(arrayWatchedId);
    buttonQueue.classList.remove('clicks');
    buttonWatched.classList.add('clicks');
  });
  
  buttonQueue.addEventListener('click', (e) => {
    history.pushState(null, null, "/library.html#queue");
    arrayQueueId = JSON.parse(movieService.getQueuedMovieIds);
    renderContentLibrary(arrayQueueId);
    buttonWatched.classList.remove('clicks');
    buttonQueue.classList.add('clicks');
  });
  renderContentLibrary(arrayWatchedId);
  history.pushState(null, null, "/library.html#watched");
}
 
function renderContentLibrary(moviesArray) {
  const contentLibrary = document.querySelector('.film-list');
  contentLibrary.innerHTML = '';
  
  moviesArray?.map( async(value) => {
    const getObjectsMovies = await movieApiService.getMoviesById(value);
    const date = new Date(getObjectsMovies.release_date);
    getObjectsMovies.year = date.getFullYear();
    const marcup = marcupContentLibrary({ getObjectsMovies });
    contentLibrary.insertAdjacentHTML('beforeend', marcup);     
  });
}
 
modalShow();   
modalHidden();

export { renderContentLibrary };