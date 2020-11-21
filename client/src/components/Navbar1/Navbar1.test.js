import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
// import Cookies from "universal-cookie";
import Navbar1 from './Navbar1';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Navbar1', () => {
  test('Renders and Tests Navbar1 Component Logged Out', () => {
    const { getByTestId } = render(<Router><Navbar1 /></Router>);
    // Checks if a certain text is found to know if it rendered
    expect(screen.getByText('Marketext')).toBeInTheDocument();
    // Click Toggle to Navbar1
    fireEvent.click(getByTestId('toggle'));
    // Click Something From to Navbar1
    fireEvent.click(getByTestId('close'));
  });
});

/*
describe('Navbar1', () => {
  test('Renders and Tests Navbar1 Component Logged In', () => {
    const { getByTestId } = render(<Router><Navbar1 /></Router>);
    // Checks if a certain text is found to know if it rendered
    expect(screen.getByText('Marketext')).toBeInTheDocument();

    // Click Signout From Navbar1
    fireEvent.click(getByTestId('SignOut'));
  });
});
*/
