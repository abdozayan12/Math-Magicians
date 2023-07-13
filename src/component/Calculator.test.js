import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator component', () => {
  const { getByText, getByTestId } = render(<Calculator />);

  const firstNumber = getByText('4');
  const secondNumber = getByText('2');

  const oprMultiply = getByText('x');
  const oprDivide = getByText('÷');
  const oprSubstract = getByText('-');
  const equal = getByText('=');

  const clear = getByText('AC');

  const resultScreen = getByTestId('result-screen');
  it('will do operation and show result', () => {
    fireEvent.click(clear);
    fireEvent.click(firstNumber);
    fireEvent.click(oprDivide);
    fireEvent.click(secondNumber);
    fireEvent.click(equal);
    expect(resultScreen).toHaveTextContent('2');
    fireEvent.click(clear);
    fireEvent.click(firstNumber);
    fireEvent.click(oprSubstract);
    fireEvent.click(secondNumber);
    fireEvent.click(equal);
    expect(resultScreen).toHaveTextContent('2');
    fireEvent.click(clear);
    fireEvent.click(firstNumber);
    fireEvent.click(oprMultiply);
    fireEvent.click(secondNumber);
    fireEvent.click(equal);
    expect(resultScreen).toHaveTextContent('8');
  });
});
