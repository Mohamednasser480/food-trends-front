import React from "react";
import { ContactInfo, Info, Map } from "../../components/ContactUs";
import ContactForm from "../../components/ContactUs/ContactForm";
import { Breadcrumb } from "../../components/UI";

const ContactUs = () => {
  return (
    <>
      <Breadcrumb />
      <div className="container flex flex-col py-8 ">
        <Info />
        <ContactInfo />
        <Map />
        <ContactForm />
      </div>
    </>
  );
};

export default ContactUs;
