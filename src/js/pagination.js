import {movieTrendAPI, trendingAPI} from '..//js/trendingQuery.js';
import {movieSearchAPI, queryAPI} from '..//js/searchQuery';
const form = document.querySelector('.form-button');


//START variable phone pagination
const amountPagesPagination = 5;
let firstPage = 1;
let lastPage = 0;
let currentPagePagination;
// END variable phone pagination

//START variable Desktop pagination
const amountNumbersFirstMoreButton = 11;
const amountNumbersSecondMoreButton = 2;
let arrayNumbersButtonFirstMore = [];
let arrayNumbersButtonSecondMore = [];
let firstPagePagination = 1;
let firstMorePage;
let nextButtonPageAfterFirstMore;
let middleLastPageButton;
let secondMoreButton;
let lastPagePagination;
// END variable desktop pagination

if (window.innerWidth < 768) {
  phonePagination();
} else {
    desktopPagination();
}

function addStyleCurrentButton() {
  currentPagePagination = form.firstChild.nextElementSibling;
  currentPagePagination.classList.add('buttonChecked');
 }

function arrowLeftDisabled() {
  if (firstPagePagination === 1 && firstPage === 1 ) {
    form.firstChild.disabled = true;
    form.firstChild.classList.add('arrowLeftDisabled');
  } 
}

function marcupArrowButton() {
  form.insertAdjacentHTML('afterbegin', `<button id='left' class='arrowLeft' value='button' type="button"></button>`);
  form.insertAdjacentHTML('beforeend', `<button class='arrowRight' id='right' value='button' type="button"></button>`);
}

function increaseMarcupPagination() {
  for (let i = 1; i <= amountPagesPagination; i += 1){
    lastPage += 1;
    form.insertAdjacentHTML('beforeend', `<button id=${lastPage} type="button" value="button">${lastPage}</button>`);
  }
  marcupArrowButton();
} 

function decreaseMarcupPagination() {
  for (let i = 1; i <= amountPagesPagination; i += 1){
    firstPage -= 1;
    form.insertAdjacentHTML('afterbegin', `<button id=${firstPage} type="button" value="button">${firstPage}</button>`);
  }
  marcupArrowButton();
  arrowLeftDisabled();
}

function reloadPagination() {
  form.innerHTML = '';
  if (window.innerWidth < 768) {    
    lastPage = 0;
    increaseMarcupPagination();
    firstPage = 1;
    arrowLeftDisabled();
  } else {
      firstPagePagination = 1;
      marcupButtonDesctop(firstPagePagination);
    }
}

function phonePagination() {
  increaseMarcupPagination();
  arrowLeftDisabled();
  addStyleCurrentButton();
  form.addEventListener('click', (e) => {
    if (e.target.value === 'button') {
      trendingAPI.page = e.target.id;
      queryAPI.page = e.target.id;  
      currentPagePagination.classList.remove('buttonChecked');
      currentPagePagination = e.target;
      e.target.classList.add('buttonChecked');
    
      if (e.target.id === 'right') {
        form.innerHTML = '';
        increaseMarcupPagination();
        firstPage = lastPage - 4;
        trendingAPI.page = firstPage;
        queryAPI.page = firstPage;
        addStyleCurrentButton();
      }  
      if (e.target.id === 'left') {
        form.innerHTML = '';
        decreaseMarcupPagination();
        lastPage = firstPage + 4;
        trendingAPI.page = firstPage;
        queryAPI.page = firstPage;
        addStyleCurrentButton();
      }
      if (queryAPI.querySearch === '') {
        movieTrendAPI();  
      } else {
          movieSearchAPI();
      }
    }
  })
}

function  desktopPagination() {
  marcupButtonDesctop(firstPagePagination);
  form.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.value === 'button') {
      currentPagePagination.classList.remove('buttonChecked');
      currentPagePagination = e.target;
      e.target.classList.add('buttonChecked');
      trendingAPI.page = e.target.id;
      queryAPI.page = e.target.id;
    
      if (e.target.id === 'right') {
        firstPagePagination = lastPagePagination + 1;
        form.innerHTML = '';
        marcupButtonDesctop(firstPagePagination);
        trendingAPI.page = firstPagePagination;
        queryAPI.page = firstPagePagination;
      }  
      if (e.target.id === 'left') {    
        firstPagePagination = firstPagePagination - 20;
        form.innerHTML = '';
        marcupButtonDesctop(firstPagePagination);
        trendingAPI.page = firstPagePagination;
        queryAPI.page = firstPagePagination;
      }  
      if (queryAPI.querySearch === '' &&  e.target.className !== 'secondMore' && e.target.className !== 'moreOne') {
        movieTrendAPI();  
      } else if(e.target.className !== 'secondMore' && e.target.className !== 'moreOne'){
          movieSearchAPI();
        } 
    }
  })
}

function marcupButtonDesctop(firstPagePagination) {
  firstMorePage = firstPagePagination;
  form.insertAdjacentHTML('beforeend', `<button value='button' id=${firstMorePage}>${firstMorePage}</button>`);
  form.insertAdjacentHTML('beforeend', `<button class='moreOne'>...</button>`);
  const moreOne = form.querySelector('.moreOne');
  arrayNumbersButtonFirstMore = [];
  for (let i = 1; i <= amountNumbersFirstMoreButton; i += 1){
    firstMorePage += 1;
    arrayNumbersButtonFirstMore.push(firstMorePage);
  }

  form.addEventListener('click', (e) => {
    arrayNumbersButtonFirstMore.sort((a, b) => b - a);
    firstMorePage = firstPagePagination;
    if (e.target.className === 'moreOne') {
      e.preventDefault();
      moreOne.remove();    
      arrayNumbersButtonFirstMore.map(value => {
        form.firstElementChild.nextElementSibling.insertAdjacentHTML('afterEnd', `<button value='button' id=${value}>${value}</button>`);
      }) 
       arrayNumbersButtonFirstMore = [];
    }
  })
  
  nextButtonPageAfterFirstMore = firstMorePage;
  for (let i = 1; i <= amountPagesPagination; i += 1){
    nextButtonPageAfterFirstMore += 1;
    form.insertAdjacentHTML('beforeend', `<button value='button' id=${nextButtonPageAfterFirstMore}>${nextButtonPageAfterFirstMore}</button>`);
  }
  
  middleLastPageButton = nextButtonPageAfterFirstMore;
  secondMoreButton = middleLastPageButton;
  form.insertAdjacentHTML('beforeend', `<button class='secondMore'>...</button>`);
  const moreTwo = form.querySelector('.secondMore');
  arrayNumbersButtonSecondMore = [];
  for (let i = 0; i < amountNumbersSecondMoreButton; i += 1){
    secondMoreButton += 1;
    arrayNumbersButtonSecondMore.push(secondMoreButton);
  }
 
  form.addEventListener('click', (e) => {
    if (e.target.className === 'secondMore') { 
      e.preventDefault();
      moreTwo.remove();
      arrayNumbersButtonSecondMore.map((value) => {
        form.lastElementChild.previousElementSibling.insertAdjacentHTML('beforeBegin', `<button value='button' id=${value}>${value}</button>`);
      })
      arrayNumbersButtonSecondMore = [];
    }   
  })
  lastPagePagination = secondMoreButton + 1;
  form.insertAdjacentHTML('beforeend', `<button value='button' id=${lastPagePagination}>${lastPagePagination}</button>`);
  marcupArrowButton();
  addStyleCurrentButton();
  arrowLeftDisabled();  
}

export { reloadPagination, addStyleCurrentButton };