const auth = require('../repository/auth');
const middlewares = require('./middlewares');
const users = require('../repository/users');

const createCustomRoutes = server => {

  server.post('/login', (req, res) => {
    const { email, password } = req.body;
    authRep = auth();
    const userRepository = users();
    const response = authRep.login(email, password);
    const user = userRepository.getUserByEmail(email);

    res.status(200).json({ ...response, ...user });
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
    const { name, cpf, birthDate, email } = req.body;
    const userRepository = users();
    const response = userRepository.changeUser(id, name, cpf, birthDate, email);
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