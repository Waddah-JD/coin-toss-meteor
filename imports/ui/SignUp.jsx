import React, { useState } from "react";
import { Accounts } from "meteor/accounts-base";

import SignUpForm from "./components/AuthForm";

export default ({ showSignIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    Accounts.createUser({
      username,
      password,
    });
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <button onClick={showSignIn}>Вход</button>

      <SignUpForm
        submitButtonLabel="Sign Up"
        submitHandler={submitHandler}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
};
