import calculate from '../logic/calculate';

describe('Calculate fuction', () => {
  it('should be null when AC is passed as parameter', () => {
    const obj = { total: null, next: null, operation: null };
    const buttonName = 'AC';
  
    const solution = calculate(obj, buttonName);
  
    expect(solution).toEqual({ total: null, next: null, operation: null });
  });
});


