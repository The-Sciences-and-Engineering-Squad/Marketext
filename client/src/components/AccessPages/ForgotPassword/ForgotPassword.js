import React from 'react';
import './ForgotPassword.css'

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      errors: [],
    };
  }

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, errors } = this.state;
    this.setState({ errors: [] });
    if (email === "") {
      this.setState(({errors}) => ({
        errors: errors.concat("Please Enter an Email")
      }));
    }
    if(errors.length === 0) {
      // Insert Backend Here.
      
    }
  };
  
  render() {
    return (
      <div className="center">
        <div className="container container-bg rounded px-5 py-4 mx-4">
          <h2 className="text-light text-center">Forgot Password</h2>
          { this.state.errors.length > 0 ?  
            this.state.errors.map((error,index) => {
              return <li key={index} className="text-warning"> {error} </li>
          })
          : 
          <div></div>
          } 
          <form>
            <div className="form-group">
              <label className="text-light">E-mail:</label>
              <input id="email" type="email" placeholder="Enter Email" className="form-control"
                onChange={this.handleChange("email")}/>
            </div>
          </form>
          <button type="submit" className="btn btn-danger btn-lg btn-block"
            onClick={this.handleSubmit}>
            Send
          </button>
        </div>
      </div>
    );
  }
}