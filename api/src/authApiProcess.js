class authApiProcess {


    async process(event){
        console.log(`event received: ${JSON.stringify(event)}`);
        return {
            statuCode: 200,
            message: 'api processed successfully'
        }
    }
}


module.exports = new authApiProcess()
