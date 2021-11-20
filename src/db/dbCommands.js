const editJsonFile = require("edit-json-file");
const db = require('./db.json');
let file = editJsonFile(`${__dirname}/db.json`);

const changeInDB = (
  id,
  name, 
  cpf, 
  birthDate,
  email
) => {
  let users = file.get('users') || [];
  users.forEach(user => {
    if (user.id == id) {
      user.name = name;
      user.cpf = cpf;
      user.birthDate = birthDate;
      user.email = email
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

const searchInDB = (id) => {
  const users = file.get('users') || [];
  const user = users.filter(user => user.id == id);
  if (Array.isArray(user) && user.length > 0) return user[0];
  return user;
}

const searchByEmail = (email) => {
  const users = file.get('users') || [];
  const user = users.filter(user => user.email == email);
  if (Array.isArray(user) && user.length > 0) return user[0];
  return user;
}

module.exports = {
  changeInDB,
  deleteInDB,
  searchInDB,
  searchByEmail,
}