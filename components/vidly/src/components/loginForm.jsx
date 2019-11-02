import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef(); // creating ref for username field

  // componentDidMount() {
  //   this.username.current.focus(); // gives focus to the input field, we can use autoFoucs attribute to avoid this
  // }

  handleSubmit = e => {
    e.preventDefault();

    // Call the server

    // const username = document.getElementById('username').value;  you shouldn't access the DOM using document object model
    const username = this.username.current.value; // accessing username using ref
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">UserName</label>
            <input
              autoFocus
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
