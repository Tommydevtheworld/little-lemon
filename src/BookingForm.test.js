// src/__tests__/BookingForm.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from "./BookingForm";

test('form can be submitted', async () => {
    const { getByLabelText, getByText } = render(<BookingForm />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.change(getByLabelText(/name/i), { target: { value: 'John Doe' } });
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.change(getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.change(getByLabelText(/date/i), { target: { value: '2023-01-01' } });
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.change(getByLabelText(/time/i), { target: { value: '19:00' } });
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.change(getByLabelText(/number of guests/i), { target: { value: '4' } });

    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByText(/submit/i));

    await waitFor(() => {
        expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('John Doe'));
    });
});
