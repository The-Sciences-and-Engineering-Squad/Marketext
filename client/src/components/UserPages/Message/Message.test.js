import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Message from './Message';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Message', () => {
  test('Renders and Tests Message Component Without Messages', () => {
    const { getByTestId } = render(<Router><Message /></Router>);
    // Checks if a certain text is found to know if it rendered
    expect(getByTestId('text')).toBeInTheDocument();
  });
});

/*
describe('Message', () => {
  test('Renders and Tests Message Component With Message', () => {
    const { getByTestId } = render(<Router><Message /></Router>);
    // Checks if a certain text is found to know if it rendered
    expect(getByTestId('text')).toBeInTheDocument();

    // Added Chat in Field
    fireEvent.change(getByTestId('chat'), { target: { value: 'Hi' } })
    expect(getByTestId('chat').value).toBe('Hi') 

    // Click Button to Send
    fireEvent.click(getByTestId('send'));
    
    // Click Button to Manage
    fireEvent.click(getByTestId('manage'));

    // Click Button to Completed
    fireEvent.click(getByTestId('complete'));
  });
});
*/