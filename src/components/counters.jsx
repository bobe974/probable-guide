import Counter from "./counter";
import { Component } from "react";
import React from "react";
class Counters extends Component {
 
  render() {
    console.log("props " + this.props);
    return (
      <React.Fragment>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btm-sm m-2"
        >
          Reset
        </button>
        <ul>
          {this.props.counters.map((counter) => (
            <li>
              <Counter
                key={counter.id}
                onIncrement={this.props.onIncrement}
                ondelete={this.props.onDelete}
                counter={counter}
              ></Counter>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Counters;
