import axios from 'axios';

const http = axios.create({
  baseURL: 'https://ih-beer-api.herokuapp.com/beers'
})

const listBeers = () => http.get('/')

const getBeer = (id) => http.get(`/${id}`)

const getRandom = () => http.get('/random')

export default { listBeers, getBeer, getRandom }