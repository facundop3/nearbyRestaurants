const querystring = require("querystring");
const adminData = require("../adminData");
const PeyAPI = require("../api").PeyAPI;

const getAuthorization = () => {
  const { clientId, clientSecret } = process.env;
  return PeyAPI.get(
    "tokens?" + querystring.stringify({ clientId, clientSecret })
  );
};

const getUserByToken = (userToken) => {
  return PeyAPI.get("myAccount", {
    headers: {
      Authorization: userToken,
    },
  });
};

exports.getLogin = async (req, res, next) => {
  try {
    const {
      data: { access_token: client_access_token },
    } = await getAuthorization();
    res.render("index.html", { client_access_token });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.postLogin = async (req, res, next) => {
  const { userName, password, Authorization } = req.body;
  try {
    const {
      data: { access_token: userAccessToken },
    } = await PeyAPI.get(
      "tokens?" + querystring.stringify({ userName, password }),
      {
        headers: { Authorization },
      }
    );
    const { data } = await getUserByToken(userAccessToken);
    adminData.addLogedInUser(data.name, data.lastName);
    res.send({ ...data, Authorization: userAccessToken });
  } catch (err) {
    console.log(err);
    res.status(401).send("Unauthorized");
  }
};
