const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=b32f977d148061c9ab22a471ff2c7792&language=en-US`;



async function genersApi() {
    const fetchGeners = await fetch(url);
    const results = fetchGeners.json();
    return results;
}

export default genersApi;