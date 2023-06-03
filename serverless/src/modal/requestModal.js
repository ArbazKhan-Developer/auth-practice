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