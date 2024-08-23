const AWS = require('aws-sdk');
const bedrock = new AWS.Bedrock();

exports.handler = async (event) => {
    // Solicitar recomendações personalizadas
    const params = {
        InputText: 'Texto de entrada para personalização',
        ModelName: 'nome-do-modelo'
    };
    
    try {
        const response = await bedrock.invokeModel(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(response),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erro ao invocar o modelo Bedrock' }),
        };
    }
};
