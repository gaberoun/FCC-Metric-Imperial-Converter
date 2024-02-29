'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.route('/api/convert').get((req, res) => {
    //split input
    let input = req.query.input;
    let initNum =  convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);

    //test units
    if (initUnit == "invalid unit" && initNum == "invalid number") {
      return res.send("invalid number and unit");
    } else if (initUnit == "invalid unit") {
      return res.send("invalid unit");
    } else if (initNum == "invalid number") {
      return res.send("invalid number");
    } else {

      //convert
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      //output
      res.json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string
      });
    }

  });
};
