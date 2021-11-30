const mapboxProvider = require('../providers/mapboxProvider');

exports.getTripDistance = async (data) => {
  try {
    const mapboxResponse = await mapboxProvider.getRouteInfo(data.origin.coord, data.destination.coord);
    const kmDistance = mapboxResponse.trips[0].distance / 1000;

    return Math.round(kmDistance);
    
  } catch (err) {
    return err.message;
  }
};

exports.getTransportEstimation = () => {};
exports.getRentEstimation = () => {};
