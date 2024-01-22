import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        userEmail: '',
        comments: '',
    });

    const [formErrors, setFormErrors] = useState({
        fName: '',
        lName: '',
        userEmail: '',
        comments: '',
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...formErrors };

        // Validation for First Name
        if (formData.fName.trim() === '') {
            newErrors.fName = 'First Name is required';
            isValid = false;
        } else {
            newErrors.fName = '';
        }

        // Validation for Last Name
        if (formData.lName.trim() === '') {
            newErrors.lName = 'Last Name is required';
            isValid = false;
        } else {
            newErrors.lName = '';
        }

        // Validation for Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.userEmail)) {
            newErrors.userEmail = 'Invalid Email address';
            isValid = false;
        } else {
            newErrors.userEmail = '';
        }

        // Validation for Comment
        if (formData.comments.trim() === '') {
            newErrors.comments = 'Comment is required';
            isValid = false;
        } else {
            newErrors.comments = '';
        }

        setFormErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate the form
        if (validateForm()) {
            try {
                // Send data to the server
                const response = await fetch('http://localhost:4000/submitForm', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    // Form submitted successfully
                    console.log('Form submitted!', formData);

                    // Clear form data after successful submission
                    setFormData({
                        fName: '',
                        lName: '',
                        userEmail: '',
                        comments: '',
                    });
                } else {
                    // Handle server error
                    console.error('Server error:', response.statusText);
                }
            } catch (error) {
                // Handle fetch error
                console.error('Error:', error.message);
            }
        }
    };

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    return (
        <div>
            <h1>Contact Us</h1>

            <form name="myForm" onSubmit={handleSubmit}>
                <label htmlFor="fName">First Name</label>
                <input
                    type="text"
                    id="fName"
                    placeholder="First Name"
                    value={formData.fName}
                    onChange={handleChange}
                />
                <span className="error">{formErrors.fName}</span>

                <label htmlFor="lName">Last Name</label>
                <input
                    type="text"
                    id="lName"
                    placeholder="Last Name"
                    value={formData.lName}
                    onChange={handleChange}
                />
                <span className="error">{formErrors.lName}</span>

                <label htmlFor="userEmail">Email</label>
                <input
                    type="text"
                    id="userEmail"
                    placeholder="youremail@email.com"
                    value={formData.userEmail}
                    onChange={handleChange}
                />
                <span className="error">{formErrors.userEmail}</span>

                <label htmlFor="comments">Comment</label>
                <input
                    type="text"
                    id="comments"
                    placeholder="Your comments"
                    value={formData.comments}
                    onChange={handleChange}
                />
                <span className="error">{formErrors.comments}</span>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;
