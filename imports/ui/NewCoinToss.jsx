import { Meteor } from "meteor/meteor";
import React from "react";

export default () => {
  const throwCoin = () => {
    Meteor.call("coinToss.insert");
  };

  return (
    <div>
      <h2>New Coin Toss</h2>
      <button onClick={throwCoin}>throw</button>
    </div>
  );
};
