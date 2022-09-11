import Daemon from '../daemon';

test('checking Daemon class', () => {
  const newDaemon = new Daemon('newDaemon');

  expect(newDaemon).toEqual({
    name: 'newDaemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
