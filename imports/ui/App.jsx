import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";

import PrivateComponent from "./PrivateComponent";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AUTH_CONSTANTS from "../../constants/auth";

export default () => {
  const user = useTracker(() => Meteor.user());
  const [shownPage, setShownPage] = useState(AUTH_CONSTANTS.SIGN_IN);

  const showSignIn = () => setShownPage(AUTH_CONSTANTS.SIGN_IN);
  const showSignUp = () => setShownPage(AUTH_CONSTANTS.SIGN_UP);

  if (!user) {
    return (
      <div>
        {shownPage === AUTH_CONSTANTS.SIGN_IN ? (
          <SignIn showSignUp={showSignUp} />
        ) : (
          <SignUp showSignIn={showSignIn} />
        )}
      </div>
    );
  } else {
    return <PrivateComponent />;
  }
};
