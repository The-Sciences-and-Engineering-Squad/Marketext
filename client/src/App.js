import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Navbar1 from './components/Navbar1/Navbar1';
import Home from './components/MainPages/Home/Home';
import Buy from './components/MainPages/Buy/Buy';
import Sell from './components/MainPages/Sell/Sell';
import Trade from './components/MainPages/Trade/Trade';
import Swap from './components/MainPages/Swap/Swap';
import Login from './components/AccessPages/Login/Login';
import Register from './components/AccessPages/Register/Register';
import ForgotPassword from './components/AccessPages/ForgotPassword/ForgotPassword';
import Profile from './components/UserPages/Profile/Profile';
import Balance from './components/UserPages/Balance/Balance';
import Message from './components/UserPages/Message/Message';
import CurrentlyListed from './components/UserPages/CurrentlyListed/CurrentlyListed';
import AddNew from './components/UserPages/AddNew/AddNew';
import TransactionHistory from './components/UserPages/TransactionHistory/TransactionHistory';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar1 />
        <Container fluid>
          <Row classname="justify-content-center">
            <Switch>
              <Route path="/Buy" component={Buy} />
              <Route path="/Sell" component={Sell} />
              <Route path="/Trade" component={Trade} />
              <Route path="/Swap" component={Swap} />
              <Route path="/Login" component={Login} />
              <Route path="/Register" component={Register} />
              <Route path="/ForgotPassword" component={ForgotPassword} />
              <Route path="/Profile" component={Profile} />
              <Route path="/Balance" component={Balance} />
              <Route path="/Message" component={Message} />
              <Route path="/CurrentlyListed" component={CurrentlyListed} />
              <Route path="/AddNew" component={AddNew} />
              <Route path="/TransactionHistory" component={TransactionHistory} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Row>
        </Container>
      </Router>
    );
  }
}


export default App;
