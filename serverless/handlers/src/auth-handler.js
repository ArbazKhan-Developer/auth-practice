'use strict';
// const apiProcess = require('../../../api/src/authApiProcess')
module.exports.hello = async (event) => {
    
  return {
      statusCode: 200,
      Message: 'api processed successpully'
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
