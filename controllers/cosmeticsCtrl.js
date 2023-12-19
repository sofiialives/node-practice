const { ctrlWrapper } = require("../helpers/index");
const Peel = require("../models/peelModel");

const getPeel = async (req, res) => {
  const result = await Peel.find();
  res.json(result);
};

const getPeelById = async (req, res) => {
  const { id } = req.params;
  const result = await Peel.findById(id);

  if(!result){
    
  }
};

module.exports = {
  getPeel: ctrlWrapper(getPeel),
  getPeelById: ctrlWrapper(getPeelById),
};
