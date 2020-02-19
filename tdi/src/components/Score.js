import React from 'react';
import {withRouter} from 'react-router-dom';
import firebase from '../firebase.js';

import {connect} from "react-redux";
import {addGame} from "../redux/actions";

class Score extends React.Component {
    constructor() {
        super();
        this.state = {
            randNumber: 0,
            score: 0,
            games: []
        };

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
            newState.sort((a, b) => {
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
            while (newState.length > 5) {
                newState.pop();
            }
            this.props.addGame(newState);
            this.setState({...this.state, games: this.props.games});
        });
    }


    render() {
        const {games} = this.props;
        return (

            <div>

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
)(Score));
