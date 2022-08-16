const mongoose = require("mongoose");
const Vote = require("../models/vote");
const Nominate = require("../models/nominate");

const getVote = async (req, res) => {
  const votes = await Vote.find({});
  res.status(200).json(votes);
};

const postNominate = async (req, res) => {
  console.log("hey");
  const { name, family, age, id } = req.body;
  try {
    const nominate = await Nominate.create({ name, family, age, id });
    res.status(200).json(nominate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteNominate = async (req, res) => {
  console.log("hey");
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such nominate" });
  }

  const nominate = await Nominate.findByIdAndDelete({ _id: id });
  if (!nominate) {
    return res.status(404).json({ error: "no such nominate" });
  }
  res.status(200).json(nominate);
};

module.exports = {
  getVote,

  postNominate,
  deleteNominate,
};
