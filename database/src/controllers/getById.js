
const store = require("../db");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { model, id } = req.params;
  const data = await store[model].get(id);
  response(res, 200, data);
};
