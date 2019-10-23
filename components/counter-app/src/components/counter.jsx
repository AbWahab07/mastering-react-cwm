import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    imgURL: "https://picsum.photos/200"
  };

  // property to set the style attribute
  styles = {
    fontSize: 20 // Css properties in Camel case
  };

  render() {
    return (
      <div>
        <img src={this.state.imgURL} alt="" />
        {/* Inline style using property */}
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>

        {/* Inline style using an object */}
        <button style={{ fontSize: 40 }} className="btn btn-secondary btn-sm">
          Increment
        </button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
