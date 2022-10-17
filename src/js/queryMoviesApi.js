class queryGeneralAPI{
    constructor() {
        this.query = '';
        this.url = ` https://api.themoviedb.org/3/`;
        this.keyAPI = `b32f977d148061c9ab22a471ff2c7792`; 
    }

<<<<<<< HEAD
    async generalAPI() {
      try {
        const fetchGeneralAPI = await fetch(`${this.url}search/movie?api_key=${this.keyAPI}&language=en-US&page=${this.page}&include_adult=false&query=${this.query}`);
          if (fetchGeneralAPI.ok === true) {
            const results = fetchGeneralAPI.json();
            return results;
          } else {
              alert('Данная страница пустая');
          }    
          console.log(fetchGeneralAPI);
      } catch {
          console.error('error');
=======
    async generalAPI(page) {
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
>>>>>>> main
        }
    }

    set querySearch(value) {
        this.query = value;
    }

    get querySearch() {
        return this.query;
    }
<<<<<<< HEAD

    incrementPage() {
        this.page += 1;
    }
    
    decrementPage() {
        this.page -= 1;
    }
=======
>>>>>>> main
}

export default queryGeneralAPI;
