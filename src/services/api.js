import axios from 'axios';
//URL filmes em 
//https://api.themoviedb.org/3/movie/now_playing?api_key=8d123f245e86af5e0573549919b5602c&language=pt-BR&page=1

export const key = '8d123f245e86af5e0573549919b5602c'

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3'
})

export default api;
