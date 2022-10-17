const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=b32f977d148061c9ab22a471ff2c7792&language=en-US`;

async function getGenresApi() {
    try {
      const fetchGeners = await fetch(url);
      if (fetchGeners.ok === true) {
        const results = fetchGeners.json();
        return results;
      } 
    } catch {
        console.log('Error');
    }
}

export default getGenresApi;