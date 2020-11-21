import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Textbooks from './Textbooks';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Textbooks', () => {
  test('Renders and Tests Textbooks Component', () => {
    // const { getByTestId } = render(<Router><Textbooks /></Router>);
    // // Checks if a certain text is found to know if it rendered
    // expect(getByTestId('text')).toBeInTheDocument();

  });
});
