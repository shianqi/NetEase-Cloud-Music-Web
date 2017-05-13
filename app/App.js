import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import Banner from "./Banner/index";

class App extends Component{
	render(){
		return (
			<div>
				<Banner/>
			</div>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);