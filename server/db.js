const knex = require("knex");

const envr = process.env.NODE_ENV || "development";
const myDb = knex(require('../knexfile')[envr]);

const getData = (db = myDb) => {
  return db('data')
    .select()
}

const addData = (data, db = myDb) => {
  return db('data')
    .insert(data)
}

module.exports = {
  getData,
  addData
}