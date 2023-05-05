const {db,DataTypes,Model} = require('../db/config')

class Card extends Model {}


Card.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING

},
{sequelize: db})

module.exports = Card;