import axios from 'axios'

export const key = '9f7dd815b6f49dc890904ef66ca24195'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

const link = `${api}/movie/now_playing?api_key=${key}&language=pt-BR&page=1`

export default api