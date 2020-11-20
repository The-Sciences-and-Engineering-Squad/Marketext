import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import RenderTextbooks from './RenderTextbooks';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('RenderTextbooks', () => {
  test('Renders and Tests RenderTextbooks Component', () => {
    const textbooks = [{
      id: 1,
      title: "Math",
      author: "Kevin", 
      image: null,
    }]
    const { getByTestId } = render(<Router><RenderTextbooks textbooks={textbooks} page="Buy" target="Sellers"/></Router>);
    // Click Button to Select Certain Book. Runs the selectTextbook Function.
    fireEvent.click(getByTestId('book'));
  });
});