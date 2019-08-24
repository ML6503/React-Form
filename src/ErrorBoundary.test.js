import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Name from './components/Name';
import ErrorBoundary from './ErrorBoundary';


const badInput = [
    { "id": "car", "type": "stext", "label": "Name" },
    { "id": "dob", "type": "date", "label": "DOB" },
    { "id": "gender", "type": "gender", "label": "Gender" }
];


afterEach(cleanup)

test('ErrorBoundary works correctly', () => {
    const { getByTestId, rerender } = render(<Name />)
    rerender(<Name label="badName" type="car" />);
    expect(getByTestId('error')).toBeTruthy();
});
