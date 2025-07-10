import React from "react";
import { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {  counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 6 },
    ]
 } 
 handleDelete = (id) => {
    console.log("DELETE with id: " + id);
    const counters = this.state.counters.filter((e) => e.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((e) => {
      e.value = 0;
      return e;
    });
    this.setState({ counters });
    this.state.counters.map((e) => console.log("valeur: " + e.value));
  };

  handleIncrement = (counter) => {
    //counter.value++;
    //this.state.counters.map((e) => {
    //e.id === counter.id && this.setState(counter);
    // });
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState(counters);
  };

  
  render() { 
    return (
      <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter((e)=>e.value > 0).length}></Navbar>
      <Counters
        onDelete={this.handleDelete}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        counters = {this.state.counters}
      ></Counters>
    </React.Fragment>
    );
  }
}
 
export default App;