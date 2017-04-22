import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class TodoBanner extends Component {

	componentWillMount() {
		axios.get('mate.json')
	    .then((response) => {
				console.log(response.data);
	      getMates(response.data);
	    })
	    .catch((error) => { console.log(error);})
	}

	componentDidMount() {
		console.log('huy');
	}

	render(){

		return (
			<div className="banner" style={{ width: 300}}>
				<h3 className="banner">
					<Link to="/" activeClassName="active">Список пользователей:</Link>
				</h3>
				<main>
								{this.props.children}
				</main>
			</div>
		);
	}
}
