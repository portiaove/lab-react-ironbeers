import React from 'react'
import { Link } from 'react-router-dom';

const HomeCards = (props) => {
  return(
    <div>
      <Link to={props.link} className="links">
        <div className="card">
          <img className="card-img-top" src={props.img} alt={props.name}/>
          <div className="card-body">
            <h2>{props.name}</h2>
            <p className="card-text">Laboris amet voluptate ea sit quis in et sunt cillum ullamco qui aliquip. Sunt fugiat sit laborum dolore quis in elit ipsum. Ex sunt adipisicing mollit ad esse aute tempor in qui cillum ex.</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default HomeCards;