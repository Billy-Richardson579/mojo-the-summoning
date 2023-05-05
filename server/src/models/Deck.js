const {db,DataTypes,Model} = require('../db/config')

class Deck extends Model {}


Deck.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER

},
{sequelize: db})

module.exports = Deck;