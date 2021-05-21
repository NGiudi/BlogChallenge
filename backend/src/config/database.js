const Sequilize = require ('sequelize');

const DB = require ('./config.json').database;

const postModel = require ('../models/posts_model');

const sequilize = new Sequilize (DB.db, DB.user, DB.password, {               //Database - Username - Password.
  host: DB.host,
  dialect: 'mysql'
});

const Posts = postModel (sequilize, Sequilize);

sequilize.sync ({force: false})
  .then( () => {
    console.log ('Sincronizated table!');
  });

module.exports = { Posts };