import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';

import AddNew from './AddNew';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('AddNew', () => {
  test('Renders and Tests AddNew Component', () => {
    const { getByTestId } = render(<Router><AddNew /></Router>);
    // Checks if a certain text is found to know if it rendered
    expect(screen.getByText('Add a Textbook To Your Listing')).toBeInTheDocument();
    // Checks that there is no errors to start with
    expect(getByTestId('errors')).toHaveTextContent('');
    // Click Button to Add
    fireEvent.click(getByTestId('add'));
    // Checks the errors to confirm
    expect(getByTestId('errors')).toHaveTextContent('Please Input the ISBN-13. 13 Characters for the ISBN. Please Input the Textbook Condition. Please Select a Category. See FAQ for Help. Please Enter the Price for the Textbook. See FAQ for Help.');
    // Added ISBN in Field
    fireEvent.change(getByTestId('ISBN'), { target: { value: '9780553804577' } })
    expect(getByTestId('ISBN').value).toBe('9780553804577') 
    fireEvent.click(getByTestId('add'));
    expect(getByTestId('errors')).toHaveTextContent('Please Input the Textbook Condition. Please Select a Category. See FAQ for Help. Please Enter the Price for the Textbook. See FAQ for Help.');
    // Added Condition in Field
    fireEvent.change(getByTestId('condition'), { target: { value: 'Perfect' } })
    expect(getByTestId('condition').value).toBe('Perfect') 
    fireEvent.click(getByTestId('add'));
    expect(getByTestId('errors')).toHaveTextContent('Please Select a Category. See FAQ for Help. Please Enter the Price for the Textbook. See FAQ for Help.');
    // Added Category in Field
    fireEvent.change(getByTestId('category'), { target: { value: 'Buy' } })
    expect(getByTestId('category').value).toBe('Buy') 
    fireEvent.click(getByTestId('add'));
    expect(getByTestId('errors')).toHaveTextContent('Please Enter the Price for the Textbook. See FAQ for Help.');
    // Added Price in Field
    fireEvent.change(getByTestId('price'), { target: { value: '$200' } })
    expect(getByTestId('price').value).toBe('$200') 
    fireEvent.click(getByTestId('add'));
    expect(getByTestId('errors')).toHaveTextContent('');
    // Added Additional in Field
    fireEvent.change(getByTestId('additional'), { target: { value: 'Brand New' } })
    expect(getByTestId('additional').value).toBe('Brand New') 
    fireEvent.click(getByTestId('add'));
    expect(getByTestId('errors')).toHaveTextContent('');
  });
});