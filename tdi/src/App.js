import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './redux/reducers'
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
import Tdii from "./components/Tdii";


const store = createStore(reducer);

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
        };
        console.log('initial state', store.getState());

    }

    render() {
        return (
            <Provider store={store}>

                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Accueil</Link>
                                </li>
                                <li>
                                    <Link to="/configuration">Configuration</Link>
                                </li>
                                <li>
                                    <Link to="/aPropos">A propos</Link>
                                </li>
                                <li>
                                    <Link to="/tdii">Le nombre à trouver</Link>
                                </li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route exact path="/">
                                <Accueil/>
                            </Route>
                            <Route path="/configuration">
                                <Configuration/>
                            </Route>
                            <Route path="/aPropos">
                                <APropos/>
                            </Route>
                            <Route path="/tdii">
                                <Tdii/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Provider>

        );
    }
}
