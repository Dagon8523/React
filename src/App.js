import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom'
  

import {Detail} from './Pages/Detail'
import {Home} from './Pages/home'
import {NotFound} from './Pages/NotFound'

import './App.css';
import 'bulma/css/bulma.css'


class App extends Component{


  render(){    
    return(
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:id' component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    ); 
  }
}

export default App;


