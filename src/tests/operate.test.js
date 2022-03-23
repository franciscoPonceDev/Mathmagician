import operate from '../logic/operate';

it('result of 2 x 2 = 4', () => {
  const operation = 'x';

  const result = operate('2', '2', operation);

  expect(result).toBe('4');
});
