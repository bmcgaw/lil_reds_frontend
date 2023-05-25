import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    console.log(result.status);
    name.value = "";
    email.value = "";
    message.value = "";
  };
  return (
    <>
      <div className="w-full h-[100vh] bg-[#FFC0B4] flex justify-items-center items-center">
        <form
          className="flex flex-col m-auto mt-[200px] h-[65vh] w-[350px] md:h-[65vh] md:w-[400px] justify-evenly"
          onSubmit={handleSubmit}
        >
          <div className="w-full h-[15%]">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              required
              placeholder="Name"
              className="w-[60%] h-[40px] rounded-[10px] pl-2 text-lg bg-[#faf0e6]"
            />
          </div>
          <div className="w-full h-[15%]">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              required
              placeholder="Email"
              className="w-[60%] h-[40px] rounded-[10px] pl-2 text-lg bg-[#faf0e6]"
            />
          </div>
          <div className="w-full h-[60%]">
            <label htmlFor="message"></label>
            <textarea
              id="message"
              required
              placeholder="Message"
              className="h-[80%] w-full text-lg pl-2 rounded-[10px] bg-[#faf0e6]"
            />
          </div>
          <button
            className="w-[120px] h-[10%] text-[#faf0e6] m-auto rounded-[10px] bg-[#02313C] text-xl hover:bg-[#035162]"
            type="submit"
          >
            {status}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
