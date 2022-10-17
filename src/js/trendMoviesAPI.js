class trendingMovies {   
    constructor() {
        this.url = ` https://api.themoviedb.org/3/`;
        this.keyAPI = `b32f977d148061c9ab22a471ff2c7792`; 
    }
<<<<<<< HEAD
    async trendMovies() {
        const fetchTrend = await fetch(`${this.url}trending/movie/week?api_key=${this.keyAPI}&page=${this.page}`);
        const results = await fetchTrend.json();
        return results;
    }
    incrementPage() {
       return this.page += 1;
    }
    decrementPage() {
       return this.page -= 1;
=======

    async trendMovies(page) {
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
>>>>>>> main
    }
}

export default trendingMovies;