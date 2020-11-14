import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Navbar1 from './components/Navbar1/Navbar1';
import Navbar2 from './components/Navbar2/Navbar2';
import Home from './components/MainPages/Home/Home';
import Buy from './components/MainPages/Buy/Buy';
import Sell from './components/MainPages/Sell/Sell';
import Trade from './components/MainPages/Trade/Trade';
import Swap from './components/MainPages/Swap/Swap';
import Textbooks from './components/MainPages/Textbooks/Textbooks';
import Login from './components/AccessPages/Login/Login';
import Register from './components/AccessPages/Register/Register';
import ForgotPassword from './components/AccessPages/ForgotPassword/ForgotPassword';
import Profile from './components/UserPages/Profile/Profile';
import Balance from './components/UserPages/Balance/Balance';
import Message from './components/UserPages/Message/Message';
import Manage from './components/UserPages/Manage/Manage';
import CurrentlyListed from './components/UserPages/CurrentlyListed/CurrentlyListed';
import AddNew from './components/UserPages/AddNew/AddNew';
import TransactionHistory from './components/UserPages/TransactionHistory/TransactionHistory';
import Footer from './components/Footer/Footer';
import './App.css';


class App extends React.Component {
  componentDidMount() {
    const cookies = new Cookies();
    // Change this to authenticate the user
    // It currently gets the token and check if a username exist.
    // If it exists then it is an authorized user.
    if (cookies.get('token')){
      if(jwt_decode(cookies.get('token')).username){
        this.setState({ authorization: true });
      }
    }
  }

  constructor() {
    super();
    this.state = {
      authorization: false,
    };
  }

  // Add navbar here correspoding to there pages. if need a new case add it with the correct path 
  changeNav = (path) => {
    switch(path){
      case '/login':
      case '/register':
      case '/forgotpassword':
        return <Navbar2 />
      default:
        return <Navbar1 />
    }
  }


  render() {
    return (
      <Router>
        {this.changeNav(this.props.location.pathname.toLowerCase())}
        <Container fluid>
          <Row className="justify-content-center">
            <Switch>
              {/* MainPages */}
              <Route exact path="/Buy" component={Buy} />
              <Route exact path="/Buy/:id" component={Textbooks} />
              <Route exact path="/Sell" component={Sell} />
              <Route exact path="/Sell/:id" component={Textbooks} />
              <Route exact path="/Trade" component={Trade} />
              <Route exact path="/Trade/:id" component={Textbooks} />
              <Route exact path="/Swap" component={Swap} />
              <Route exact path="/Swap/:id" component={Textbooks} />
              {/* AccessPages */}
              <Route path="/Login" render={ this.state.authorization ? () => <meta http-equiv="refresh" content="0; url=/" /> : () => <Login /> } />
              <Route path="/Register" render={ this.state.authorization ? () => <meta http-equiv="refresh" content="0; url=/" /> : () => <Register /> } />
              <Route path="/ForgotPassword" render={ this.state.authorization ? () => <meta http-equiv="refresh" content="0; url=/" /> : () => <ForgotPassword /> } />
              {/* UserPages */}
              <Route path="/Profile" render={ this.state.authorization ? () => <Profile /> : () => <Redirect to="/" /> } />
              <Route path="/Balance" render={ this.state.authorization ? () => <Balance /> : () => <Redirect to="/" /> } />
              <Route exact path="/Message" render={ this.state.authorization ? () => <Message /> : () => <Redirect to="/" /> } />
              <Route exact path="/Message/Manage" render={ this.state.authorization ? () => <Manage /> : () => <Redirect to="/" /> } />
              <Route exact path="/CurrentlyListed" render={ this.state.authorization ? () => <CurrentlyListed /> : () => <Redirect to="/" /> } />
              <Route exact path="/CurrentlyListed/AddNew" render={ this.state.authorization ? () => <AddNew /> : () => <Redirect to="/" /> } />
              <Route path="/TransactionHistory" render={ this.state.authorization ? () => <TransactionHistory /> : () => <Redirect to="/" /> } />
              {/* HomePage */}
              <Route exact path="/" component={Home} />
            </Switch>
          </Row>
        </Container>
        <Footer />
      </Router>
    );
  }
}


export default withRouter(App);
