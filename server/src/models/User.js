// create your User model here
const {db,DataTypes,Model} = require('../db/config')

class User extends Model {}


User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: DataTypes.STRING
},
{sequelize: db})

module.exports = User;