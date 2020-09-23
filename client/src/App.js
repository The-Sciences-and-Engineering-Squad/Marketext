import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/MainPages/Home/Home';
import Buy from './components/MainPages/Buy/Buy';
import Sell from './components/MainPages/Sell/Sell';
import Trade from './components/MainPages/Trade/Trade';
import Swap from './components/MainPages/Swap/Swap';
import Profile from './components/UserPages/Profile/Profile';
import Balance from './components/UserPages/Balance/Balance';
import Message from './components/UserPages/Message/Message';

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
              <Route path="/Balance" component={Balance} />
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
