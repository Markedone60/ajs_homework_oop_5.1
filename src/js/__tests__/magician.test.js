import Magician from '../magician';

test('checking Magician class', () => {
  const mag = new Magician('Mags');

  expect(mag).toEqual({
    name: 'Mags',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
