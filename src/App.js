import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './Homepage/Homepage'
import Catalog from './Catalog/Catalog'
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <div>
            <Route path="/" render={() => <NavBar />} />
            <Route exact path="/" render={() => <Homepage />} />
            <Route exact path="/catalog" render={() => <Catalog />} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
