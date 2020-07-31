import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
//import CardList from './CardList'; replaced with App component

//import { robots } from './robots'; moved to App.js
// if you get 'robots' is defines but never used error then you have to descrcture it because it's not exported default like card
// import Card from './Card';
//import * as serviceWorker from './ServiceWorker';


// ReactDom.renger(<App />, document.getElementById('root'));
//Making the card component 
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

