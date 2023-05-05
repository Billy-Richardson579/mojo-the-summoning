const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const User = require('./User')
const {db,DataTypes,Model} = require('../db/config')
const Deck = require('./Deck')


// define in global scope
let user


// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({ username: 'gandalf' })
  

})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('User', () => {
  it('has an id', async () => {
    expect(user).toHaveProperty('id')
  })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
  test('username is created',async()=> {
    
    expect(user.username).toBe('gandalf')
  })
  it('should associate a deck with a user', async () => {
    const user = await User.create({ name: 'Alice' });
    const deck = await Deck.create({ name: 'Deck 1', xp: 1 });

    await user.setDeck(deck);

    const userDeck = await user.getDeck();
    console.log(userDeck)
})
})
