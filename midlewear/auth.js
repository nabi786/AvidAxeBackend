const credits_fun = require("./credits")


// authentication
const auth = async (req, res, next) => {

  var api_key = req.header.api_key || req.body.api_key || req.query.api_key;
  if (api_key === process.env.APIKEY) {

      await credits_fun(req.body.requestType)
      next();
  } else {
    res.status(404).json({ success: false, msg: "invalid api key" });
  }
};

module.exports = auth;
