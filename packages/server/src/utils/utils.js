exports.makeTripObject = (data) => {
  const { origin, destination, numDays, numPeople } = data;
  const tripObject = { 
    origin: origin, 
    destination: destination, 
    numDays: numDays,
    numPeople: numPeople,
  };

  return tripObject;
};

exports.makeTransportObject = (data) => {
  const {byCar, byBusPlane, fuelPrice, fuelConsumption, transportTicket, numPeople } = data;
  const transportObject = {
    byCar: byCar,
    byBusPlane: byBusPlane,
    fuelPrice: fuelPrice,
    fuelConsumption: fuelConsumption,
    transportTicket: transportTicket,
    numPeople: numPeople,
  };

  return transportObject;
};

exports.makeRentObject = (data) => {  
  const { houseCharge, extraCharge, breakfastCost, lunchCost, dinnerCost, extraEatingCost, numDays, numPeople } = data;
  const rentData = {
    houseCharge: houseCharge,
    extraCharge: extraCharge,
    breakfastCost: breakfastCost,
    lunchCost: lunchCost,
    dinnerCost: dinnerCost,
    extraEatingCost: extraEatingCost,
    numDays: numDays,
    numPeople: numPeople,
  };

  return rentData;
};
