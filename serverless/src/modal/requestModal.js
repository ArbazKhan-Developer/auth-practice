const dynamoDal = require('../dal/dynamodal');

module.exports.requestModal = async (request) => {
    try {
        console.log('fetching body');
        const body = request.body
        console.log(body);
        const res = await dynamoDal.insertData(body);
        console.log(`response received:: ${res}`);
        return res;
    } catch (error) {
        console.log(`error occourred in modeling:: ${error}`);
    }


}

module.exports.requestGetModal = async (request) => {


    const queryStr = request.queryStringParameters
    const res = await dynamoDal.getItem(queryStr)
    console.log(res);
    return res

}