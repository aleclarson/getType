
PureObject = require "PureObject"
Void = require "Void"
Null = require "Null"
Nan = require "Nan"

module.exports = (value) ->
  return Void if value is undefined
  return Null if value is null
  return PureObject if PureObject.test value
  return Nan if Nan.test value
  return value.constructor
