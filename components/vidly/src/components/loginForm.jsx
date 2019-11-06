import React from "react";
import Joi from "joi-browser";
import Form from './common/form';

class LoginForm extends Form {
  state = {
    // omitting username or passing null as a vlue for username/password will result in error
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
