const crypto = require('crypto');
const db = require('../db/db.json');
const loginHelper = require('../helper/loginHelper');
const auth = () => ({
  login: (email, password) => {
    const user = db.users.filter(user => user.email === email && user.password === password);
    const token = crypto.randomBytes(20).toString('hex');
    if (user.length > 0) {
      loginHelper.auth(email, token);
      return {
        email: user.email,
        token
      };
    }
    return { error: 'loginError' }
  }
});
module.exports = auth;