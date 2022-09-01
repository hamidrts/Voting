import React, { useState } from "react";
import "../css/changePassword.css";
import { useAuthContext } from "../hooks/useAuthContext";

function ChangePassword() {
  const [message, setMessage] = useState("Please inter your current password");
  const { user } = useAuthContext();
  const [password, setPassword] = useState("");
  const [comfirmedPassword, setComfirmedPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [renderChange, setRenderChange] = useState(false);

  const comfirmPassword = async () => {
    setError(false);
    setIsLoading(true);
    const response = await fetch("/voting/app/changepassword", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, password: password }),
    });
    const json = await response.json();
    if (!response.ok) {
      console.log(response);
      setMessage(json.error);
      setError(true);
      setIsLoading(false);
      setPassword("");
    }
    if (response.ok) {
      setMessage("");
      setRenderChange(true);
      setPassword("");
      setMessage("Please inter your new password");
      setError(false);
      setIsLoading(false);
    }
  };

  const setNewPassword = async () => {
    setIsLoading(true);
    if (!password || !comfirmedPassword) {
      setMessage("Please fill all fileds");
      setError(true);
      setIsLoading(false);
    } else if (password !== comfirmedPassword) {
      setMessage("Passwords are not match");
      setError(true);
      setIsLoading(false);
    } else {
      const response = await fetch("/voting/app/newpassword", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: user.id, password }),
      });

      const json = await response.json();
      if (!response.ok) {
        setMessage(json.error);
        setError(true);
        setIsLoading(false);
      }
      if (response.ok) {
        setMessage("Your passwors succesfully changed");
        setRenderChange(false);
        setPassword("");
        setComfirmedPassword("");

        setError(false);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="changePassword-container">
      <div className="text-container">
        <h2>Change Password</h2>
      </div>
      {!renderChange && (
        <div>
          <did className="input-section">
            <div className="password-card">
              <div className="message-section">
                <p style={{ color: `${error ? "red" : "black"}` }}>{message}</p>
              </div>
              <div className="input-holder">
                <label>Email</label>
                <input
                  className="chengepassword-input"
                  value={user.email}
                  disabled={true}
                />
              </div>
              <div className="input-holder">
                <label>Password</label>
                <input
                  type={"password"}
                  className="chengepassword-input"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div>
                <button
                  disabled={isLoading}
                  onClick={comfirmPassword}
                  className="changepassword-button"
                >
                  Submit
                </button>
              </div>
            </div>
          </did>
        </div>
      )}
      {renderChange && (
        <div>
          <did className="input-section">
            <div className="password-card">
              <div className="message-section">
                <p style={{ color: `${error ? "red" : "black"}` }}>{message}</p>
              </div>
              <div className="input-holder">
                <label>New Password</label>
                <input
                  type={"password"}
                  className="chengepassword-input"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="input-holder">
                <label>Comfirm New Password</label>
                <input
                  type={"password"}
                  className="chengepassword-input"
                  value={comfirmedPassword}
                  onChange={(e) => {
                    setComfirmedPassword(e.target.value);
                  }}
                />
              </div>
              <div>
                <button
                  disabled={isLoading}
                  onClick={setNewPassword}
                  className="changepassword-button"
                >
                  Submit
                </button>
              </div>
            </div>
          </did>
        </div>
      )}
    </div>
  );
}

export default ChangePassword;
