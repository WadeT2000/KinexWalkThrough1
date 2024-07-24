/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'Bird Seed', description: 'Seeds for Birds'},
    {id: 2, name: 'Fish Bits', description: 'Fish meat for Vats'},
    {id: 3, name: 'Puppy Chow', description: 'Puppy mix for Dogs'},
    {id: 4, name: 'Fish Pellets', description: 'Pellets for Fish'}
  ]);
};
