'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'v1.0',
        // input: event,
      },
      null,
      2
    ),
  };
};


module.exports.imageresize = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'resized your image',
        // input: event,
      },
      null,
      2
    ),
  };
}
