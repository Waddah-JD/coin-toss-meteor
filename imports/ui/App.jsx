import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";

import CoinTossesHistory from "./CoinTossesHistory";
import NewCoinToss from "./NewCoinToss";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export const App = () => {
  const user = useTracker(() => Meteor.user());
  const [shownPage, setShownPage] = useState("SIGN_IN");

  const showSignIn = () => setShownPage("SIGN_IN");
  const showSignUp = () => setShownPage("SIGN_UP");

  if (!user) {
    return (
      <div>
        {shownPage === "SIGN_IN" ? (
          <SignIn showSignUp={showSignUp} />
        ) : (
          <SignUp showSignIn={showSignIn} />
        )}
      </div>
    );
  } else {
    return (
      <div>
        <NewCoinToss />
        <CoinTossesHistory />
      </div>
    );
  }
};
