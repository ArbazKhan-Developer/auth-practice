'use strict';
const apiProcess = require('../src/api/authApi')
module.exports.auth = async (event) => {
    
  console.log(`event received:: ${JSON.stringify(event)}`);
  console.log('returning the response');
  const res = await apiProcess.authProcess(event)

  return {
    statusCode: res.statusCode,
    body: res.message
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
