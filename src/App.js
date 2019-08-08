import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Reroll from './components/Reroll';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/reroll' component={Reroll} />
        </div>
      </Router>
      
    );
  }
}


export default App;
