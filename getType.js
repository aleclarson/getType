
var PureObject = require('PureObject');
var Void = require('Void');
var Null = require('Null');
var Nan = require('Nan');

function getType(value) {
  return value === void 0 ? Void :
    value === null ? Null :
    PureObject.test(value) ? PureObject :
    Nan.test(value) ? Nan :
    value.constructor;
}

module.exports = getType;
