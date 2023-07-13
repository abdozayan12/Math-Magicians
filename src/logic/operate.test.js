import operate from './operate';

const firstNumber = 4;
const secondNumber = 2;

describe('operate for', () => {
  it('+ will added two number and convert to string', () => {
    const result = operate(firstNumber, secondNumber, '+');
    expect(result).toBe('6');
  });
  it('- will substract two number and convert to string', () => {
    const result = operate(firstNumber, secondNumber, '-');
    expect(result).toBe('2');
  });
  it('x will multiply two number and convert to string', () => {
    const result = operate(firstNumber, secondNumber, 'x');
    expect(result).toBe('8');
  });
  it('÷ will divide two number and convert to string', () => {
    const result = operate(firstNumber, secondNumber, '÷');
    expect(result).toBe('2');
  });
});
