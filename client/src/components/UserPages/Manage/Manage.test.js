import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Manage from './Manage';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Manage', () => {
  test('Renders and Tests Manage Component', () => {
    // const { getByTestId } = render(<Router><Manage /></Router>);
    // // Checks if a certain text is found to know if it rendered
    // expect(getByTestId('text')).toBeInTheDocument();

  });
});
