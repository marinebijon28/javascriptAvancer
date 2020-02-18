import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
 class Accueil extends React.Component {
	render () {
		return (
			<div> 
  			<h2> Hello {this.props.name}</h2>
  			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		name: state.name
	};
}

export default withRouter(connect(
	mapStateToProps
)(Accueil));

