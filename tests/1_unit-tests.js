const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test("Testing whole number input", () => {
        assert.strictEqual(convertHandler.getNum("2kg"), 2);
    });
    test("Testing decimal number input", () => {
        assert.strictEqual(convertHandler.getNum("2.15kg"), 2.15);
    });
    test("Testing fractional input", () => {
        assert.strictEqual(convertHandler.getNum("1/2kg"), 0.5);
    });
    test("Testing fractional input with a decimal", () => {
        assert.strictEqual(convertHandler.getNum("0.2/0.5kg"), 0.4);
    });
    test("Testing double-fraction error", () => {
        assert.strictEqual(convertHandler.getNum("3/2/3kg"), "invalid number");
    });
    test("Testing no numerical input", () => {
        assert.strictEqual(convertHandler.getNum("kg"), 1);
    });

    test("Testing valid input unit", () => {
        assert.strictEqual(convertHandler.getUnit("2gal"), "gal");
        assert.strictEqual(convertHandler.getUnit("2L"), "L");
        assert.strictEqual(convertHandler.getUnit("2mi"), "mi");
        assert.strictEqual(convertHandler.getUnit("2km"), "km");
        assert.strictEqual(convertHandler.getUnit("2lbs"), "lbs");
        assert.strictEqual(convertHandler.getUnit("2kg"), "kg");
    });

    test("Testing invalid input unit", () => {
        assert.strictEqual(convertHandler.getUnit("2asdf"), "invalid unit");
    });
    test("Testing return unit", () => {
        assert.strictEqual(convertHandler.getReturnUnit("gal"), "L");
        assert.strictEqual(convertHandler.getReturnUnit("L"), "gal");
        assert.strictEqual(convertHandler.getReturnUnit("mi"), "km");
        assert.strictEqual(convertHandler.getReturnUnit("km"), "mi");
        assert.strictEqual(convertHandler.getReturnUnit("lbs"), "kg");
        assert.strictEqual(convertHandler.getReturnUnit("kg"), "lbs");
    });

    test("Testing return spelled-out string unit", () => {
        assert.strictEqual(convertHandler.spellOutUnit("gal"), "gallons");
        assert.strictEqual(convertHandler.spellOutUnit("L"), "liters");
        assert.strictEqual(convertHandler.spellOutUnit("mi"), "miles");
        assert.strictEqual(convertHandler.spellOutUnit("km"), "kilometers");
        assert.strictEqual(convertHandler.spellOutUnit("lbs"), "pounds");
        assert.strictEqual(convertHandler.spellOutUnit("kg"), "kilograms");
    });

    test("Converting gal to L", () => {
        assert.strictEqual(convertHandler.convert(2, "gal"), 7.57082);
    });
    test("Converting L to gal", () => {
        assert.strictEqual(convertHandler.convert(2, "L"), 0.52834);
    });
    test("Converting mi to km", () => {
        assert.strictEqual(convertHandler.convert(2, "mi"), 3.21868);
    });
    test("Converting km to mi", () => {
        assert.strictEqual(convertHandler.convert(2, "km"), 1.24275);
    });
    test("Converting lbs to kg", () => {
        assert.strictEqual(convertHandler.convert(2, "lbs"), 0.90718);
    });
    test("Converting kg to lbs", () => {
        assert.strictEqual(convertHandler.convert(2, "kg"), 4.40925);
    });
});