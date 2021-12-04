const estimateService = require('../services/estimate.service');
const utils = require('../utils/utils');

exports.generate = async (req, res, next) => {
  try {

    const generalData = utils.makeGeneralInfoObject(req.body);
    const tripDistance = await estimateService.getTripDistance(utils.makeTripObject(req.body));
    const transportData = estimateService.getTransportEstimation(utils.makeTransportObject(req.body), tripDistance);
    const rentData = estimateService.getRentEstimation(utils.makeRentObject(req.body));

    const response = {
      status: 200,
      ... generalData,
      ... tripDistance,
      ... transportData,
      ... rentData,
    };

    res.status(200).json(response);

  } catch (err) {
    next(err);
  }
};
