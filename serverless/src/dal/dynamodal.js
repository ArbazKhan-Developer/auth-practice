const AWS = require('aws-sdk')
AWS.config.update({region: 'us-east-1'});
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
const tableName = process.env.TABLE_NAME

module.exports.insertData = async (body)=>{

    try {
        console.log(`tableName: ${JSON.stringify(tableName)}`);
        const params = {
            TableName: tableName,
            Item: body
          };
          docClient.put(params, function(err, data) {
            if (err) {
              console.log("Error", err);
            } else {
              console.log("Success", data);
              return 'data inserted successfullt'
            }
          });
    } catch (error) {
        console.log(error);
    }


}