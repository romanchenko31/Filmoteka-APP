class queryGeneralAPI{ 
    constructor() {
        this.page = 1;
        this.query = '';
        this.url = ` https://api.themoviedb.org/3/`;
        this.keyAPI = `b32f977d148061c9ab22a471ff2c7792`; 
    }

    async generalAPI() {
      try {
        const fetchGeneralAPI = await fetch(`${this.url}search/movie?api_key=${this.keyAPI}&language=en-US&page=${this.page}&include_adult=false&query=${this.query}`);
        const results = fetchGeneralAPI.json();
        return results;
      } catch {
            console.log('error');
        }
       
    }

    set querySearch(value) {
        this.query = value;
    }

    get querySearch() {
        return this.query;
    }

    incrementPage() {
        this.page += 1;
    }

    decrementPage() {
        this.page -= 1;
    }

}









export default queryGeneralAPI;
