import React from "react";
import "../css/profileNavbar.css";

function ProfileNavBar({ page, setPage }) {
  return (
    <div className="profile-navbar">
      <div>
        <button
          onClick={() => {
            setPage(true);
          }}
          className={page ? "active-buttom" : "passive-Buttom"}
        >
          Personal Info
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setPage(false);
          }}
          className={!page ? "active-buttom" : "passive-Buttom"}
        >
          Account Security
        </button>
      </div>
    </div>
  );
}

export default ProfileNavBar;
