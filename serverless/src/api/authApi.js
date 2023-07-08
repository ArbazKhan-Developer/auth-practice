const requestModal = require('../modal/requestModal')


class authApi{
   static async authProcess(event){
    
    const apiKey = '52c7edad36ff27f9b0f5f7932ffe0af8'
    if (event.headers['x-api-key'] && event.headers['x-api-key'] == apiKey) {
        console.log('authenticating api key');
        const res = await requestModal.requestGetModal(event)
        return{
            statusCode: 200,
            message: res
        }
        
    }else{
        return{
            statusCode: 400,
            message: 'unauthorized access!'
        }
    }
    }


    static async processData(event){
        const apiKey = '52c7edad36ff27f9b0f5f7932ffe0af8'
    
        if (event.headers['x-api-key'] && event.headers['x-api-key'] == apiKey) {
            console.log('authenticating api key');
            const res = await requestModal.requestModal(event)
            console.log(`response received in authapi:: ${res}`);
            return{
                statusCode: 200,
                message: res
            }
            
        }else{
            return{
                statusCode: 400,
                message: 'unauthorized access!'
            }
        }
    }
}

module.exports = authApi