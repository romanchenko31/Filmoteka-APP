import img from './template/img.hbs';
import trendingMovies from './js/trendMovies.js';
import genersApi from './js/genersApi.js';
import querySearchAPI from './js/queryMoviesApi.js';

const trendingAPI = new trendingMovies(); 
const queryAPI = new querySearchAPI(); 
const input = document.querySelector('#search');
const filmList = document.querySelector('.film-list');
const form = document.querySelector('.form-button');

let results = [];
let genres = [];
let arrGenresName = [];


let arrPages = [1, 2, 3, 4, 5];
let firstPage = 1;
let lastPages = 0;


movieTrendAPI();
inputQuerySearch();
increaseMarcupPagination();
arrowLeftDisabled();

form.addEventListener('click', (e) => {
  if (e.target.value === 'button') {
    trendingAPI.page = e.target.id;
    queryAPI.page = e.target.id;
    if (e.target.id === '7') {
      form.innerHTML = '';
      increaseMarcupPagination();
      firstPage = lastPages - 4;
      trendingAPI.page = firstPage;
      queryAPI.page = firstPage;
    }
    
    if (e.target.id === '6') {
      form.innerHTML = '';
      decreaseMarcupPagination();
      lastPages = firstPage + 4;
      trendingAPI.page = firstPage;
      queryAPI.page = firstPage;
    }
    if (queryAPI.querySearch === '') {
      movieTrendAPI();  
    } else {
      movieSearchAPI();
    }
  }
})

function movieTrendAPI() {
  trendingAPI.trendMovies().then(value => { 
  results = [...value.results];    
  addKeyGeners(results); 
});
}

function movieSearchAPI() {
  queryAPI.generalAPI().then(value => {   
    results = value.results;
    addKeyGeners(results);
  })  
}

function inputQuerySearch() {
  input.addEventListener('input', ((e) => {
     queryAPI.querySearch = e.target.value; 
    if (queryAPI.querySearch !== '') {      
      if (queryAPI.page !== 1) {
        queryAPI.page = 1;     
        movieSearchAPI();
        reloadPagination();
        
      } else {
        movieSearchAPI();
      }
    } else {
      trendingAPI.page = 1;
      movieTrendAPI();
      reloadPagination();
    } 
  })); 
}

function reloadPagination() {
  form.innerHTML = '';
  lastPages = 0;
  increaseMarcupPagination();
  firstPage = 1;
  arrowLeftDisabled();
}
  
function increaseMarcupPagination() {
  arrPages.map(() => {
    lastPages += 1;
  form.insertAdjacentHTML('beforeend', `<button id=${lastPages} type="button" value="button">${lastPages}</button>`);
  });
  marcupArrowButton();
} 

function decreaseMarcupPagination() { 
  arrPages.map(() => {
    firstPage -= 1;
    form.insertAdjacentHTML('afterbegin', `<button id=${firstPage} type="button" value="button">${firstPage}</button>`);
  });
  marcupArrowButton();
  arrowLeftDisabled();
}

function marcupArrowButton() {
  form.insertAdjacentHTML('afterbegin', `<button id=6 class='arrowLeft' type="button" value="button"><-</button>`);
  form.insertAdjacentHTML('beforeend', `<button class='arrowRight' id=7 type="button" value="button">-></button>`);
}

function arrowLeftDisabled() {
  if (firstPage === 1) {
    form.firstChild.disabled= true;
  }
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






   