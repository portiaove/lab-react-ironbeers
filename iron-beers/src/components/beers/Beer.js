import React from 'react';

const Beer = (props) => {
  const {image_url, 
    name, 
    tagline, 
    first_brewed, 
    attenuation_level, 
    description, 
    contributed_by} = props.beer
    
  return(
    <div className="card">
    <img className="card-img-top" src={image_url} alt={name}/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <h5 className="card-title">{first_brewed}</h5>
      <p className="card-text"><small className="text-muted">{tagline}</small></p>
      <p className="card-text">{description}</p>
      <p className="card-text">{contributed_by}</p>
      <p className="card-text">{attenuation_level}</p>

    </div>
  </div>
  )
}

export default Beer;