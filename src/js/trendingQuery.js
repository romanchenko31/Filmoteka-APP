import {MovieApiService} from './MovieApiService';
import img from '..//template/img.hbs';
import {modalShow, modalHidden} from '..//js/modalWindow';

const movieAPIServis = new MovieApiService; 
const filmList = document.querySelector('.film-list');

let results = [];
let genres = [];
let arrGenresName = [];
let currentPage = 1;

function movieTrendAPI(page) {
  movieAPIServis.getTrendingMovies(page).then(value => { 
    results = [...value.results];  
    addKeyGeners(results);
    modalShow();
    modalHidden();
});
}

function addKeyGeners(results) {
  movieAPIServis.getMoviesGenres().then(value => {
    genres = [...value.genres];
    results.map(result => {
      genres.map(genre => {
        if (result.genre_ids.includes(genre.id)) {
          arrGenresName.push(genre.name);
        }          
      });
      separateCommaValueGeners(result);
      addKeyYear(result);
      arrGenresName = [];
    })
    markup(results);
  });
}

function markup(results) {
  const markup = img(results);
  filmList.innerHTML = '';
  filmList.insertAdjacentHTML('beforeend', markup);
}

function separateCommaValueGeners(result) {
  result.genres = [...arrGenresName].join(', ');
}

function addKeyYear(result) {
  let year = new Date(result.release_date);
  result.year = `${year.getFullYear()}`;
}

movieTrendAPI(currentPage);

export { movieTrendAPI, addKeyGeners, filmList};
