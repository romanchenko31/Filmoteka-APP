import { reloadPagination, addStyleCurrentButton} from '..//js/pagination';
import {movieTrendAPI, addKeyGeners} from '..//js/trendingQuery';
import { MovieApiService } from './MovieApiService';

const input = document.querySelector('#search');
const movieAPIServis = new MovieApiService; 
const debounce = require('debounce');

function inputQuerySearch() {
  input.addEventListener('input', debounce(((e) => {
    movieAPIServis.querySearch = e.target.value; 
    if (movieAPIServis.querySearch !== '') {
      let currentPage;
      if (movieAPIServis.page !== 1) {
        currentPage = 1;     
        movieSearchAPI(currentPage);
        reloadPagination(); 
        addStyleCurrentButton();
      } else {
          movieSearchAPI();
        }
    } else {
        currentPage = 1;
        movieTrendAPI(currentPage);
        reloadPagination();
        addStyleCurrentButton();
      } 
  }),1000)); 
} 

function movieSearchAPI(page) {
  movieAPIServis.getMoviesByQuery(page).then(value => {   
    const { results } = value;
    addKeyGeners(results);
  })  
}

inputQuerySearch();

export { movieSearchAPI };