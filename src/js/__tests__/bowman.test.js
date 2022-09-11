import Bowman from '../bowman';

test('checking Bowman class', () => {
  const newBowman = new Bowman('NewBowman');

  expect(newBowman).toEqual({
    name: 'NewBowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
