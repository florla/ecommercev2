import React from 'react';

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic or validation here
        // You can replace the following line with your own logic
        console.log('Form submitted!');
    };

    return (
        <div>
            <h1>Contact Us</h1>

            <form name="myForm" onSubmit={handleSubmit}>
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="fName" placeholder="First Name" />

                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lName" placeholder="Last Name" />

                <label htmlFor="userEmail">Email</label>
                <input type="text" id="userEmail" placeholder="youremail@email.com" />

                <label htmlFor="comment">Comment</label>
                <input type="text" id="comments" placeholder="Your comments" />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;
