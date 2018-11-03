import '../../styles/index.scss';
import React from 'react';
import RestrictAccess from './restrict-access';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {DashboardPage} from './Dashboard/dashboard-page';
import {AboutPage} from './About/about-page'

export default class App extends React.Component {
    render() {
        return (<RestrictAccess>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={DashboardPage}/>
                    <Route path="/About" component={AboutPage}/>
                </Switch>
            </HashRouter>
        </RestrictAccess>);
    }
}
