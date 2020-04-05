function userErrorHandler(ex) {
  if (ex.code === 11000) return { sucess: false, message: 'Email ID is already taken' };
  return { sucess: false, message: 'Something went wrong' };
}

module.exports = userErrorHandler;
