import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { rootReducer, IRootReducer } from './redux/stores/rootStore';
import { createStore, Store } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

const theme: ITheme = {
	border: '1px solid #E1E1E1',
	backgroundColor: '#FBFBFB',
	filterBorderColor__active: '#4583CC',
	borderColor: '#E1E1E1',
	secondaryBackground: '#E5E5E5',
};

function store(initialState: IRootReducer): Store<IRootReducer> {
	return createStore(rootReducer, composeWithDevTools());
}
let init: any = {};
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store(init)}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
