const auth = require('../repository/auth');
const middlewares = require('./middlewares');

const createCustomRoutes = server => {

  server.post('/login', (req, res) => {
    const { email, password } = req.body;
    authRep = auth();
    const response = authRep.login(email, password);
    res.jsonp(response);
  });

  server.post('/test', [
    middlewares.authMiddleware
  ], (req, res) => {
    console.log("chegou aqui");
    res.jsonp({ test: "funcionando" });
  });

}

module.exports = createCustomRoutes;