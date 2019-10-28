import React, { Component } from "react";
class Counter extends Component {
  // Old way of binding this
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  componentDidUpdate(prevProps, PrevState) {
    console.log(prevProps);
    console.log(PrevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call anf get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        </div>
        <div className="col">
          <button
            /** Raising increment event */
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            /** Raising delete event */
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-sm btn-secondary m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            /** Raising delete event */
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-sm btn-danger m-2"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
