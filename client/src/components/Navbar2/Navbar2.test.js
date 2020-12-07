import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import Navbar2 from './Navbar2';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Navbar2', () => {
  test('Renders and Tests Navbar2 Component', () => {
    const { getByTestId } = render(<Router><Navbar2 /></Router>);
    // Checks if a certain text is found to know if it rendered
    expect(screen.getByText('Marketext')).toBeInTheDocument();
    // Click Toggle to Navbar2
    fireEvent.click(getByTestId('toggle'));
    // Click Something From to Navbar2
    fireEvent.click(getByTestId('close'));
  });
});