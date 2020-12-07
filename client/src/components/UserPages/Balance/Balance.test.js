import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Balance from './Balance';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Balance', () => {
  test('Renders and Tests Balance Component', () => {
    const { getByTestId } = render(<Router><Balance /></Router>);
    // Checks if a certain text is found to know if it rendered
    expect(getByTestId('text')).toBeInTheDocument();
    // Checks that there is no errors to start with
    expect(getByTestId('errors')).toHaveTextContent('');
    // Click Button to Add
    fireEvent.click(getByTestId('add'));
    // Checks the errors to confirm
    expect(getByTestId('errors')).toHaveTextContent('');
    // Click Button to Add
    fireEvent.click(getByTestId('subtract'));
    // Checks the errors to confirm
    expect(getByTestId('errors')).toHaveTextContent('');
    // Added addValue in Field
    fireEvent.change(getByTestId('addValue'), { target: { value: '-1' } })
    expect(getByTestId('addValue').value).toBe('-1') 
    fireEvent.click(getByTestId('add'));
    expect(getByTestId('errors')).toHaveTextContent('$-1 Is A Negative Balance. Please Enter A Correct Amount To Add!');
    // Added subtractValue in Field
    fireEvent.change(getByTestId('subtractValue'), { target: { value: '-1' } })
    expect(getByTestId('subtractValue').value).toBe('-1') 
    fireEvent.click(getByTestId('subtract'));
    expect(getByTestId('errors')).toHaveTextContent('$-1 Is A Negative Deposit. Please Enter A Correct Amount To Deposit!');
    // Changed to Incorrect subtractValue in Field
    fireEvent.change(getByTestId('subtractValue'), { target: { value: '10' } })
    expect(getByTestId('subtractValue').value).toBe('10') 
    fireEvent.click(getByTestId('subtract'));
    expect(getByTestId('errors')).toHaveTextContent('NaN After This Deposit, Which Is Not Possible. Please Enter An Appropriate Amount To Deposit!');
    // Changed to Correct addValue in Field
    fireEvent.change(getByTestId('addValue'), { target: { value: '100' } })
    expect(getByTestId('addValue').value).toBe('100') 
    fireEvent.click(getByTestId('add'));
    expect(getByTestId('errors')).toHaveTextContent('');
    // Changed to Incorrect subtractValue in Field
    fireEvent.change(getByTestId('subtractValue'), { target: { value: '0' } })
    expect(getByTestId('subtractValue').value).toBe('0') 
    fireEvent.click(getByTestId('subtract'));
    expect(getByTestId('errors')).toHaveTextContent('');
  });
});