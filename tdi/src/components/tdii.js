import React from 'react';

export default class Tdii extends React.Component {
    setNumber(event) {
        event.preventDefault();
        this.props.number(event.target[0].value);
    }

    render() {
        return (
            <div>
                <div>
                    <h2> c'est {this.props.number}</h2>
                </div>
                <div>
                    <form onSubmit={event => this.setNumber(event)}>
                        <input type="text"/>
                        <button>Envoyer</button>
                    </form>
                </div>
            </div>
        );
    }
}