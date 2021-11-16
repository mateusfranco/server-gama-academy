
const authHelper = require('../helper/loginHelper');

const customMiddlewares = ({
  authMiddleware: (req, res, next) => {
    const { email, token } = req.body;
    const logged = authHelper.isLogged(email);
    if (logged) {
      console.log(`[🔐][✔️][authMiddleware]->>>${email}`);
      return next();
    }
    console.log(`[🔐][✖️][authMiddleware]->>>${email}`);
    res.jsonp({error:"problema na altenticacao"}).status(401);
  },
});

module.exports = customMiddlewares;

