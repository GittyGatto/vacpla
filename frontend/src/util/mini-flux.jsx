import {EventEmitter} from 'events';
import upperFirst from './upper-first'
import {copyObject} from "./copy-object";

// a small dispatcher that delegates actions to stores;
// for action Abc implement handleAbc(action) for store class
class Dispatcher {
	constructor() {
		this.count = 0;
		this.stores = [];
		this.eventEmitter = new EventEmitter();
	}

	addStore(store) {
		this.stores.push(store)
	}

	dispatch(...actions) {

		return new Promise((resolve, reject) => {
			try {
				console.debug("start %o Dispatching actions %o...", [...actions]);

				for (let i = 0; i < actions.length; ++i) {
					const action = actions[i];
					this._dispatchAction(action);
				}

				this._fireChanged();

				console.debug("end %o", this.count++);

				resolve();
			}
			catch (err) {
				reject(err);
			}
		});
	}

	_dispatchAction(action) {
		console.debug("%o Dispatching action result=%o to %d store(s)...", this.count, action, this.stores.length);

		const handlerName = "handle" + upperFirst(action.type);
		this.stores.forEach(function (store) {
			const handler = store[handlerName];
			if (handler) {
				handler.call(store, action);
			}
		});

	}

	subscribe(l) {
		this.eventEmitter.addListener('changed', l);
		this._fireChanged();
	}

	unsubscribe(l) {
		this.eventEmitter.removeListener('changed', l);
	}

	_fireChanged() {
		const data = copyObject(this._collectData());
		console.debug("Firing event ev=%o...", data);
		this.eventEmitter.emit('changed', data);
	}

	_collectData() {
		const data = {};
		this.stores.forEach(function (store) {
			const appendDataToFunc = store["appendDataTo"];
			if (appendDataToFunc) {
				appendDataToFunc.call(store, data);
			}
		});
		return data;
	}
}

export const dispatcher = new Dispatcher();
