import Swordsman from '../swordsman';

test('checking Swordsman class', () => {
  const warrior = new Swordsman('warrior');

  expect(warrior).toEqual({
    name: 'warrior',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
