const dbCommands = require('../db/dbCommands');

const userRepository = () => ({
  changeUser: (id, name, cpf, birthDate, email) => {
    const user = dbCommands.searchInDB(id);
    if (!user) return { error: "user doesnt exists" };
    dbCommands.changeInDB(id, name, cpf, birthDate, email);
    return ({
      id,
      name,
      cpf,
      birthDate,
      email,
    })
  },

  deleteUser: (id) => {
    const user = dbCommands.searchInDB(id);
    if (!user) return { error: "user doesnt exists" };
    dbCommands.deleteInDB(id);
    return ({
      id: user.id,
      name: user.name,
      cpf: user.cpf,
      birthDate: user.birthDate,
      email: user.email
    });
  },

  getUser: (id) => {
    const user = dbCommands.searchInDB(id);
    if (!user) return { error: "user doesnt exists" };
    return ({
      id: user.id,
      name: user.name,
      cpf: user.cpf,
      birthDate: user.birthDate,
      email: user.email,
    });
  }

});

module.exports = userRepository;