import React from 'react';
import HomeCards from './HomeCards';
import beers from '../../img/beers.png';
import newBeer from '../../img/new-beer.png';
import randomBeer from '../../img/random-beer.png'


const Home = () => {
  return(
    <div className="Home">
      < HomeCards name="All Beers" img={beers} link="/beers"/>
      < HomeCards name="Random Beer" img={newBeer} link="/random-beer"/>
      < HomeCards name="New Beer" img={randomBeer} link="/new-beer"/>
    </div>
  )
}

export default Home;