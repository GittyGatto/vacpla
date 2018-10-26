import React from 'react';
import clearMessage from '../actions/clear-message-action';

export default class MyMessage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {text, type} = this.props;

		if (!text) {
			return null;
		}

		if (!type) {
			type = 'success';
		}

		const isSuccessMessage = type === 'success';

		return (<div className={'alert alert-' + (type) + (!isSuccessMessage ? ' alert-dismissible' : '')}>
			{text}
				<button type="button" className="close" data-dismiss="alert" onClick={clearMessage} aria-label="Close"><span
					aria-hidden="true">&times;</span></button>
		</div>);
	}
}
