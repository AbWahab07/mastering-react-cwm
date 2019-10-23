import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    imgURL: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
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
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        {/* Inline style using an object */}
        <button style={{ fontSize: 40 }} className="btn btn-secondary btn-sm">
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
