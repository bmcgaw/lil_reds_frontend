import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col w-full h-[100vh] z-[-1] items-center justify-items-center">
        <h1 className="fixed top-[7rem] text-[35px] md:text-[40px] text-[#02313C]">
          Send Me a Message!
        </h1>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
