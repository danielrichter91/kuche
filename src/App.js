import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Recipe from './components/Recipe';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Recipes} />
          <Route path="/recipes/:id" component={Recipe} />
        </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
