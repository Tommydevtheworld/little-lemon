import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookingSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    date: Yup.date()
        .required('Required'),
    time: Yup.string()
        .required('Required'),
    guests: Yup.number()
        .min(1, 'Must be at least one guest')
        .required('Required')
});

const BookingForm = () => (
    <div>
        <h1>Book a Table</h1>
        <Formik
            initialValues={{
                name: '',
                email: '',
                date: '',
                time: '',
                guests: ''
            }}
            validationSchema={BookingSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form aria-label="Booking form">
                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" component="div" />

                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="div" />

                    <label htmlFor="date">Date</label>
                    <Field name="date" type="date" />
                    <ErrorMessage name="date" component="div" />

                    <label htmlFor="time">Time</label>
                    <Field name="time" type="time" />
                    <ErrorMessage name="time" component="div" />

                    <label htmlFor="guests">Number of Guests</label>
                    <Field name="guests" type="number" />
                    <ErrorMessage name="guests" component="div" />

                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default BookingForm;
