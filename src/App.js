import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/navigation/Header/Header'
import Main from './components/navigation/Main/Main'
import Report from './components/reports/Report/Report'
import About from './components/navigation/About/About'

class App extends Component { 

  render() {

    return (
      <div className="App">
        <Header/> 
        <Main>
          <Switch>
            <Route exact path='/' component={ Report }></Route>
            <Route path='/reports' component={ Report }></Route>
            <Route path='/about' component={ About }></Route>
          </Switch>
        </Main>
      </div>
    );
  }
}

export default App;
