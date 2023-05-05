const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const Card = require('./Card')
const {db,DataTypes,Model} = require('../db/config')

// define in global scope
let card

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create({ name: 'Bulk Brogan', mojo: 30, stamina: 25, imageUrl: "https://img"})
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
  it('has an id', async () => {
    expect(card).toHaveProperty('id')
  })

  test('Card is created correctly',async()=> {
    
    expect(card.name).toBe('Bulk Brogan')&& expect(card.mojo).toBe(30)&&expect(card.stamina).toBe(25)&&expect(card.imageUrl).toBe('https://img')
  })

  test('Card properties are the correct type',async()=>{
    expect(typeof card.name).toBe('string')&&expect(typeof card.mojo).toBe('number')&&expect(typeof card.imageUrl).toBe('string') && expect(typeof card.stamina).toBe('number')
  })
})