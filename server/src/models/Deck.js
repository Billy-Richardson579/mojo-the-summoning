const {db,DataTypes,Model} = require('../db/connection')

class Deck extends Model {}


Deck.init({

},
{sequelize: db})

module.exports = Deck;