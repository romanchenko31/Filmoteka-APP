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
      if (queryAPI.page !== 1) {
        queryAPI.page = 1;     
        movieSearchAPI();
        reloadPagination(); 
        addStyleCurrentButton();
      } else {
          movieSearchAPI();
        }
    } else {
        trendingAPI.page = 1;
        movieTrendAPI();
        reloadPagination();
        addStyleCurrentButton();
      } 
  }),1000)); 
} 

function movieSearchAPI() {
  queryAPI.generalAPI().then(value => {   
    results = value.results;
      addKeyGeners(results);
  })  
}

inputQuerySearch();

export { movieSearchAPI, queryAPI };