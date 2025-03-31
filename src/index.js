import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './store/store';
import reportWebVitals from './reportWebVitals';


const handleWebVitals = (metric) => {
  console.log(metric); // Logs the Web Vitals metrics to the console
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals(handleWebVitals);


