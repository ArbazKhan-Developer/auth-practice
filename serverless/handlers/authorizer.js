"use strict";
// const apiProcess = require('../src/api/authApi')
module.exports.auth = async (event) => {
  console.log(`event received:: ${JSON.stringify(event)}`);
  console.log(`methodArn: ${event.methodArn}`);
  if (event.headers["my-token"]) {
    const token = process.env.TOKEN;
    console.log(`token: ${token}`);
    const myToken = event.headers["my-token"];

    if (token === myToken) {
      return await callResponseFunction("my-auth-api", "Allow", event.methodArn);
    } else {
      return await callResponseFunction("my-auth-api", "Deny", event.methodArn);
    }
  } else {
    return {
      statusCode: 400,
      body: "unAuthorized access",
    };
  }
};

async function callResponseFunction(principalId, effect, resource) {
  return {
    principalId: principalId,
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: effect,
          Resource: resource,
        },
      ],
    },
  };
}
