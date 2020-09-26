import React from 'react';
import './ForgotPassword.css'

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };
  
  render() {
    return (
      <div className="center">
        <div className="container container-bg rounded px-5 py-4 mx-4">
          <h2 className="text-light text-center">Forgot Password</h2>
          <p></p>
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