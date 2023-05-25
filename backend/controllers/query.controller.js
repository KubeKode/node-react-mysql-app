const Query = require("../models/Query.model");
exports.postQueryController = async (req, res, next) => {
  const { firstName, lastName, email, pan, pincode, query, phone } = req.body;
  console.log(req.body);
  try {
    const savedRecord = await Query.create({
      firstName,
      lastName,
      email,
      pan,
      pincode,
      query,
      phone,
    });
    res.status(200).json(savedRecord);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.getAllQueries = async (req, res, next) => {
  try {
    const allQueries = await Query.findAndCountAll();
    res.status(200).json(allQueries);
  } catch (err) {
    res.status(500).json(err);
  }
};
