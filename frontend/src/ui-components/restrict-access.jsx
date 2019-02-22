import React from 'react';
import {dispatcher} from "../util/mini-flux";
import LoginPage from "./login/login-page";

export default class RestrictAccess extends React.Component {
	constructor(props) {
		super(props);

		this.state = {isAuthenticated: false};

		this._onChange = this._onChange.bind(this);
	}

	componentDidMount() {
		dispatcher.subscribe(this._onChange);
	}

	componentWillUnmount() {
		dispatcher.unsubscribe(this._onChange);
	}

	_onChange(ev) {
		const {isAuthenticated} = ev;
		this.setState({isAuthenticated});
	}

	render() {
		const {isAuthenticated} = this.state;

		if (isAuthenticated) {
			return <div>{this.props.children}</div>;
		}
		else {
			return (<div>
				<LoginPage/>
			</div>);
		}
	}
}
