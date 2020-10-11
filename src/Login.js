import React, { useState, useEffect } from "react";

// material ui components
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Button from "@material-ui/core/Button";
import BlockIcon from "@material-ui/icons/Block";

import "./Login.css";

export default function Login({ login }) {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [isUnauthorised, setIsUnAutherised] = useState(!1);

  const authenticate = () => {
    if (username === "CodewithSudeep" && password === "admin123") {
      login();
      setIsUnAutherised(!1);
    }

    setIsUnAutherised(1);
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      login();
    }
  }, [login]);

  return (
    <div className="login">
      {isUnauthorised && (
        <div className="login-errorMessage">
          <BlockIcon /> Wrong username or password!
        </div>
      )}

      <form>
        {/* username */}
        <h1 className="login-title">TodoGram</h1>
        <div className="login-input">
          <PermIdentityIcon />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>

        {/* password */}
        <div className="login-input">
          <VpnKeyIcon />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <div className="login-authenticateButton">
          <Button display="flex" onClick={() => authenticate()}>
            AUTHENTICATE
          </Button>
        </div>
      </form>
    </div>
  );
}
