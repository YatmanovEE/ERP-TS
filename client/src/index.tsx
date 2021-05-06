import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'react-jss';

const theme: ITheme = {
	border: '1px solid #E1E1E1',
	backgroundColor: '#FBFBFB',
	filterBorderColor__active: '#4583CC',
	borderColor: '#E1E1E1',
	secondaryBackground: '#E5E5E5',
};

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
