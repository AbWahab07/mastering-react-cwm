import React, { Component } from "react";

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
          <div className="form-group">
            <label htmlFor="username">UserName</label>
            <input
              value={account.username}
              onChange={this.handleChange}
              autoFocus
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              id="password"
              name="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
