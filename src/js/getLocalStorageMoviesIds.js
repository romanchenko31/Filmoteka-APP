class MovieService{
    get getWatchedMovieIds() {
        return localStorage.getItem('watchedMoviesIds');
    }
    set setMovieToWatched(watchedMoviesIds) {
      localStorage.setItem('watchedMoviesIds', JSON.stringify(watchedMoviesIds));
    }
    get getQueuedMovieIds() {
        return localStorage.getItem('queueMoviesIds');
    }
    set setMovieToQueue(queueMoviesIds) {
        localStorage.setItem('queueMoviesIds', JSON.stringify(queueMoviesIds)); 
    }
}

export { MovieService };