import React from 'react';
import BeersService from '../../services/BeersService';
import Beer from './Beer';

class BeerRandom extends React.Component {

  state = {
    beer: null
  }

  componentDidMount() {
    BeersService.getRandom().then(
      res => {
        this.setState({beer: res.data })
      }
    )
  }
  render () {
    const beer = this.state.beer
  return (
    <div>
      {beer && <Beer beer={beer}/>}
    </div>
  )
  }
}

export default BeerRandom;