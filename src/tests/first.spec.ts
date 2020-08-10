import User from '@models/User';

test('it should be ok', () => {
  const user = new User();
  
  user.name = 'Eu',
  user.email = 'eu@me.co',

  expect(user.name).toBe('Eu');
});