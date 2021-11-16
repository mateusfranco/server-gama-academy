const TOKEN_INTERVAL = 1000 * 60 * 60
const loggedUsers = {};

const loginHelper = (email, token) => {
  loggedUsers[email] = token;
}

const cleanTokens = (email) => {
  setTimeout(() => {
    delete loggedUsers[email];
  }, TOKEN_INTERVAL);
}

const auth = (email, token) => {
  loginHelper(email, token);
  cleanTokens(email);
}

const isLogged = (email) => {
  return !!loggedUsers[email];
}

const showLoggeds = () => {
  setInterval(() => {
    console.log(loggedUsers);
  }, 3000);
}

module.exports = {auth, isLogged}
