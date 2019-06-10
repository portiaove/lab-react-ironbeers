import React from 'react';
import BeersService from '../../services/BeersService';
import Beer from './Beer';

class ListBeers extends React.Component {
  state = {
    data: []
  }

  fetchBeers = () => {
    BeersService.listBeers().then(
      res => { 
        const birris = res.data.slice(10, 20)
        // console.log(birris)
        this.setState({data: birris})
      }
    )
  }

  componentDidMount() {
    this.fetchBeers()
  }

  render () {
    return(
      <div className="ListBeers">
        {this.state.data.map((beer, i) => (
          <Beer beer={beer} key={i}/>
        ))}
        
      </div>
    )
  }
}

export default ListBeers;