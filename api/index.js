const axios = require("axios");

exports.PeyAPI = axios.create({
  baseURL: "http://stg-api.pedidosya.com/public/v1/",
});
