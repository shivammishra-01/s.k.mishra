import React, { useRef } from "react";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("skmishra", "template_c8kojnp", form.current, {
        publicKey: "qIjLwOB0JPDjpU19k",
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contactPage"
      className="min-h-screen w-full flex flex-col items-center py-12 px-4 bg-gradient-to-br from-teal-100 via-white to-teal-200"
    >
      <div className="w-full max-w-7xl bg-white shadow-xl rounded-3xl p-10 mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-teal-600">
          Get In Touch
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          I’d love to hear from you! Please fill out the form below.
        </p>

        <form
          className="flex flex-col space-y-6"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            placeholder="Name"
            className="p-4 w-full rounded-full bg-teal-50 border border-teal-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
            name="from_name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 w-full rounded-full bg-teal-50 border border-teal-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
            name="from_email"
            required
          />
          <textarea
            name="message"
            className="p-4 w-full rounded-xl bg-teal-50 border border-teal-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            className="bg-teal-600 text-white py-3 px-6 rounded-full hover:bg-teal-700 transition-all transform hover:scale-105 hover:shadow-lg mt-4"
            type="submit"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 flex justify-center space-x-8">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-700 transition-colors text-2xl"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-700 transition-colors text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-700 transition-colors text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-700 transition-colors text-2xl"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
