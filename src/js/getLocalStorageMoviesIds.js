class localStorageMovies{
    get WatchedMoviesIds() {
        return localStorage.getItem('watchedMoviesIds');
    }
    set WatchedMoviesIds(watchedMoviesIds) {
      localStorage.setItem('watchedMoviesIds', JSON.stringify(watchedMoviesIds));
    }
    get QueueMoviesIds() {
        return localStorage.getItem('queueMoviesIds');
    }
    set QueueMoviesIds(queueMoviesIds) {
        localStorage.setItem('queueMoviesIds', JSON.stringify(queueMoviesIds)); 
    }
}

export { localStorageMovies };