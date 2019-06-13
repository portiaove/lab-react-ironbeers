import React from 'react';
import { Link } from 'react-router-dom';

const Beers = (props) => {
  const beer = props.beer
  return (
    <Link to={`beers/${beer._id}`}>
      <div className="container">
        <div className="card flex-row flex-wrap align-items-center">
          <div className="card-header border-0">
              <img src={beer.image_url} alt=""/>
          </div>
          <div className="card-block px-4 ">
              <h2>{beer.name}</h2>
              <h4 className="card-title">{beer.tagline}</h4>
              <p className="card-text"><strong>{beer.contributed_by}</strong></p>
              <p className="card-text"><strong>{beer._id}</strong></p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Beers