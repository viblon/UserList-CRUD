import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class TodoBanner extends Component {

	componentDidMount() {
		axios.get('https://api.github.com/users/codeheaven-io')
  .then(function(response){
    console.log(response.data.name);
    console.log(response.status);
  });
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
