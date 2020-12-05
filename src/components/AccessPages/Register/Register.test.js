import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import Register from './Register';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Register', () => {
  test('Renders and Tests Register Component', () => {
    const { getByTestId } = render(<Register />);
    // Checks if a certain text is found to know if it rendered
    expect(screen.getByText('Create Your Account')).toBeInTheDocument();
    // Checks that there is no errors to start with
    expect(getByTestId('errors')).toHaveTextContent('');
    // Click Button to Register
    fireEvent.click(getByTestId('Register'));
    // Checks the errors to confirm
    expect(getByTestId('errors')).toHaveTextContent('Please Enter a Username Please Enter an Email Please Enter a Password or Check Password Fields');
    // Added Username in Field
    fireEvent.change(getByTestId('username'), { target: { value: 'Test' } })
    expect(getByTestId('username').value).toBe('Test') 
    fireEvent.click(getByTestId('Register'));
    expect(getByTestId('errors')).toHaveTextContent('Please Enter an Email Please Enter a Password or Check Password Fields');
    // Added Email in Field
    fireEvent.change(getByTestId('email'), { target: { value: 'Test@gmail.com' } })
    expect(getByTestId('email').value).toBe('Test@gmail.com') 
    fireEvent.click(getByTestId('Register'));
    expect(getByTestId('errors')).toHaveTextContent('Please Enter a Password or Check Password Fields');
    // Added Unmatching Password in Field
    fireEvent.change(getByTestId('password'), { target: { value: '123' } })
    fireEvent.change(getByTestId('password2'), { target: { value: '456' } })
    expect(getByTestId('password').value).toBe('123') 
    expect(getByTestId('password2').value).toBe('456') 
    fireEvent.click(getByTestId('Register'));
    expect(getByTestId('errors')).toHaveTextContent('Your Password and Confirmation Password Do Not Match');
    // Changed to Matching Password in Field
    fireEvent.change(getByTestId('password2'), { target: { value: '123' } })
    expect(getByTestId('password2').value).toBe('123') 
    fireEvent.click(getByTestId('Register'));
    expect(getByTestId('errors')).toHaveTextContent('');
  });
});