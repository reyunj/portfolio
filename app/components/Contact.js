"use client";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { IoMdMail, IoLogoWhatsapp} from "react-icons/io";

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });

      Swal.fire({
        icon: "success",
        title: "Thank you!",
        text: "Your message has been submitted.",
        type: "confirm",
      }).then(() => {
        window.location.reload();
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });

      Swal.fire({
        icon: "error",
        title: "Error!",
        text: `Error: ${msg}`,
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    try {
      const response = await axios.post(
        "https://formspree.io/f/xnqerrlk",
        inputs,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      handleServerResponse(true, "Thank you, your message has been submitted.");
    } catch (error) {
      handleServerResponse(false, error.response.data.error);
    }
  };

  const contact_info = [
    { logo: <IoMdMail size={24} color="#00bfae" />, text: "junrey1296@gmail.com" },
    { logo: <IoLogoWhatsapp size={24} color="#25D366" />, text: "(+63)933-4823-965" },
  ];
  

  return (
    <section id="contact" className="py-10 px-3 text-gray-800 dark:text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-100 dark:bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5" onSubmit={handleOnSubmit}>
            <input
              type="email"
              placeholder="Your Email Address"
              required
              className="px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-gray-800 dark:text-white"
              id="email"
              name="email"
              onChange={handleOnChange}
              value={inputs.email}
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              className="px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-gray-800 dark:text-white"
              id="message"
              name="message"
              onChange={handleOnChange}
              value={inputs.message}
            />
            <button type="submit" className="px-6 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 transition-colors duration-300 w-fit" disabled={status.submitting}>
              {!status.submitting ? (!status.submitted ? "Send Message" : "Sent") : "Sending..."}
            </button>
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div key={i} className="flex gap-4 w-fit items-center">
                <div className="min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center text-cyan-600 bg-white dark:bg-gray-900 rounded-full">
                  {contact.logo}
                </div>
                <p className="text-base">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
