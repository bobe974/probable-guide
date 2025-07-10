import { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#"></a>
          <span className="badge badge-pill badge-secondary">
            {" "}
            {this.props.totalCounters}
          </span>
        </nav>
      </div>
    );
  }
}

export default Navbar;
