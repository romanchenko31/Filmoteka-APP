import trendingMovies from '..//js/trendMoviesAPI';
import genersApi from '..//js/genersApi.js';
import img from '..//template/img.hbs';
const trendingAPI = new trendingMovies(); 
const filmList = document.querySelector('.film-list');

let results = [];
let genres = [];
let arrGenresName = [];

function movieTrendAPI() {
  trendingAPI.trendMovies().then(value => { 
  results = [...value.results];    
  addKeyGeners(results); 
});
}

function addKeyGeners(results) {
  genersApi().then(value => {
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

movieTrendAPI();

export { movieTrendAPI, trendingAPI, addKeyGeners };
