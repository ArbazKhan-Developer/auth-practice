'use strict';
const apiProcess = require('../../../api/src/authApiProcess')
module.exports.hello = async (event) => {
    
  return apiProcess.process(event)

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
