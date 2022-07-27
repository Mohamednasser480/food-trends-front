import React from "react";
import { ContactInfo, Info, Map } from "../components/ContactUs";

const ContactUs = () => {
  return (
    <div className=" container py-8">
      {/* <ContactNav /> */}
      <Info />
      <ContactInfo />
      <Map />
    </div>
  );
};

export default ContactUs;
