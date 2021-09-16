import React from 'react';
import '../../App.css';

export default function Contact() {
  return (
    <>
      <h1 className="contact">Contact me</h1>
      <container className="contact-container">
        <form>
          <div>
            <label className="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label className="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label className="message">Message:</label>
            <textarea id="message" required />
          </div>
          {/* <button type="submit"></button> */}
        </form>
        <button className="form-btn">Submit</button>
      </container>
    </>
  )

}