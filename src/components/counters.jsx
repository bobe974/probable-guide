import Counter from "./counter";
import { Component } from "react";
import React from "react";
class Counters extends Component {
  render() {
    const { onIncrement, onDecrement, onDelete, counters, onReset } = this.props;
    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <div className="container">
          {counters.map((counter) => (
            <div className="row mb-2" key={counter.id}>
              <div className="col">
                <Counter
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  ondelete={onDelete}
                  counter={counter}
                />
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
