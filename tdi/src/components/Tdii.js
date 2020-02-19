import React from 'react';
import {withRouter} from 'react-router-dom';
import firebase from '../firebase.js';

import {connect} from "react-redux";
import {addGame} from "../redux/actions";

class Tdii extends React.Component {
    constructor() {
        super();
        this.state = {
            randNumber: 0,
            score: 0,
            games: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const itemsRef = firebase.database().ref('games');
        console.log(itemsRef);
        const item = {
            name: this.props.name,
            score: this.score,
            number: this.randNumber
        };
        itemsRef.push(item)
    }
    componentDidMount() {
        const itemsRef = firebase.database().ref('games');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    name: items[item].name,
                    score: items[item].score,
                    number: items[item].number
                });
            }
            this.props.addGame(newState);
            this.setState({...this.state, games: this.props.games});
        });
    }
    sortScore() {
        this.componentDidMount();
        let array = this.props.games;
        array.push({
            name: this.props.name,
            score: this.score,
            number: this.randNumber
        });

        array.sort((a, b) => {
            if (a.score === -1) {
                return 1
            } else if (b.score === -1) {
                return -1
            } else if (a.score === b.score) {
                return 0;
            } else {
                if (a.score < b.score) {
                    return -1;
                } else {
                    return 1;
                }
            }
        });
        if (array.length > 5) {
            array.pop();
        }
        this.handleSubmit();
        this.props.addGame(array);
        this.setState({...this.state, games: this.props.games});
    }


    setNumber() {
        if (this.score > 0) {
            this.score = -1;
            document.getElementById("indic").innerHTML = "c'est perdu !";
            this.sortScore();
        } else {
            this.score = 0;
            this.randNumber = Math.floor(Math.random() * 101);
            console.log(this.randNumber);
        }
    }


    checkNumber(event) {
        this.score++;
        event.preventDefault();
        let target = parseInt(event.target[0].value);

        if (target > this.randNumber) {
            document.getElementById("indic").innerHTML = "c'est plus petit";
        } else if (target < this.randNumber) {
            document.getElementById("indic").innerHTML = "c'est plus grand";
        } else {
            document.getElementById("indic").innerHTML = "c'est gagné";
            this.sortScore();
            this.score = 0;
            this.setNumber();
        }
    }

    render() {
        const {games} = this.props;
        return (

            <div>

                <h2 id="indic">Bienvenue</h2>
                <form onSubmit={event => this.checkNumber(event)}>
                    <input type="number"/>
                    <button>Envoyer</button>
                </form>
                <button onClick={event => this.setNumber(event)}>Nouvelle partie</button>
                <div className="score">

                    <table>
                        <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Score</th>
                            <th>Nombre</th>
                        </tr>
                        </thead>
                        <tbody>
                        {games.map((game, index) => (
                            <tr key={index}>
                                <td>{game.name}</td>
                                <td>{game.score}</td>
                                <td>{game.number}</td>
                            </tr>))}
                        </tbody>
                    </table>

                </div>

            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        games: state.games,
        name: state.name
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addGame: game => {
            dispatch(addGame(game))
        }
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Tdii));
