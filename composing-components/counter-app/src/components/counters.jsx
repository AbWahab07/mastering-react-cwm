import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 }, // value isn't being passed to the counter component
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    // console.log(this.props);
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            /** Passing counter object as a props to keep our code maintainable */
            counter={counter}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }

  // converted to arrow function to bind 'this'
  handleDelete = counterId => {
    // console.log("Event Handler called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    // this.setState({ counters: counters }); can be written as the line below
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    // updates the state but it's updated on the view because we don't have single source of truth
    this.setState({ counters });
  };
}

export default Counters;
