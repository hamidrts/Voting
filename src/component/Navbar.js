import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogOut";
import { useAuthContext } from "../hooks/useAuthContext";
import image from "../image/38a932ea8c264a618f5ccc65346fc5a4 (1).png";
import AccountMenu from "./AccountMenu";

function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <div>
          <Link className="link" to="/">
            <img className="logo" src={image} />
          </Link>
        </div>
        {!user && (
          <div className="container">
            <div>
              <Link to="/login">Login</Link>
            </div>
            <div style={{ marginLeft: 20 }}>
              <Link to="/signup">Signup</Link>
            </div>
          </div>
        )}
        {user && (
          <div className="container">
            <div>
              <p>{user.name}</p>
            </div>
            <div style={{ marginRight: 20 }}>
              <AccountMenu />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
