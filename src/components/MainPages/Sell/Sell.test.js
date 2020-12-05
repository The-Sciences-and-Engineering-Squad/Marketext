import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import Sell from './Sell';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Sell', () => {
  test('Renders Sell Component', () => {
    render(<Router><Sell /></Router>);
  });
});