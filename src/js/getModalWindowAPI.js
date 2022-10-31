class modalWindow{
    constructor() {
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
}

export { modalWindow };