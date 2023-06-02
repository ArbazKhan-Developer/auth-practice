'use strict';
// const apiProcess = require('../../../api/src/authApiProcess')
module.exports.hello = async (event) => {
    
  console.log(`event received:: ${JSON.stringify(event)}`);
  console.log('returning the response');

  return {
    statusCode: 200,
    body: 'api processed successfully'
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
