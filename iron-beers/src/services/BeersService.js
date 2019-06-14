import axios from 'axios';

const http = axios.create({
  baseURL: 'https://ih-beer-api.herokuapp.com/beers'
})

const listBeers = () => http.get('/')

const getBeer = (id) => http.get(`/${id}`)

const getRandom = () => http.get('/random')

const createBeer = beer => http.post('/new', beer)

export default { listBeers, getBeer, getRandom, createBeer }