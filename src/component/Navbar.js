import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="container">
        <Link className="link" to="/">
          <h1> Home</h1>
        </Link>
        <Link className="link" to="/admin">
          <h1> Admin</h1>
        </Link>
        <nav>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
