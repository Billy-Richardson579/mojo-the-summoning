const User = require('./User')
const Deck = require("./Deck")
const Card = require("./Card")
const Attack = require('./Attack')

// import the rest of your models above

//set up the associations here
User.hasOne(Deck)
Deck.belongsTo(User)

Deck.hasMany(Card)
Card.belongsTo(Deck)

Card.belongsToMany(Attack, {through: "post-tags"});
Attack.belongsToMany(Card, {through: "post-tags"});
 

// and then export them all below
module.exports = { 
    User,
    Card,
    Deck,
    Attack 
}
