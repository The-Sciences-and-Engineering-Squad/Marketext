import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

import './App.css';

class App extends React.Component {
  render() {
    return (
        <Router>
          <Navbar />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
