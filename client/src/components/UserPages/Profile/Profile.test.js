import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Profile from './Profile';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Profile', () => {
  test('Renders and Tests Profile Component', () => {
    const { getByTestId } = render(<Router><Profile /></Router>);
    // Checks if a certain text is found to know if it rendered
    expect(getByTestId('text')).toBeInTheDocument();
    // Checks that there is no errors to start with
    expect(getByTestId('errors')).toHaveTextContent('');
    // Click Button to Save
    fireEvent.click(getByTestId('save'));
    // Checks the errors to confirm
    expect(getByTestId('errors')).toHaveTextContent('Please Enter Current Password to Make Any Changes');
    // Added Password in Field
    fireEvent.change(getByTestId('password'), { target: { value: '123' } })
    expect(getByTestId('password').value).toBe('123') 
    fireEvent.click(getByTestId('save'));
    expect(getByTestId('errors')).toHaveTextContent('');
    // Added newPassword in Field
    fireEvent.change(getByTestId('newPassword'), { target: { value: '123' } })
    expect(getByTestId('newPassword').value).toBe('123') 
    fireEvent.click(getByTestId('save'));
    expect(getByTestId('errors')).toHaveTextContent('The New Passwords Do Not Match');
    // Added Incorrect Confirm newPassword in Field
    fireEvent.change(getByTestId('newPassword2'), { target: { value: '456' } })
    expect(getByTestId('newPassword2').value).toBe('456') 
    fireEvent.click(getByTestId('save'));
    expect(getByTestId('errors')).toHaveTextContent('The New Passwords Do Not Match');
    // Modified Confirm newPassword in Field
    fireEvent.change(getByTestId('newPassword2'), { target: { value: '123' } })
    expect(getByTestId('newPassword2').value).toBe('123') 
    fireEvent.click(getByTestId('save'));
    expect(getByTestId('errors')).toHaveTextContent('');
    // Added First Name in Field
    fireEvent.change(getByTestId('first'), { target: { value: 'Test' } })
    expect(getByTestId('first').value).toBe('Test') 
    fireEvent.click(getByTestId('save'));
    expect(getByTestId('errors')).toHaveTextContent('');
    // Added Last Name in Field
    fireEvent.change(getByTestId('last'), { target: { value: 'Test' } })
    expect(getByTestId('last').value).toBe('Test') 
    fireEvent.click(getByTestId('save'));
    expect(getByTestId('errors')).toHaveTextContent('');
    // Added Phone in Field
    fireEvent.change(getByTestId('phone'), { target: { value: '123456789' } })
    expect(getByTestId('phone').value).toBe('123456789') 
    fireEvent.click(getByTestId('save'));
    expect(getByTestId('errors')).toHaveTextContent('');
    // Added Address in Field
    fireEvent.change(getByTestId('address'), { target: { value: '123 Main Street' } })
    expect(getByTestId('address').value).toBe('123 Main Street') 
    fireEvent.click(getByTestId('save'));
    expect(getByTestId('errors')).toHaveTextContent('');
    // Added City in Field
    fireEvent.change(getByTestId('city'), { target: { value: 'Queens' } })
    expect(getByTestId('city').value).toBe('Queens') 
    fireEvent.click(getByTestId('save'));
    expect(getByTestId('errors')).toHaveTextContent('');
    // Added State in Field
    fireEvent.change(getByTestId('state'), { target: { value: 'NY' } })
    expect(getByTestId('state').value).toBe('NY') 
    fireEvent.click(getByTestId('save'));
    expect(getByTestId('errors')).toHaveTextContent('');
    // Added Zip Code in Field
    fireEvent.change(getByTestId('zip'), { target: { value: '12345' } })
    expect(getByTestId('zip').value).toBe('12345') 
    fireEvent.click(getByTestId('save'));
    expect(getByTestId('errors')).toHaveTextContent('');
  });
});
