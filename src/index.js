import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './css/creative.css';

import '../node_modules/bootstrap.native/dist/bootstrap-native.js';
import '../node_modules/magnific-popup/dist/jquery.magnific-popup.js';

import './js/creative.js';

import {Router , Route , hashHistory } from "react-router";

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
		</Route>
	</Router>,
	document.getElementById('root')
);
