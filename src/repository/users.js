const dbCommands = require('../db/dbCommands');

const userRepository = () => ({
  changeUser: (id, name, cpf, birthDate) => {
    const user = dbCommands.searchInDB(id);
    if (!user) return { error: "user doesnt exists" };
    dbCommands.changeInDB(id, name, cpf, birthDate);
    return ({
      id,
      name,
      cpf,
      birthDate,
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
    });
  }

});

module.exports = userRepository;