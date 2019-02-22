import '../../styles/index.scss';
import React from 'react';
import RestrictAccess from './restrict-access';
import {appHistory} from './app-history';
import {Router, Route, Switch} from 'react-router-dom';
import {DashboardPage} from './dashboard/dashboard-page';
import {NewRequestPage} from './new-request/newRequest-page'
import {NeedApprovalPage} from "./need-approval/need-approval-page";
import {ViewRequestPage} from "./view-request/view-request-page";
import {OpenRequestPage} from "./open-request/open-request-page";


export default class App extends React.Component {
    render() {
        return (<RestrictAccess>
            <Router history={appHistory}>
                <Switch>
                    <Route exact path="/" component={DashboardPage}/>
                    <Route path="/NewRequest" component={NewRequestPage}/>
                    <Route path="/MyOpenRequest" component={OpenRequestPage}/>
                    <Route path="/OpenRequest" component={NeedApprovalPage}/>
                    <Route path="/ViewRequest/:uuid" component={ViewRequestPage}/>
                </Switch>
            </Router>
        </RestrictAccess>);
    }
}
