import React from 'react';
import {withRouter} from 'react-router-dom';

import {connect} from "react-redux";
import {addGame} from "../redux/actions";

class Tdii extends React.Component {
    constructor() {
        super();

        this.state = {
            selectId: -1,
            games: []
        }
    }

    setNumber(event) {
        this.randNumber = Math.floor(Math.random() * 101)
        console.log(this.randNumber);
        this.score = 0;

    }

    selectId(index) {
        this.setState({...this.state, selectId: index});
    }

    addGame() {
        this.props.addGame({
            name: this.props.name,
            score: this.score,
            number: this.randNumber
        });
    }

    checkNumber(event) {
        this.score++;
        event.preventDefault();
        let target = parseInt(event.target[0].value);
        console.log("target :", target);
        console.log(this.randNumber);
        console.log(this.score);

        if (target > this.randNumber) {
            document.getElementById("indic").innerHTML = "c'est plus petit";
            console.log("c'est plus petit");
        } else if (target < this.randNumber) {
            document.getElementById("indic").innerHTML = "c'est plus grand";
            console.log("c'est plus grand");

        } else {
            document.getElementById("indic").innerHTML = "c'est gagné";
            console.log("c'est gagné");
            this.addGame(event);
            this.setNumber(event);
        }

    }

    render() {
        const {game} = this.props;
        const {selectId} = this.state;
        return (

            <div>
                <h2 id="indic"></h2>
                <form onSubmit={event => this.checkNumber(event)}>
                    <input type="number"/>
                    <button>Envoyer</button>
                </form>
                <button onClick={event => this.setNumber(event)}>Nouvelle partie</button>
                <div className="score">
                    {this.props.games.map((game, index) =>(
                        <tr key={index}>
                            <td>{game.name}</td>
                            <td>{game.score}</td>
                            <td>{game.number}</td>
                        </tr>)

                    )}
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.name,
        games: state.games
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addGame: game => {
            dispatch(addGame(game))
        },

    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Tdii));
