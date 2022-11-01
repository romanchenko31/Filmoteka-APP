class MovieApiService{
  constructor() {
    this.query = '';
    this.url = `https://api.themoviedb.org/3/`; 
    this.keyAPI = `b32f977d148061c9ab22a471ff2c7792`;  
  }

  async getMoviesById(id) {
    try {
      const getFetchMovieById = await fetch(`${this.url}movie/${id}?api_key=${this.keyAPI}&language=en-US`);
      if (getFetchMovieById.ok !==true) {
      throw new Error;
    }
      const result = await getFetchMovieById.json();
      return result;
    } catch (e) {
      console.error(e.message);
    }
  }

  async getMoviesGenres() {
    try {
      const fetchGeners = await fetch(`${this.url}genre/movie/list?api_key=${this.keyAPI}&language=en-US`);
      if (fetchGeners.ok === true) {
        const results = fetchGeners.json();
        return results;
      } 
    } catch(e) {
        console.log('Error');
    }
  }
  
  async getTrendingMovies(page) {
    try {
      this.page = page;
      const fetchTrend = await fetch(`${this.url}trending/movie/week?api_key=${this.keyAPI}&page=${page}`);

      if (fetchTrend.ok !== true) {
        throw new Error;
      }
        const results = await fetchTrend.json(); 
        return results;   
      } catch (error) {
        alert( "Упс ошибка сервер не отвечает" );  
      } 
  }
  
  async getMoviesByQuery(page) {
    try {  
      this.page = page;  
      const fetchGeneralAPI = await fetch(`${this.url}search/movie?api_key=${this.keyAPI}&language=en-US&page=${page}&include_adult=false&query=${this.query}`);
      
      if (fetchGeneralAPI.ok !== true) {
        throw new Error;
      }
        const results = fetchGeneralAPI.json();
        return results;
      } catch(error){
        alert('Упс ошибка сервер не отвечает');
      }
  }

  set querySearch(value) {
    this.query = value;
  }

  get querySearch() {
    return this.query;
  }
}

export { MovieApiService };