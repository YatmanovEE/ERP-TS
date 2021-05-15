import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { rootReducer, IRootReducer } from './redux/stores/rootStore';
import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { sagaWatcher } from './redux/saga';

export interface ITheme {
	border: string;
	backgroundColor: string;
	filterBorderColor__active: string;
	borderColor: string;
	boxShadow: string;
	secondaryBackground: string;
	linkColor: string;
}

const theme: ITheme = {
	border: '1px solid #E1E1E1',
	backgroundColor: '#FBFBFB',
	filterBorderColor__active: '#4583CC',
	borderColor: '#E1E1E1',
	boxShadow: '#E5E5E5',
	secondaryBackground: '0px 4px 12px rgba(0, 0, 0, 0.16)',
	linkColor: '#2F80ED',
};
const sagaMiddleware = createSagaMiddleware();

function store(initialState: IRootReducer): Store<IRootReducer> {
	return createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(sagaMiddleware))
	);
}
let init: any = {};

let mountStore = store(init);

sagaMiddleware.run(sagaWatcher);
ReactDOM.render(
	<React.StrictMode>
		<Provider store={mountStore}>
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
