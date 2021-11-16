const editJsonFile = require("edit-json-file");
const db = require('./db.json');
let file = editJsonFile(`${__dirname}/db.json`);

// const addInDB = (
//   name,
//   cpf,
//   birthDate,
//   email,
//   password,
// ) => {
//   let users = file.get('users') || [];
//   let id = users.length > 0 ? users[users.length - 1] : 1;
//   users.push({
//     name,
//     cpf,
//     birthDate,
//     email,
//     password,
//     id
//   });
//   file.set('users', users);
//   file.save();
// }

const changeInDB = (
  id,
  name, 
  cpf, 
  birthDate,
) => {
  let users = file.get('users') || [];
  users.forEach(user => {
    if (user.id === id) {
      user.name = name;
      user.cpf = cpf;
      user.birthDate = birthDate;
    }
  });
  file.set('users', users);
  file.save();
}

const deleteInDB = (id) => {
  let users = file.get('users') || [];
  const userIndex = users.findIndex(user => user.id === id);
  users.splice(userIndex, userIndex + 1);
  file.set('users', users);
  file.save();
}

module.exports = {
  addInDB,
  changeInDB,
  deleteInDB
}