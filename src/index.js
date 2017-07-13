import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
//import Promise from 'redux-promise';
//import reducers from './reducers';
//const createStoreWithMiddleware = applyMiddleware()(createStore);


import App from './components/app';

ReactDOM.render(
<div>  
    <Router >
      <Route path="/" component={App} />
    </Router >
</div>
  , document.querySelector('.container'));
