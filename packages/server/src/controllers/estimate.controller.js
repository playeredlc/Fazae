const estimateService = require('../services/estimate.service');
const utils = require('../utils/utils');

exports.generate = async (req, res, next) => {
  try {

    const tripDistance = await estimateService.getTripDistance(utils.makeTripObject(req.body));
    console.log(tripDistance);
    // const transportData = await estimateService.getTransportEstimation(utils.makeTransportObject(req.body));
    // const rentData = await estimateService.getRentEstimation(utils.makeRentObject(req.body));

  } catch (err) {
    next(err);
  }
};
