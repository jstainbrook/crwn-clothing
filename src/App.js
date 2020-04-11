import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

export const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
function App() {
  return (
    <Router>
    <div>
       <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
       </Switch>
    </div>
    </Router>
  );
}

export default App;
