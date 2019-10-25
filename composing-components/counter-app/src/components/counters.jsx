import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          /** Raising reset event */
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            /** Passing counter object as a props to keep our code maintainable */
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
