function ExceptionError(error)  {
    return {
        code: 'GENERIC01',
        message: `${error}`
    }
};

module.exports = {
    ExceptionError
}