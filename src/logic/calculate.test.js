import calculate from './calculate';

let object;

beforeEach(() => {
  object = {
    total: null,
    next: null,
    operation: null,
  };
});

describe('calculate for', () => {
  it('number will change the next properties', () => {
    object = calculate(object, '1');
    object = calculate(object, '0');
    expect(object.next).toBe('10');
  });
  it('operation will change the operation properties', () => {
    object = calculate(object, '+');
    expect(object.operation).toBe('+');
  });
  it('= will change the total properties', () => {
    object = calculate(object, '4');
    object = calculate(object, 'x');
    object = calculate(object, '2');
    object = calculate(object, '=');
    expect(object.total).toBe('8');
  });
});
