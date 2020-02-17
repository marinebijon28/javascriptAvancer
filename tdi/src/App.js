import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Accueil from './components/Accueil';
import Configuration from './components/Configuration';
import APropos from './components/APropos';

export default class App extends React.Component {
  render() {
    return (
           <Router>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/" >Accueil</Link>
                    </li>
                    <li>
                      <Link to="/configuration">Configuration</Link>
                    </li>
                    <li>
                      <Link to="/aPropos">A propos</Link>
                    </li>
                  </ul>
                </nav>
                <Switch>
                  <Route exact path="/">
                    <Accueil />
                  </Route>
                  <Route path="/configuration">
                    <Configuration />
                  </Route>
                  <Route path="/aPropos">
                    <APropos />
                  </Route>
                </Switch>
              </div>
            </Router>
  );
}
}
