require('dotenv').config();

let config = {};

config.mapbox = {
  getMapboxURL: (origin, destination) => {
    return `https://api.mapbox.com/optimized-trips/v1/mapbox/driving/${origin.lon},${origin.lat};${destination.lon},${destination.lat}?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`;
  }
};

module.exports = config;
