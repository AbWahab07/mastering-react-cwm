import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value
  };

  // Old way of binding this
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  // converted into arrow function
  handleIncrement = product => {
    // console.log(product);

    // you can't do this -> update the props inside the component
    // this.props.value = 0; // will result in error, can't assign read-only property
    this.setState({ value: this.state.value + 1 });
  };
}

export default Counter;
