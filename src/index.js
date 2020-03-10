import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import store from './store'
import {routes} from './router'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        {
          routes.map((item)=>{
            return <Route key={item.path} path={item.path} component={item.component}></Route>
          })
        }
        <Redirect from='/' to='/home' exact></Redirect>
        <Redirect to='/404'></Redirect>
      </Switch>
    </Router>
  </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
