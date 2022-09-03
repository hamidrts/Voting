import React, { useState } from "react";
import "../css/updateProfile.css";
import { useAuthContext } from "../hooks/useAuthContext";

function UpdateProfile() {
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    department: "",
    userImage: "",
  });
  const { user, dispatch } = useAuthContext();
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (!edit) {
      setEdit(true);
      setUserProfile({
        name: user.name,
        email: user.email,
        department: user.department,
        userImage: user.userImage,
      });
    } else {
      setLoading(true);
      const updateProfile = async () => {
        const updatedUser = {
          ...user,
          name: userProfile.name,
          email: userProfile.email,
          department: userProfile.department,
          userImage: userProfile.userImage,
        };

        const response = await fetch("/voting/app/updateprofile", {
          method: "PATCH",
          body: JSON.stringify(updatedUser),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();

        if (!response.ok) {
          setError(response.error);
        }
        if (response.ok) {
          setEdit(false);
          setUserProfile((p) => {
            return { ...p, name: "", email: "", department: "", userImage: "" };
          });
          setError("Your profile successfully update");

          const newUser = {};
          newUser.name = userProfile.name;
          newUser.email = userProfile.email;
          newUser.department = userProfile.department;
          newUser.userImage = userProfile.userImage;
          newUser.token = user.token;
          newUser.id = user.id;
          console.log(json.name);

          localStorage.removeItem("user");
          localStorage.setItem("user", JSON.stringify(newUser));

          dispatch({ type: "LOGIN", payload: newUser });
          setLoading(false);
        }
      };
      updateProfile();
    }
  };

  return (
    <div className="profile">
      <div className="profile-container">
        <div>
          <h2>Personal Info</h2>
        </div>
        <div>
          <button
            disabled={loading}
            className="edit-button"
            onClick={handleClick}
          >
            {!edit ? "Edit" : "Done"}
          </button>
        </div>
      </div>
      <div className="img-container">
        <div>
          <img className="profile-img" src={user.userImage} />
        </div>
      </div>
      <div className="input-container">
        <div className="input-holder">
          <label>Name</label>
          <input
            className="no-outline"
            onChange={(e) => {
              setUserProfile((P) => {
                return { ...P, name: e.target.value };
              });
            }}
            value={userProfile.name}
            disabled={!edit}
            style={{
              borderBottom: `2px solid ${
                !edit ? "gray" : "rgb(132, 132, 252)"
              }`,
            }}
          />
        </div>
        <div className="input-holder">
          <label>Email</label>
          <input
            className="no-outline"
            onChange={(e) => {
              setUserProfile((P) => {
                return { ...P, email: e.target.value };
              });
            }}
            value={userProfile.email}
            disabled={!edit}
            style={{
              borderBottom: `2px solid ${
                !edit ? "gray" : "rgb(132, 132, 252)"
              }`,
            }}
          />
        </div>
      </div>
      <div className="input-container">
        <div className="input-holder">
          <label>Department</label>
          <input
            className="no-outline"
            onChange={(e) => {
              setUserProfile((P) => {
                return { ...P, department: e.target.value };
              });
            }}
            value={userProfile.department}
            disabled={!edit}
            style={{
              borderBottom: `2px solid ${
                !edit ? "gray" : "rgb(132, 132, 252)"
              }`,
            }}
          />
        </div>
        <div className="input-holder">
          <label>Image</label>
          <input
            className="no-outline"
            onChange={(e) => {
              setUserProfile((P) => {
                return { ...P, userImage: e.target.value };
              });
            }}
            value={userProfile.userImage}
            disabled={!edit}
            style={{
              borderBottom: `2px solid ${
                !edit ? "gray" : "rgb(132, 132, 252)"
              }`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
