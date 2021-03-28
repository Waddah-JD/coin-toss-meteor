import React, { useState } from "react";
import { Meteor } from "meteor/meteor";

import SignInForm from "./components/AuthForm";

export default ({ showSignUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password);
  };

  return (
    <div>
      <h2>Вход</h2>
      <button onClick={showSignUp}>Регистрация</button>

      <SignInForm
        submitButtonLabel="Sign In"
        submitHandler={submitHandler}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
};
