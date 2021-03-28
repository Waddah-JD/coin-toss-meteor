import React from "react";

export default ({
  submitButtonLabel,
  submitHandler,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        required
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">{submitButtonLabel}</button>
    </form>
  );
};
