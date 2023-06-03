class authApi{
   static async authProcess(event){
    console.log(`event received:: ${JSON.stringify(event)}`);
    let apiKey = '52c7edad36ff27f9b0f5f7932ffe0af8'



    if (event.headers['x-api-key'] && event.headers['x-api-key'] == apiKey) {
        console.log('authenticating api key');
        return{
            statusCode: 200,
            message: 'authorized access, returnong response !'
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