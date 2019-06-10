import React from 'react';

const Beer = (props) => {
  console.log(props)
  const beer = props.beer
  return (
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
  )
}

export default Beer