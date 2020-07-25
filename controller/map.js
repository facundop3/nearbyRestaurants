const axios = require("axios");
const queryString = require("querystring");

const getRestaurants = ({
  country = 1,
  point,
  max = 20,
  fields = "name,ratingScore,logo,deliveryTimeMaxMinutes,link",
} = {}) => {
  const baseUrl = "http://stg-api.pedidosya.com/public/v1/search/restaurants?";
  const params = queryString.stringify({ country, point, max, fields });
  return axios.get(baseUrl + params, {
    headers: {
      Authorization: "498-251638-24b3395e-e3b7-479d-4809-b7a54b7ff9be",
    },
  });
};

exports.getMap = async (req, res, next) => {
  const { lat, lng } = req.query;
  try {
    const { data } = await getRestaurants({ point: `${lat},${lng}` });
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};
