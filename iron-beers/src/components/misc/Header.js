import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => {
  return(
      <nav className="navbar navbar-dark bg-primary">
        < NavLink className="header" to="/"><h3>Home</h3></NavLink>
      </nav>
  )
}

export default Header