import React, { Component } from 'react';

export default class Aside extends Component {


	render() {
		return (
			<aside className="bg-dark">
				<div className="container text-center">
					<div className="call-to-action">
						<h2>Free Download at Start Bootstrap!</h2>
						<a href="http://startbootstrap.com/template-overviews/creative/" className="btn btn-default btn-xl sr-button">Download Now!</a>
					</div>
				</div>
			</aside>
		);    
	}
}
