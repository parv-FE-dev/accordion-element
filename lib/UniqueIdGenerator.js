"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var instanceCount = 1092; //Some number. A constant, can not be random - randomness can cause issues with dom rehydration.

var UniqueIdGenerator = /*#__PURE__*/function () {
  function UniqueIdGenerator(prefix) {
    this.instanceCount = instanceCount++;
    this.cnt = 0;
    this.prefix = prefix || "id_prefix";
  }

  var _proto = UniqueIdGenerator.prototype;

  _proto.newId = function newId() {
    return this.prefix + "_" + this.instanceCount + "_" + this.cnt++;
  };

  return UniqueIdGenerator;
}();

exports["default"] = UniqueIdGenerator;
;
module.exports = exports.default;