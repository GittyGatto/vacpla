import {dispatcher} from '../util/mini-flux'

export const setSidebarOpen = (isOpen) => {
  dispatcher.dispatch({type: 'showSidebar', showSidebar: isOpen});
};
