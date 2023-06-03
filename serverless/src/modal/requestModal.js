const dynamoDal = require('../dal/dynamodal');

module.exports.requestModal = async (request)=>{
    console.log('fetching body');
    const body = request.body
    console.log(body);
    const res = await dynamoDal.insertData(body)
    return res


}