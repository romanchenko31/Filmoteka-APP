class trendingMovies {   
    constructor() {
        this.page = 1;
        this.url = ` https://api.themoviedb.org/3/`;
        this.keyAPI = `b32f977d148061c9ab22a471ff2c7792`; 
    }
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
    }
}




export default trendingMovies;