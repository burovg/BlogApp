import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

import {BrowserRouter,Route,Switch} from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends Component{
  render(){
    return(
      <div>Hello!</div>
    );
  }
}

class GoogBye extends Component{
  render(){
    return(
      <div>Good Bye !</div>
    );
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
      <Route path='/hello' component={Hello} />
      <Route path='/goodbye' component={GoogBye} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
