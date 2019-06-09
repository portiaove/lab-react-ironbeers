import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './misc/Home';
import Header from './misc/Header';
import ListBeers from './beers/ListBeers';

function App() {
  return (
    <div className="App">
      < Header />
      <main className="container">
      <Switch>
        < Route exact path="/" component={Home}/>
        < Route exact path="/beers" component={ListBeers}/>

      </Switch>
      </main>
    </div>
  );
}

export default App;
