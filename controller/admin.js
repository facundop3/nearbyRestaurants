const adminData = require("../adminData");

exports.getLogedInUsers = (req, res, next) => {
  res.seend(adminData.getLogedInUsers());
};

exports.getLatestSearchs = (req, res, next) => {
  res.seend(adminData.getLatestSearchs());
};
