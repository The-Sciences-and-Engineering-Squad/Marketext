import React from 'react';
import Cookies from 'universal-cookie';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import api from '../../API/api'
import blankProfileImage from '../../../public/BlankProfileImage.png';
import jwt_decode from "jwt-decode";
import './Profile.css';

export default class Profile extends React.Component {
  componentDidMount(){
    // Replace this information with information retrieved from the backend about the user.

    const cookies = new Cookies();
    this.setState({token: cookies.get('token')})
    const API = new api();
    API.getUserProfile({token: cookies.get('token')}).then( profile => {
      this.setState({
        token: cookies.get('token'),
        username: jwt_decode(cookies.get('token')).username,
        email: jwt_decode(cookies.get('token')).email,
        firstName: profile['firstName'],
        lastName: profile['lastName'],
        phoneNumber: profile['phoneNumber'],
        address: profile['street'],
        city: profile['city'],
        state: profile['state'],
        zipcode: profile['zipCode'],
      })
    })

  }

  constructor() {
    super();
    this.state = {
      token: "",
      username: "",
      email: "",
      Password: "",
      newPassword: "",
      newPassword2: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      errors: [],
    };
  }

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // eventually api call to call the backend
  handleSubmit = (e) => {
    e.preventDefault();
    const { Password, newPassword, newPassword2 } = this.state;
    var newState = Object.assign({}, this.state);
    newState.errors = [];
    // Users are allowed to change their information as long as they enter their current password.
    // They are NOT forced to change their current password when updating their information.
    if (Password === "") {
      newState.errors.push("Please Enter Current Password to Make Any Changes");
    }
    else{
      if(newPassword === "" && newPassword2 === ""){
        // Backend, check if the password is correct with user password in database.
        // If so, update email, firstName, lastName, phoneNumber, address, city, state, zipcode
        // If not, return an error saying "Current Password is Incorrect"
        const data = this.state
        const API = new api();
        API.updateProfile(data).then( error => {
          this.setState(({errors}) => ({
            errors: errors.concat(error)
          }));
        });
      }
      else{
        if (newPassword !== newPassword2) {
          newState.errors.push("The New Passwords Do Not Match");
        }
        else{
          // Backend, check if the password is correct with user password in database.
          // If so, update password using the new password, email, firstName, lastName, phoneNumber, address, city, state, zipcode
          // If not, return an error saying "Current Password is Incorrect"
          const data = this.state
          const API = new api();
          API.updateProfile(data).then( error => {
            this.setState(({errors}) => ({
              errors: errors.concat(error)
            }));
          });
        }
      }
    }
    this.setState(newState);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <div className="sidebar-user-profile-container">
              <Sidebar className="sidebar-container-page"/>
              <Container fluid className="p-2 m-3">
                <Row className="justify-content-center mt-4">
                  <Col xs="auto">
                    <Image className="profileImg" src={blankProfileImage} roundedCircle />
                  </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                  <Col xs="auto">
                    <h4 className="userName">{this.state.username}</h4>
                  </Col>
                </Row>
                <hr/>
                <Row>
                  <Col>
                    <ul data-testid="errors">
                      { this.state.errors.length > 0 &&
                        this.state.errors.map((error,index) => {
                          return <li key={index} className="text-warning"> {error} </li>
                      })
                      }
                    </ul>
                    <Form onSubmit={this.handleSubmit}>
                      <h3 data-testid="text" className="profileDescription"> User Credentials </h3>
                      <Form.Row>
                        <Form.Group as={Col} sm="12" md="6" controlId="formEmail">
                          <Form.Label>Email:</Form.Label>
                          <Form.Control data-testid="email" type="email" placeholder="Enter E-mail" value={this.state.email} readOnly />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} sm="12" md="6" controlId="formPassword">
                          <Form.Label>Current Password:</Form.Label>
                          <Form.Control data-testid="password" className="profile-forms" type="password" placeholder="Enter Current Password" onChange={this.handleChange("Password")}/>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} sm="12" md="6" controlId="formNewPassword">
                          <Form.Label>New Password:</Form.Label>
                          <Form.Control data-testid="newPassword" className="profile-forms" type="password" placeholder="Enter New Password" onChange={this.handleChange("newPassword")}/>
                        </Form.Group>
                        <Form.Group as={Col} sm="12" md="6" controlId="formConfirmPassword">
                          <Form.Label>Confirm New Password:</Form.Label>
                          <Form.Control data-testid="newPassword2" className="profile-forms" type="password" placeholder="Confirm New Password" onChange={this.handleChange("newPassword2")}/>
                        </Form.Group>
                      </Form.Row>
                      <hr/>
                      <h3 className="profileDescription"> Shipping Information </h3>
                      <Form.Row>
                        <Form.Group as={Col} sm="12" md="6" controlId="formFirstName">
                          <Form.Label>First Name:</Form.Label>
                          <Form.Control data-testid="first" className="profile-forms" type="text" placeholder="Enter First Name" value={this.state.firstName} onChange={this.handleChange("firstName")}/>
                        </Form.Group>
                        <Form.Group as={Col} sm="12" md="6" controlId="formLastName">
                          <Form.Label>Last Name:</Form.Label>
                          <Form.Control data-testid="last" className="profile-forms" type="text" placeholder="Enter Last Name" value={this.state.lastName} onChange={this.handleChange("lastName")}/>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} sm="12" md="6" controlId="formPhoneNumber">
                          <Form.Label>Phone Number:</Form.Label>
                          <Form.Control data-testid="phone" className="profile-forms" type="text" placeholder="Enter Phone Number" value={this.state.phoneNumber} onChange={this.handleChange("phoneNumber")}/>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} sm="12" md="6" controlId="formAddress">
                          <Form.Label>Address:</Form.Label>
                          <Form.Control data-testid="address" className="profile-forms" type="text" placeholder="Enter Address" value={this.state.address} onChange={this.handleChange("address")}/>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} sm="12" md="4" controlId="formCity">
                          <Form.Label>City:</Form.Label>
                          <Form.Control data-testid="city" className="profile-forms" type="text" placeholder="Enter City" value={this.state.city} onChange={this.handleChange("city")}/>
                        </Form.Group>
                        <Form.Group as={Col} sm="12" md="4" controlId="formState">
                          <Form.Label>State:</Form.Label>
                          <Form.Control data-testid="state" className="profile-forms" as="select" value={this.state.state} onChange={this.handleChange("state")}>
                            <option value="">Choose</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group  as={Col} sm="12" md="4" controlId="formZip">
                          <Form.Label>Zip Code:</Form.Label>
                          <Form.Control data-testid="zip" className="profile-forms" type="text" placeholder="Enter Zip Code" value={this.state.zipcode} onChange={this.handleChange("zipcode")}/>
                        </Form.Group>
                      </Form.Row>
                      <Button data-testid="save" variant="danger" type="submit" className="saveChangesBtn" onClick={this.handleSubmit}>Save Changes</Button>
                    </Form>
                  </Col>
                </Row>
              </Container>
          </div>
        </Row>
      </Container>
    );
  }
}
