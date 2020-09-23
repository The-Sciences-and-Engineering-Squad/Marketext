import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Buy from './components/Buy/Buy';
import Sell from './components/Sell/Sell';
import Trade from './components/Trade/Trade';
import Swap from './components/Swap/Swap';
import Profile from './components/Profile/Profile';
import Message from './components/Message/Message';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            <Switch>
              <Route path="/Buy" component={Buy} />
              <Route path="/Sell" component={Sell} />
              <Route path="/Trade" component={Trade} />
              <Route path="/Swap" component={Swap} />
              <Route path="/Profile" component={Profile} />
              <Route path="/Message" component={Message} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
