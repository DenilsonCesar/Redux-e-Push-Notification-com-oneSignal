export const emailActions = (texto) => {
    return {
        type : 'envia_email',
        payload: texto
    }
}