import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import Swap from './Swap';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Swap', () => {
  test('Renders Swap Component', () => {
    const { } = render(<Router><Swap /></Router>);
  });
});