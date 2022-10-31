import { modalWindow } from './getModalWindowAPI';
import { modalShow, modalHidden } from './modalWindow';
const setIdModalWindow = new modalWindow;
import { MovieService } from './getLocalStorageMoviesIds';
import { modalWindow } from './getModalWindowAPI';
import marcupContentLibrary from '..//template/contentLibrary.hbs';
const movieService = new MovieService;

if (location.pathname === "/library.html") {
  let arrayWatchedId = JSON.parse(movieService.getWatchedMovieIds);
  let arrayQueueId = JSON.parse(movieService.getQueuedMovieIds);
  history.pushState(null, null, "/library.html/watched");
  renderContentLibrary(arrayWatchedId);
  const buttonWatched = document.querySelector('#watched');
  const buttonQueue = document.querySelector('#queue');
 
  buttonWatched.addEventListener('click', (e) => {
    history.pushState(null, null, "/library.html/watched");
    arrayWatchedId = JSON.parse(movieService.getWatchedMovieIds);
    renderContentLibrary(arrayWatchedId);
  })
  
  buttonQueue.addEventListener('click', (e) => {
    history.pushState(null, null, "/library.html/queue");
    arrayQueueId = JSON.parse(movieService.getQueuedMovieIds);
    renderContentLibrary(arrayQueueId);
  })
}
 


function renderContentLibrary(moviesArray) {
  const contentLibrary = document.querySelector('.film-list');
  contentLibrary.innerHTML = '';
  moviesArray?.map( async(value) => {
    const getObjectsMovies = await setIdModalWindow.getMoviesById(value);
    const date = new Date(getObjectsMovies.release_date);
    getObjectsMovies.year = date.getFullYear();
    const marcup = marcupContentLibrary({ getObjectsMovies });
    contentLibrary.insertAdjacentHTML('beforeend', marcup);     
  });
}
 
modalShow();   
modalHidden();

export { renderContentLibrary };