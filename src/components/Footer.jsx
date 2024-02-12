import React from 'react';
import '../App.css'; // Or the relevant CSS file

function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section className="footer">
      <form onSubmit={handleSubmit}>
        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  );
}

export default Footer;
