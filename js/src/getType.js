var Nan, Null, PureObject, Void;

PureObject = require("PureObject");

Void = require("Void");

Null = require("Null");

Nan = require("Nan");

module.exports = function(value) {
  if (value === void 0) {
    return Void;
  }
  if (value === null) {
    return Null;
  }
  if (PureObject.test(value)) {
    return PureObject;
  }
  if (Nan.test(value)) {
    return Nan;
  }
  return value.constructor;
};

//# sourceMappingURL=../../map/src/getType.map
