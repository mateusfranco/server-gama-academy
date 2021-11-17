
const authHelper = require('../helper/loginHelper');

const customMiddlewares = ({
  authMiddleware: (req, res, next) => {
    const { email, token } = req.body;
    const logged = authHelper.isLogged(email,token);
    if (logged) {
      console.log(`[🔐][✅][authMiddleware]->>>${email}`);
      return next();
    }
    console.log(`[🔐][❌][authMiddleware]->>>${email}`);
    res.status(401).json({error:"problema na altenticacao"});
  },
});

module.exports = customMiddlewares;