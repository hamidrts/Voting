import React, { useState } from "react";
import UpdateProfile from "../component/UpdateProfile";
import "../css/profile.css";
import { useAuthContext } from "../hooks/useAuthContext";
import ChangePassword from "../component/ChangePassword";
import ProfileNavBar from "../component/ProfileNavBar";

function Profile() {
  const [page, setPage] = useState(true);
  return (
    <div className="mainProfile-container">
      <div>
        <ProfileNavBar page={page} setPage={setPage} />
      </div>
      {page && (
        <div>
          <UpdateProfile />
        </div>
      )}
      {!page && (
        <div>
          <ChangePassword />
        </div>
      )}
    </div>
  );
}

export default Profile;
