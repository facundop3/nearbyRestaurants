const PeyAPI = require("../api").PeyAPI;
const queryString = require("querystring");

const generateSearchParams = ({
  country = 1,
  point,
  max = 20,
  fields = "name,ratingScore,logo,deliveryTimeMaxMinutes,link,coordinates,opened",
} = {}) => {
  return (params = queryString.stringify({ country, point, max, fields }));
};

exports.getRestaurants = async (req, res, next) => {
  const Authorization = req.header("Authorization");
  const { lat, lng, max, fields, country } = req.query;
  const params = generateSearchParams({
    point: `${lat},${lng}`,
    max,
    fields,
    country,
  });
  try {
    const { data } = await PeyAPI.get("search/restaurants?" + params, {
      headers: {
        Authorization,
      },
    });
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};
