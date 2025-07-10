import { Component } from "react";

const Navbar = ({totalCounters}) => {
    return ( 
        <div>
        <nav className="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#"></a>
          <span className="badge badge-pill badge-secondary">
            {" "}
            {totalCounters}
          </span>
        </nav>
      </div>
    );
}
 
export default Navbar;