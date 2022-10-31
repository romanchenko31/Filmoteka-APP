import { MovieService } from '..//js/getLocalStorageMoviesIds';
import { renderContentLibrary } from './contentLibrary';

const movieService = new MovieService;

function popupButtons(id) {
  let watchedMoviesIds = [];
  let queueMoviesIds = [];
  const buttonQueue = document.querySelector('.queue');
  const buttonWatched = document.querySelector('.watched');
  
  if (movieService.getQueuedMovieIds) {
    queueMoviesIds = JSON.parse(movieService.getQueuedMovieIds);
  }

  if (queueMoviesIds.includes(id)) {
    buttonQueue.classList.add('clicks');
    buttonQueue.textContent = 'REMOVE FROM QUEUE';
  } 
 
  if (movieService.getWatchedMovieIds) {
    watchedMoviesIds = JSON.parse(movieService.getWatchedMovieIds);
  }
 
  if (watchedMoviesIds.includes(id)) {
    buttonWatched.classList.add('clicks');
    buttonWatched.textContent = 'REMOVE FROM WATCHED';
  }      
  buttonWatched.addEventListener('click', () => {
    pressButtonWatched(watchedMoviesIds, queueMoviesIds, id, buttonQueue, buttonWatched);
  })
  buttonQueue.addEventListener('click', () => {
    pressButtonQueue(watchedMoviesIds, queueMoviesIds, id, buttonQueue, buttonWatched);
  })
  
}

function pressButtonWatched(watchedMoviesIds,queueMoviesIds, id, buttonQueue, buttonWatched) {
  if (!watchedMoviesIds.includes(id)) {
    watchedMoviesIds.push(id);
    buttonWatched.textContent = 'REMOVE FROM WATCHED';
  } else {
    buttonWatched.textContent = 'ADD TO WATCHED';
    const indexRemoveMoviesId = watchedMoviesIds.indexOf(id);
    watchedMoviesIds.splice(indexRemoveMoviesId, 1);
  }
  queueMoviesIds.map(value => {
    if (value === id) {
      const removeIdMovies = queueMoviesIds.indexOf(value);
      queueMoviesIds.splice(removeIdMovies, 1);
      movieService.setMovieToQueue = queueMoviesIds;     
      buttonQueue.classList.toggle('clicks');
      buttonQueue.textContent = 'ADD TO QUEUE';
    }
  })
  buttonWatched.classList.toggle('clicks');
  movieService.setMovieToWatched = watchedMoviesIds;
  if (location.pathname === "/library.html/watched") {
    renderContentLibrary(watchedMoviesIds);
  } else if(location.pathname === "/library.html/queue"){
    renderContentLibrary(queueMoviesIds);
  }
}

function pressButtonQueue(watchedMoviesIds, queueMoviesIds, id, buttonQueue, buttonWatched) { 
  if (!queueMoviesIds.includes(id)) {
    queueMoviesIds.push(id);
    buttonQueue.textContent = 'REMOVE FROM QUEUE';
  } else {
    buttonQueue.textContent = 'ADD TO QUEUE';
    const indexRemoveMoviesId = queueMoviesIds.indexOf(id);
    queueMoviesIds.splice(indexRemoveMoviesId, 1);
  }
    watchedMoviesIds.map(value => {
      if (value === id) {
        const removeIdMovies = watchedMoviesIds.indexOf(id);
        watchedMoviesIds.splice(removeIdMovies, 1);
        movieService.setMovieToWatched = watchedMoviesIds;    
        buttonWatched.classList.toggle('clicks');
        buttonWatched.textContent = 'ADD TO WATCHED';
      }
    })
    buttonQueue.classList.toggle('clicks');
    movieService.setMovieToQueue = queueMoviesIds; 
    if (location.pathname === "/library.html/watched") {
      renderContentLibrary(watchedMoviesIds);
    } else if(location.pathname === "/library.html/queue"){
      renderContentLibrary(queueMoviesIds);
    }  
}

export { popupButtons };