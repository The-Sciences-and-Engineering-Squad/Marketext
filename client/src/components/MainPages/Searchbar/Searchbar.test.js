import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Searchbar from './Searchbar';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Searchbar', () => {
  test('Renders and Tests Searchbar Component', () => {
    const { getByTestId } = render(<Router><Searchbar /></Router>);
    // Added Input into Search Field
    fireEvent.change(getByTestId('input'), { target: { value: 'Test' } });
    expect(getByTestId('input').value).toBe('Test');
    fireEvent.click(getByTestId('search'));
  });
});