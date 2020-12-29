import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './components/home'
import about from './components/About';
import portfolio from './components/Portfolio';
import skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component= {home}/>
            <Route path='/about' component={about}/>
            <Route path='/skills' component={skills}/>
            <Route path='/portfolio' component={portfolio}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
