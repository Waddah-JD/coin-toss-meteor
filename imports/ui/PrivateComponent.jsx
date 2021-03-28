import React from "react";
import { Meteor } from "meteor/meteor";

import CoinTossesHistory from "./CoinTossesHistory";
import NewCoinToss from "./NewCoinToss";

export default () => {
  const signOutHandler = (e) => {
    e.preventDefault();
    Meteor.logout();
  };

  return (
    <div>
      <NewCoinToss />
      <CoinTossesHistory />
      <button onClick={signOutHandler}>Выход</button>
    </div>
  );
};
