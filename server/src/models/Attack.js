const {db,DataTypes,Model} = require('../db/connection')

class Attack extends Model {}


Attack.init({

},
{sequelize: db})

module.exports = Attack;