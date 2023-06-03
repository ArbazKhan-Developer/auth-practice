const authApi = require('../src/api/authApi')


module.exports.postData = async(event)=>{

    const res = await authApi.processData(event)
    return{
        statusCode: res.statusCode,
        body: res.message
    }
}