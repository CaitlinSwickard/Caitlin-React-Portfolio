import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Create from '../ContactForm';

export default function Contact() {
  return (
    <>
      <h1 className="contact">Contact me</h1>
      <Create />
      <Footer />
    </>
  )

}

