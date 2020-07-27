const PeyAPI = require("../api").PeyAPI;
const queryString = require("querystring");
const adminData = require("../adminData");
const NodeCache = require("node-cache");
const myCache = new NodeCache();
// Cache time in seconds
var cacheTimeOut = 60;

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
  const point = `${lat},${lng}`;
  const restaurantsFromCache = myCache.get(point);
  if (restaurantsFromCache) {
    res.send(restaurantsFromCache);
  } else {
    const params = generateSearchParams({
      point,
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
      myCache.set(point, data, cacheTimeOut);
      adminData.addSearch(point);
      res.send(data);
    } catch (err) {
      res.send(err);
    }
  }
};

exports.getSetCacheTimeOut = (req, res, next) => {
  const { nextCacheTimeOut } = req.query;
  if (isNaN(nextCacheTimeOut)) {
    res.status(400).send("Bad Request");
  } else {
    cacheTimeOut = nextCacheTimeOut;
    res.status(200).send(`Cache timeout updated to: ${cacheTimeOut}`);
  }
};
