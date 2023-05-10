import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './Redux/store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import {BrowserRouter} from 'react-router-dom'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <BrowserRouter>
//   <App />
// </BrowserRouter>
// )