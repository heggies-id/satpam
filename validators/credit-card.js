'use strict';

var stringValidator = require('validator');

exports = module.exports = {
  validator: function (val) {
    if (val) {
      return stringValidator.isCreditCard(val);
    }

    return true;
  },
  message: '<%= propertyName %> is not a valid credit card number.'
};

