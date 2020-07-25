const axios = require("axios");
const querystring = require("querystring");
const baseUrl = "​http://stg-api.pedidosya.com/public/v1/";
exports.getLogin = (req, res, next) => {
  res.render("login");
};

const getAuthorization = () => {
  const { clientId, clientSecret } = process.env;
  return axios.get(
    "http://stg-api.pedidosya.com/public/v1/tokens?" +
      querystring.stringify({ clientId, clientSecret })
  );
};
exports.postLogin = async (req, res, next) => {
  //TODO: delete this test_automation_000@pedidosya.com
  const { userName, password } = req.body;
  const loginUrl =
    "http://stg-api.pedidosya.com/public/v1/tokens?" +
    querystring.stringify({ userName, password });
  try {
    const {
      data: { access_token: Authorization },
    } = await getAuthorization();
    const {
      data: { access_token: userAccessToken },
    } = await axios.get(loginUrl, {
      headers: { Authorization },
    });
    res.send(`Access token: ${userAccessToken}`);
  } catch (err) {
    console.log(err);
    res.status(401).send("Unauthorized");
  }
};
