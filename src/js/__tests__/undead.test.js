import Undead from '../undead';

test('checking Undead class', () => {
  const ghoul = new Undead('Ghoul');

  expect(ghoul).toEqual({
    name: 'Ghoul',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
