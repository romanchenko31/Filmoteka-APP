import { reloadPagination, addStyleCurrentButton} from '..//js/pagination';
import {trendingAPI, movieTrendAPI, addKeyGeners} from '..//js/trendingQuery';
import querySearchAPI from '..//js/queryMoviesApi.js';
const input = document.querySelector('#search');
const queryAPI = new querySearchAPI();
const debounce = require('debounce');

function inputQuerySearch() {
  input.addEventListener('input', debounce(((e) => {
    queryAPI.querySearch = e.target.value; 
    if (queryAPI.querySearch !== '') {
      let currentPage;
      if (queryAPI.page !== 1) {
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
  queryAPI.generalAPI(page).then(value => {   
    results = value.results;
    addKeyGeners(results);
  })  
}

inputQuerySearch();

export { movieSearchAPI, queryAPI };