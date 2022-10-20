// https://api.themoviedb.org/3/movie/894205?api_key=b32f977d148061c9ab22a471ff2c7792&language=en-US

class modalWindow{
    constructor() {
      this.url = `https://api.themoviedb.org/3/`; 
      this.keyAPI = `b32f977d148061c9ab22a471ff2c7792`;  
    }
    async getMoviesId(id) {
      try {
          const getFetchMovieById = await fetch(`${this.url}movie/${id}?api_key=${this.keyAPI}&language=en-US`); 
          const result = await getFetchMovieById.json();
          return result;
      } catch (e) {
            
      }
    }
}

export { modalWindow };