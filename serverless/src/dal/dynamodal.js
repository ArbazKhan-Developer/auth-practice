const AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
const tableName = process.env.TABLE_NAME

module.exports.insertData = async (body) => {

    try {
        console.log(`tableName: ${JSON.stringify(tableName)}`);
        const params = {
            TableName: tableName,
            Item: JSON.parse(body)
        };
        console.log(params)
        const res = await docClient.put(params).promise()
        console.log(`data inserted successfully: ${JSON.stringify(res)}`)
        return 'data inserted successfully! Heart eyes'

    } catch (error) {
        console.log(`error occourred while inserting data into dynamo`);
        console.log(error);
        throw error
    }


}

module.exports.getItem = async (body) => {

    try {
        console.log(body)
        const params = {
            TableName: tableName,
            Key: JSON.parse(JSON.stringify(body))
        };
        console.log(params)
        const res = await docClient.get(params).promise()
        console.log(`data inserted successfully: ${JSON.stringify(res)}`)
        return 'data fetched successfully! Heart eyes'

    } catch (error) {
        console.log(error);
    }


}
