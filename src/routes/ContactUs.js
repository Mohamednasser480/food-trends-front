import React from 'react';
import { ContactInfo, Info, Map } from '../components/ContactUs';
import ContactForm from '../components/ContactUs/ContactForm';

const ContactUs = () => {
  return (
    <div className="container flex flex-col py-8">
      {/* <ContactNav /> */}
      <Info />
      <ContactInfo />
      <Map />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
