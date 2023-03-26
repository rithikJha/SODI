import React from 'react';
import Navbar from '../components/Nav';
const ContactUsPage = () => {
  return (

    <div className="container">
       
      <h1>Contact Us</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea className="form-control" id="message" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ContactUsPage;
