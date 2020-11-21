import React from 'react';
import { render, cleanup } from '@testing-library/react';

import NoAccess from './NoAccess';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('NoAccess', () => {
  test('Renders and Tests NoAccess Component', () => {
    const { getByTestId } = render(<NoAccess />);
    // Checks if a certain text is found to know if it rendered
    expect(getByTestId('text')).toBeInTheDocument();
  });
});