import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Create from '../ContactForm';

export default function Contact() {
  return (
    <>
      <h1 className="contact">Contact me</h1>
      {/* <Create /> */}
      
      <h1 className="contactinfo">Caitlin6029@gmail.com</h1>
      <h2 className="contactinfo">720.980.0888</h2>
      <h2 className="contactinfo">Denver, CO 80222</h2>
      
      <Footer />
    </>
  )

}

