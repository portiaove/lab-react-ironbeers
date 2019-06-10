import axios from 'axios';

const http = axios.create({
  baseURL: 'https://ih-beer-api.herokuapp.com'
})

const listBeers = () => http.get('/beers')

export default {listBeers}