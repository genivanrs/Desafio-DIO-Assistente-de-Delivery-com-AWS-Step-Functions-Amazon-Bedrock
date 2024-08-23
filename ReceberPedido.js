exports.handler = async (event) => {
    // Processar a recepção do pedido
    const orderId = event.orderId;
    console.log(`Pedido recebido: ${orderId}`);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Pedido recebido com sucesso',
            orderId: orderId
        }),
    };
};
