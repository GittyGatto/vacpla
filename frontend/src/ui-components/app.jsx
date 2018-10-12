import '../../styles/index.scss';
import React from 'react';
import RestrictAccess from './restrict-access';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {HomePage} from './Home/home-page';
import {AboutPage} from './About/about-page'

export default class App extends React.Component {
	render() {
		return (<RestrictAccess>
			<HashRouter>
					<Switch>
						<Route exact path="/" component={HomePage}/>
						<Route path="/About" component={AboutPage}/>
					</Switch>
			</HashRouter>
		</RestrictAccess>);
	}
}
