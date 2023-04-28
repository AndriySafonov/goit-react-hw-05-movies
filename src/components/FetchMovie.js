import axios from 'axios';

const KEY = '157ba8f88df5d741a5271cb474478bff';

export async function FeatchMovie(endPoint) {   
    const API_URL = `https://api.themoviedb.org/3/${endPoint}?api_key=${KEY}`
    
    const resp = await axios.get(API_URL);

    return resp;
}


export async function FeatchSearch(searchQuery) {
    const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${searchQuery}`;

    const resp = await axios.get(BASE_URL);

    return resp;
}