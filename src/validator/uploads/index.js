const InvariantError = require('../../exceptions/InvariantError');
const {ImageHeadersSchema} = require('./schema');

const UploadsValidator = {
  validateImageHeaders: (payload) => {
    const validationResult = ImageHeadersSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = UploadsValidator;
