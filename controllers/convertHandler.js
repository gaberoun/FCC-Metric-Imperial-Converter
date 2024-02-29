function FractionHandler(input) {
  let numStorage = input.split("/");
  if (numStorage.length != 2) {
    return undefined;
  } else {
    return parseFloat(numStorage[0]) / parseFloat(numStorage[1]); 
  }
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let index = input.search(/[a-z]/i);

    if (index == -1) {
      result = parseFloat(input);
    } else if (input.includes("/")) {
      result = FractionHandler(input.substring(0, index));
    } else {
      result =  parseFloat(input.substring(0, index));
      if (!result) {
        result = 1;
      }
    }

    if (!result) {
      return "invalid number"
    }
    return result;
  };
  
  this.getUnit = function(input) {
    let index = input.search(/[a-z]/i);
    let result = input.substring(index).toLowerCase();

    switch (result) {
      case "gal":
        return "gal";
      case "l":
        return "L";
      case "mi":
        return "mi";
      case "km":
        return "km";
      case "lbs":
        return "lbs";
      case "kg":
        return "kg";
      default:
        return "invalid unit";
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    switch (initUnit) {
      case "gal":
        return "L";
      case "L":
        return "gal";
      case "mi":
        return "km";
      case "km":
        return "mi";
      case "lbs":
        return "kg";
      case "kg":
        return "lbs";
      default:
        return undefined;
    }
  };

  this.spellOutUnit = function(unit) {
    switch (unit) {
      case "gal":
        return "gallons";
      case "L":
        return "liters";
      case "mi":
        return "miles";
      case "km":
        return "kilometers";
      case "lbs":
        return "pounds";
      case "kg":
        return "kilograms";
      default:
        return undefined;
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break
      case "L":
        result = initNum / galToL;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      default:
        result = undefined;
    }
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
  };
  
}

module.exports = ConvertHandler;
