const crypto = require("crypto");
const db = require('../db/db.json');
const loginHelper = require('../helper/loginHelper');

const auth = () => ({
  login: (email, password) => {
    const user = db.users.filter(user => user.email === email && user.password === password);
    if (user.length > 0) {
      loginHelper.auth(email, password);
      return {
        email: user.email,
        token: crypto.randomBytes(20).toString('hex')
      };
    }
    return { error: "loginError" }
  }
});

module.exports = auth;