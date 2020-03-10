import React from 'react';
import './App.css';
import {second} from './router'
import Admin from './first/admin'
import {Route,Switch,Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Admin>
        <Switch>
          {
            second.map((item)=>{
              return <Route key={item.path} path={item.path} component={item.component}></Route>
            })
          }
          <Redirect to='/home/film'></Redirect>
        </Switch>
      </Admin>
    </div>
  );
}

export default App
