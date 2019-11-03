import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    // omitting username or passing null as a vlue for username/password will result in error
    account: { username: "", password: "" },
    errors: {}
  };

  // returns an errors object to set errors in the state
  validate = () => {
    const errors = {};

    const { account } = this.state;
    // if username or password is empty
    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    // console.log(errors);

    // set the state to either errors object or empty object, it shouldn't be null.
    this.setState({ errors: errors || {} });

    // if there are errors we'll immediately return without calling the server
    if (errors) return;

    // Call the server
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            error={errors.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            error={errors.password}
            onChange={this.handleChange}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
