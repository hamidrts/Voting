const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const parentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  family: {
    type: String,
    required: true,
  },
  childeren: [childSchema],
});
module.exports = mongoose.model("parent", parentSchema);
