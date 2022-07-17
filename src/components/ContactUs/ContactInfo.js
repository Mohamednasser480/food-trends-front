import React from "react";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";

const ContactInfo = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center px-14">
        <div className="flex justify-center p-4  lg:w-1/4">
          <GrLocation size={40} className="m-3" />
          <div>
            <p className="mb-3 text-3xl">Address</p>
            <p className="mb-3 text-primary">ITI Menofia Branch</p>
            <p className="text-accent">
              شبين الكوم, مركز شبين الكوم، Menofia Governorate
            </p>
          </div>
        </div>

        <div className="flex justify-center p-4 lg:w-1/4 ">
          <FiPhoneCall size={40} className="m-3" />
          <div>
            <p className="mb-3 text-3xl">Contact</p>
            <p className="mb-3 text-primary">
              Mobile: <a href="tel:01000000000">01000000000</a>
            </p>
            <p className="text-accent">
              Email: <a href="mailto:test@test.com">test@test.com</a>
            </p>
          </div>
        </div>

        <div className="flex justify-center p-4 lg:w-1/4">
          <AiOutlineClockCircle size={40} className="m-3" />
          <div>
            <p className="mb-3 text-3xl">Hour of operation</p>
            <p className="text-primary">Mon - Fri: 08:30 - 20:00</p>
            <p className="text-accent">Sat & Sun: 09:30 - 21:30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
