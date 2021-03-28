import { Meteor } from "meteor/meteor";
import React from "react";

export default () => {
  const throwCoin = () => {
    Meteor.call("coinToss.insert");
  };

  return (
    <div>
      <button onClick={throwCoin}>Подбросить монетку</button>
    </div>
  );
};
