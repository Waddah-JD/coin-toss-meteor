import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { CoinTossesCollection } from "../api/coinTosses";

export default () => {
  const coinTosses = useTracker(() => {
    return CoinTossesCollection.find({}, { sort: { createdAt: -1 } }).fetch();
  });

  return (
    <div>
      <h2>История подбросов</h2>
      <ul>
        {coinTosses.map(({ _id, result, createdAt }) => (
          <li key={_id}>
            <p>
              result: {result}{" "}
              <span>{new Date(createdAt).toLocaleTimeString()}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
