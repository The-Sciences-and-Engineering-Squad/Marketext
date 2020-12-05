import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';

import CurrentlyListed from './CurrentlyListed';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('CurrentlyListed', () => {
  test('Renders and Tests CurrentlyListed Component Without Textbooks', () => {
    const { getByTestId } = render(<Router><CurrentlyListed /></Router>);
    // Checks if a certain text is found to know if it rendered
    expect(getByTestId('text')).toBeInTheDocument();

  });
});

/*
describe('CurrentlyListed', () => {
  test('Renders and Tests CurrentlyListed Component With Textbooks', () => {
    const { getByTestId } = render(<Router><CurrentlyListed /></Router>);
    // Checks if a certain text is found to know if it rendered
    expect(getByTestId('text')).toBeInTheDocument();

    // Click Button to Remove
    fireEvent.click(getByTestId('remove'));
  });
});
*/