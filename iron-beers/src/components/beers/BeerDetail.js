import React from 'react';
import BeersService from '../../services/BeersService';
import Beer from './Beer'

class BeerDetail extends React.Component {
  state = {
    beer: null
  }
  
  fetchBeer = () => {
    BeersService.getBeer(this.props.match.params.id).then(
      res => {
        this.setState({beer: res.data})
      }
      )    
    }
    
    componentDidMount() {
      this.fetchBeer()
    }
    
    render () {
    const beer = this.state.beer
    return(
      <div>
        {beer && <Beer beer={beer}/>}
      </div>
    )
  }
}

export default BeerDetail;