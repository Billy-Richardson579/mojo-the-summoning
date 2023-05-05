// create your User model here
const {db,DataTypes,Model} = require('../db/connection')

class User extends Model {}


User.init({

},
{sequelize: db})

module.exports = User;