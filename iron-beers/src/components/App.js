import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './misc/Home';
import Header from './misc/Header';
import ListBeers from './beers/ListBeers';
import BeerDetail from './beers/BeerDetail';
import BeerRandom from './beers/BeerRandom';
import Form from './form/Form';

function App() {
  return (
    <div className="App">
      < Header />
      <main className="container">
      <Switch>
        < Route exact path="/" component={Home}/>
        < Route exact path="/beers" component={ListBeers}/>
        < Route exact path="/random-beer" component={BeerRandom}/>
        < Route exact path="/beers/:id" component={BeerDetail}/>
        < Route exact path="/new-beer" component={Form}/>
      </Switch>
      </main>
    </div>
  );
}

export default App;
