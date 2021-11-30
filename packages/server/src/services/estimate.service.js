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

exports.getTransportEstimation = (data, tripDistance) => {
  let transportCost = null;

  if(data.byCar) {
    const numCars = Math.ceil(data.numPeople / 5);
  
    const gasAmountLt = (tripDistance / data.fuelConsumption) * numCars;
    const gasTotalPrice = (gasAmountLt * data.fuelPrice) / data.numPeople;
    
    transportCost = {
      numCars: numCars,
      gasAmount: gasAmountLt,
      gasTotalPrice: gasTotalPrice
    };

  }
  if(data.byBusPlane) {
    transportCost = {
      ... transportCost,
      ticketPrice: data.transportTicket,
    };
  }

  return transportCost;

};

exports.getRentEstimation = () => {};
