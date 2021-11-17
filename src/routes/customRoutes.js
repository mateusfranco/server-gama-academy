const auth = require('../repository/auth');
const middlewares = require('./middlewares');
const users = require('../repository/users');

const createCustomRoutes = server => {

  server.post('/login', (req, res) => {
    const { email, password } = req.body;
    authRep = auth();
    const response = authRep.login(email, password);
    res.status(200).json(response);
  });

  server.get('/users', [
    middlewares.authMiddleware
  ], (req, res) => {
    const { id } = req.query;
    const userRepository = users();
    const response = userRepository.getUser(id);
    res.status(200).json(response);
  });

  server.put('/users', [
    middlewares.authMiddleware
  ], (req, res) => {
    const { id } = req.query;
    const { name, cpf, birthDate } = req.body;
    const userRepository = users();
    const response = userRepository.changeUser(id, name, cpf, birthDate);
    res.status(200).json({ user: response });
  });

  server.delete('./users', [
    middlewares.authMiddleware
  ], (req, res) => {
    const { id } = req.query;
    const userRepository = users();
    const response = userRepository.deleteUser(id);
    res.satus(200).json({ user: response });
  });
}

module.exports = createCustomRoutes;