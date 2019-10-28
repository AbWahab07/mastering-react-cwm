import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // console.log(this.props);
    const {
      counters,
      onReset,
      onIncrement,
      onDecrement,
      onDelete
    } = this.props;
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          /** Raising reset event */
          onClick={onReset}
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            /** Passing counter object as a props to keep our code maintainable */
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
