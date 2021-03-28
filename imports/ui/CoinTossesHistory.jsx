import React from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { CoinTossesCollection } from "../api/coinTosses";

export default () => {
  const coinTosses = useTracker(() => {
    return CoinTossesCollection.find(
      { createdBy: Meteor.userId() },
      { sort: { createdAt: -1 } }
    ).fetch();
  });

  return (
    <div>
      <h2>История подбросов</h2>
      <ul>
        {coinTosses.map(({ _id, result, createdAt }) => (
          <li key={_id}>
            <p>
              {result}{" "}
              <span>
                <i>({new Date(createdAt).toLocaleTimeString()})</i>
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
