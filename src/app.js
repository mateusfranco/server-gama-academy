const path = require('path')
const customRoutes = require('./routes/customRoutes');

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname + '/db/', 'db.json'))
const middlewares = jsonServer.defaults();
server.use(jsonServer.bodyParser)

server.post('/echo', (req, res) => {
  console.log(req.body);
  res.jsonp(req.body);
});

customRoutes(server);

server.use(middlewares)
server.use(router)

module.exports = { server };