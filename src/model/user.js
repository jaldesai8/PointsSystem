const { Schema, model } = require("mongoose");

let UserSchema = new Schema({
  name: { type: String, required: true, unique: true },
  P5: {
    points: {
      type: Number,
      default: 100,
      min: 0,
    },
    P5History: { type: [Schema.Types.ObjectId], ref: "P5History" },
  },
  reward: {
    points: {
      type: Number,
      default: 0,
    },
    RewardHistory: {
      type: [Schema.Types.ObjectId],
      ref: "rewardHistory",
    },
  },
});

const UserModel = model("UserModel", UserSchema);

module.exports = UserModel;
