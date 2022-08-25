import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogOut";
import { useAuthContext } from "../hooks/useAuthContext";

function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link className="link" to="/voting/app">
          <h1> Home</h1>
        </Link>

        <nav>
          <div>
            <Link to="/voting/app/login">Login</Link>
            <Link to="/voting/app/signup">Signup</Link>
          </div>

          <button onClick={handleLogout}>Log Out</button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
