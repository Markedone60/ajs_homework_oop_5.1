import Character from '../character';

test('testing Character class', () => {
  const testChar = new Character('testChar', 'Swordsman', 20, 20);
  expect(testChar).toEqual({
    name: 'testChar',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 20,
    defence: 20,
  });
});
