import React from 'react';

export default class Configuration extends React.Component {
	setName(event) {
		event.preventDefault();
		
		this.props.name(event.target[0].value);
	}

	render () {
		return (
			<div>
			<form onSubmit={event => this.setName(event)}>
					<input type="text" />
					<button>Envoyer</button>
				</form>
			</div>
		);
	}
}