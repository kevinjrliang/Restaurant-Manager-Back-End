const UsernameAlreadyExistsError = {
    code: 'USRACCERR01',
    message: 'This username already exists'
};

const FailedToCreateAccountError = {
    code: 'USRACCERR02',
    message: 'Unable to create user'
};

const InvalidUsernameOrPasswordError = {
    code: 'USRACCERR02',
    message: 'Incorrect Password or Username'
};

module.exports = {
    UsernameAlreadyExistsError,
    FailedToCreateAccountError,
    InvalidUsernameOrPasswordError
}