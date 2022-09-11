import Zombie from '../zombie';

test('checking Zombie class', () => {
  const brains = new Zombie('brains');

  expect(brains).toEqual({
    name: 'brains',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
