import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Login', () => {
  test('Renders and Tests Login Component', () => {
    const { getByTestId } = render(<Router><Login /></Router>);
    // Checks if a certain text is found to know if it rendered
    expect(screen.getByText('Login to Your Marketext Account')).toBeInTheDocument();
    // Checks that there is no errors to start with
    expect(getByTestId('errors')).toHaveTextContent('');
    // Click Button to Login
    fireEvent.click(getByTestId('Login'));
    // Checks the errors to confirm
    expect(getByTestId('errors')).toHaveTextContent('Please Enter an Username Please Enter a Password');
    // Added Username in Field
    fireEvent.change(getByTestId('username'), { target: { value: 'Test' } })
    expect(getByTestId('username').value).toBe('Test') 
    fireEvent.click(getByTestId('Login'));
    expect(getByTestId('errors')).toHaveTextContent('Please Enter a Password');
    // Added Unmatching Password in Field
    fireEvent.change(getByTestId('password'), { target: { value: '123' } })
    expect(getByTestId('password').value).toBe('123') 
    fireEvent.click(getByTestId('Login'));
    expect(getByTestId('errors')).toHaveTextContent('');
  });
});