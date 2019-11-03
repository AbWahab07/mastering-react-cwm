import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    // omitting username or passing null as a vlue for username/password will result in error
    account: { username: "", password: "" }
  };
  handleSubmit = e => {
    e.preventDefault();

    // Call the server

    // const username = document.getElementById('username').value;  you shouldn't access the DOM using document object model
    const username = this.username.current.value; // accessing username using ref
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
