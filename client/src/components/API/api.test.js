import React from 'react';
import { cleanup} from '@testing-library/react';

import api from './api';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('API', () => {
  test('Tests API Component', () => {

  });
});