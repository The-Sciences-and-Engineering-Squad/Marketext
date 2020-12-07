import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import ForgotPassword from './ForgotPassword';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('ForgotPassword', () => {
  test('Renders and Tests ForgotPassword Component', () => {
    const { getByTestId } = render(<ForgotPassword />);
    // Checks if a certain text is found to know if it rendered
    expect(screen.getByText('Forgot Password')).toBeInTheDocument();
    // Checks that there is no errors to start with
    expect(getByTestId('errors')).toHaveTextContent('');
    // Click Button to ForgotPassword
    fireEvent.click(getByTestId('ForgotPassword'));
    // Checks the errors to confirm
    expect(getByTestId('errors')).toHaveTextContent('Please Enter an Username');
    // Added Username in Field
    fireEvent.change(getByTestId('username'), { target: { value: 'Test' } })
    expect(getByTestId('username').value).toBe('Test') 
    fireEvent.click(getByTestId('ForgotPassword'));
    expect(getByTestId('errors')).toHaveTextContent('');
  });
});