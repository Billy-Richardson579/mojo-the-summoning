const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const Deck = require('./Deck')
const {db,DataTypes,Model} = require('../db/config')

// define in global scope
let deck

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ name: 'gandalfs-deck', xp: 100})
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Deck', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })

  test('Deck is created correctly',async()=> {
    
    expect(deck.name).toBe('gandalfs-deck')&& expect(deck.xp).toBe(100)
  })
  test('Deck properties are the correct type',async()=>{
    expect(typeof deck.name).toBe('string')&&expect(typeof deck.xp).toBe('number')
  })
})