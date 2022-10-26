function popupButtons(id) {
  let watchedMoviesIds = [];
  let queueMoviesIds = [];
  const buttonQueue = document.querySelector('.queue');
  const buttonWatched = document.querySelector('.watched');
  const buttons = document.querySelector('.button');

  if (localStorage.getItem('queueMoviesIds')) {
    queueMoviesIds = JSON.parse(localStorage.getItem('queueMoviesIds'));
  }
  
  if (queueMoviesIds.includes(id)) {
    buttonQueue.classList.add('clicks');
    buttonQueue.textContent = 'REMOVE FROM QUEUE';
  } 

  if (localStorage.getItem('watchedMoviesIds')) {
    watchedMoviesIds = JSON.parse(localStorage.getItem('watchedMoviesIds'));
  }
  
  if (watchedMoviesIds.includes(id)) {
    buttonWatched.classList.add('clicks');
    buttonWatched.textContent = 'REMOVE FROM WATCHED';
  }      
  console.log(watchedMoviesIds);
  buttons.addEventListener('click', (e) => {
    let targetButton = e.target;
    
    pressButtonWatched(watchedMoviesIds,queueMoviesIds, targetButton, id, buttonQueue, buttonWatched);
    pressButtonQueue(watchedMoviesIds, queueMoviesIds, targetButton, id, buttonQueue, buttonWatched)
         
  })
}


function pressButtonWatched(watchedMoviesIds,queueMoviesIds, targetButton, id, buttonQueue, buttonWatched) {
  if (targetButton === buttonWatched) {
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
        localStorage.setItem('queueMoviesIds', JSON.stringify(queueMoviesIds));     
        buttonQueue.classList.toggle('clicks');
        buttonQueue.textContent = 'ADD TO QUEUE';
      }
    })
    buttonWatched.classList.toggle('clicks');
    localStorage.setItem('watchedMoviesIds', JSON.stringify(watchedMoviesIds)); 
  }
}

function pressButtonQueue(watchedMoviesIds, queueMoviesIds, targetButton, id, buttonQueue, buttonWatched) { 
  if (targetButton === buttonQueue) {
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
        localStorage.setItem('watchedMoviesIds', JSON.stringify(watchedMoviesIds));     
        buttonWatched.classList.toggle('clicks');
        buttonWatched.textContent = 'ADD TO WATCHED';
      }
    })
    buttonQueue.classList.toggle('clicks');
    localStorage.setItem('queueMoviesIds', JSON.stringify(queueMoviesIds)); 
  } 
}


export { popupButtons };