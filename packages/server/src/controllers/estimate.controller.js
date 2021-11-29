const estimateService = require('../services/estimate.services');
const utils = require('../utils/utils');

exports.generate = async (req, res, next) => {
  try {

    const tripData = await estimateService.getTripEstimation(utils.makeTripObject(req.body));
    const transportData = await estimateService.getTransportEstimation(utils.makeTransportObject(req.body));
    const rentData = await estimateService.getRentEstimation(utils.makeRentObject(req.body));

  } catch (err) {
    next(err);
  }
};
