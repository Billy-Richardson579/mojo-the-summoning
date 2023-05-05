const {db,DataTypes,Model} = require('../db/connection')

class Card extends Model {}


Card.init({

},
{sequelize: db})

module.exports = Card;