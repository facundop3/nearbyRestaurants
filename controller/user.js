const axios = require("axios");
const baseUrl = "http://stg-api.pedidosya.com/public/v1/";

exports.getMyaccount = (req, res, next) => {
  axios
    .get(baseUrl + "myAccount", {
      headers: {
        Authorization: "498-251302-eb1f1238-a80f-419b-56ca-e19f0cfab4cd",
      },
    })
    .then(({ data }) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};
