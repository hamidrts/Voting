const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nominateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    family: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("nominate", nominateSchema);
