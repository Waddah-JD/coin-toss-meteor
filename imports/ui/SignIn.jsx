import React from "react";

export default ({ showSignUp }) => {
  return (
    <div>
      <h2>Sign In</h2>
      <button onClick={showSignUp}>Sign Up</button>
    </div>
  );
};
