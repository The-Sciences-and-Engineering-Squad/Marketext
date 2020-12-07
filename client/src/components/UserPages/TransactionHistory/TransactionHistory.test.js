import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import TransactionHistory from './TransactionHistory';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('TransactionHistory', () => {
  test('Renders and Tests TransactionHistory Component', () => {
    const { getByTestId } = render(<Router><TransactionHistory /></Router>);
    // Checks if a certain text is found to know if it rendered
    expect(getByTestId('text')).toBeInTheDocument();
  });
});
