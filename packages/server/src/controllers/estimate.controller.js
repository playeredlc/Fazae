const estimateService = require('../services/estimate.service');
const utils = require('../utils/utils');

exports.generate = async (req, res, next) => {
  try {

    const tripDistance = await estimateService.getTripDistance(utils.makeTripObject(req.body));
    
    const transportData = estimateService.getTransportEstimation(utils.makeTransportObject(req.body), tripDistance);
    console.log(transportData);
    const rentData = estimateService.getRentEstimation(utils.makeRentObject(req.body));
    console.log(rentData);

  } catch (err) {
    next(err);
  }
};
