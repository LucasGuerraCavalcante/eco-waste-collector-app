import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'Lamps', image: 'lamps.svg' },
        { title: 'Batteries', image: 'batteries.svg' },
        { title: 'Papers and Cardboards', image: 'paper.svg' },
        { title: 'Electronics', image: 'electronic.svg' },
        { title: 'Organics', image: 'organic.svg' },
        { title: 'Cooking Oils', image: 'oil.svg' },
    ])
}