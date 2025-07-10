import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {

  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>BORDEL il n'y a pas de tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.ondelete(this.props.counter.id)}
          className="btn btn-danger btm-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const value = this.props.counter.value;
    return value === 0 ? <h1>zero</h1> : value;
  }
}

export default Counter;
