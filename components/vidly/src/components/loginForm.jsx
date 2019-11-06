import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    // omitting username or passing null as a vlue for username/password will result in error
    account: { username: "", password: "" },
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

  // returns an errors object to set errors in the state
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);

    const errors = {};
    // if error is falsy
    if (!error) return null;
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
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

  validateProperty = ({ name, value }) => {
    // using computed property in ES6
    const obj = { [name]: value };

    // we need to give a sub schema, want to abortEarly
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    //if falsy
    // if(!error) return null;
    // return error.details[0].message;
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
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

          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
