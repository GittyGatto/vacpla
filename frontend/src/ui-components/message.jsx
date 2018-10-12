import React from 'react';
import clearMessage from '../actions/clear-message-action';
import spinner from '../assets/images/spinner.gif';

export default class Message extends React.Component {
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

		const isProgressMessage = text.match(/^.*\.\.\.$/);
		if (isProgressMessage) {
			type = 'info';
		}
		const isSuccessMessage = type === 'success';
		const showCloseButton = isSuccessMessage;

		return (<div className={'alert alert-' + (type) + (!isSuccessMessage ? ' alert-dismissible' : '')}>
			{isProgressMessage ? <img src={spinner}/> : null}
			{text}
			{!showCloseButton ?
				<button type="button" className="close" data-dismiss="alert" onClick={clearMessage} aria-label="Close"><span
					aria-hidden="true">&times;</span></button>
				: null
			}
		</div>);
	}
}
