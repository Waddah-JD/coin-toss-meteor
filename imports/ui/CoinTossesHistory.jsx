import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

import DATA_CONSTANTS from "../../constants/data";
import { CoinTossesCollection } from "../api/coinTosses";
import Paginator from "./components/Paginator";

export default () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = DATA_CONSTANTS.PAGINATOR_PAGE_SIZE;

  const coinTosses = useTracker(() => {
    return CoinTossesCollection.find(
      { createdBy: Meteor.userId() },
      {
        sort: { createdAt: -1 },
        limit: pageSize,
        skip: (currentPage - 1) * pageSize,
      }
    ).fetch();
  });

  const totalCoinTosses = useTracker(() => {
    return CoinTossesCollection.find(
      { createdBy: Meteor.userId() },
      { sort: { createdAt: -1 } }
    ).count();
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
      <Paginator
        totalData={totalCoinTosses}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
