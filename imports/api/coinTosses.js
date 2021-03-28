import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const CoinTossesCollection = new Mongo.Collection("coin-tosses");

Meteor.methods({
  "coinToss.insert"() {
    const randomNumber = Math.random();
    const result = randomNumber < 0.5 ? "Орел" : "Решка";

    CoinTossesCollection.insert({
      result,
      createdAt: new Date(),
    });
  },
});
