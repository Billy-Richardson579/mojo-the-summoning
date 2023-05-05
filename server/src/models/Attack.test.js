const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const Attack = require('./Attack')
const {db,DataTypes,Model} = require('../db/config')

// define in global scope
let attack

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  attack = await Attack.create({ title: 'Basic Punch', mojoCost: 5, staminaCost: 5})
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Attack', () => {
  it('has an id', async () => {
    expect(attack).toHaveProperty('id')
  })

  test('Card is created correctly',async()=> {
    
    expect(attack.title).toBe('Basic Punch')&& expect(attack.mojoCost).toBe(5)&&expect(attack.staminaCost).toBe(5)
  })

  test('Card properties are the correct type',async()=>{
    expect(typeof attack.title).toBe('string')&&expect(typeof attack.mojoCost).toBe('number')&&expect(typeof attack.staminaCost).toBe('number')
  })
})