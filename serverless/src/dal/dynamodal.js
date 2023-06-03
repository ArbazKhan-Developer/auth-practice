const AWS = require('aws-sdk')
AWS.config.update({region: 'us-east-1'});
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
const tableName = process.env.TABLE_NAME

module.exports.insertData = async (body)=>{

    try {
        console.log(`tableName: ${JSON.stringify(tableName)}`);
        const params = {
            TableName: tableName,
            Item: JSON.parse(body),
            ReturnValues: 'ALL_OLD'
          };
         console.log(params)
         const res = await docClient.put(params).promise()
         console.log(`data inserted successfully: ${JSON.stringify(res)}`)
        return {
            statusCode: 200,
            message: 'data inserted successfully! Heart eyes'
        }
               
    } catch (error) {
        console.log(`error occourred while inserting data into dynamo`);
        console.log(error);
        throw error
    }


}
