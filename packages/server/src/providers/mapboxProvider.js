const config = require('../config/config');
const axios = require('axios');

exports.getRouteInfo = async (origin, destination) => {
  try {
    const URL = config.mapbox.getMapboxURL(origin, destination);
    const response = await axios.get(URL);
    
    return response.data;

  } catch(err) {
    return err.message;
  }
};
