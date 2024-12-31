import React from "react";
import pic from "../public/skmishra.jpg"; // Corrected path
import { GrInstagram } from "react-icons/gr";
import {
  FaLinkedin,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaTwitter,
  FaServer,
} from "react-icons/fa"; // Added FaServer import
import { SiMongodb } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-6 md:px-12 py-20"
        style={{
          background: "linear-gradient(135deg, #f5f5f5 0%, #c1c1c1 100%)", // Updated gradient
        }}
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-4 order-2 md:order-1">
            <h1 className="text-4xl font-extrabold text-center text-gray-800">
              Welcome to Shivam's Portfolio
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center text-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-700">
                Hello, I'm a{" "}
              </h2>
              <ReactTyped
                className="text-3xl md:text-5xl font-bold text-blue-500"
                strings={[
                  "Creative",
                  "Web Developer",
                  "Innovative",
                  "Programmer",
                ]}
                typeSpeed={60}
                backSpeed={70}
                loop={true}
              />
            </div>
            <p className="text-lg md:text-xl text-center text-gray-600">
              Passionate about building interactive web applications using
              React, Node.js, and MongoDB. Seeking challenging roles to create
              innovative solutions and drive impactful projects.
            </p>
            <div className="flex flex-col items-center md:flex-row md:justify-between mt-8">
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  Connect with me
                </h3>
                <div className="flex space-x-6 justify-center">
                  <a
                    href="https://www.instagram.com/skmishra._?igsh=MTUyNm9vYXpuNmp5NA=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GrInstagram className="text-3xl text-[#C13584] hover:text-[#e95950] transition duration-300" />{" "}
                    {/* Instagram color */}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shivam-kumar-615109262/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-3xl text-[#0077b5] hover:text-[#005582] transition duration-300" />{" "}
                    {/* LinkedIn color */}
                  </a>
                  <a
                    href="https://github.com/shivammishra-01"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-3xl text-[#333] hover:text-[#555] transition duration-300" />{" "}
                    {/* GitHub color */}
                  </a>
                  <a
                    href="https://x.com/iamskmishra_" // Replace with your Twitter URL
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-3xl text-[#1DA1F2] hover:text-[#0d95e8] transition duration-300" />{" "}
                    {/* Twitter color */}
                  </a>
                </div>
              </div>
              <div className="space-y-2 text-center mt-6 md:mt-0">
                <h3 className="text-xl font-semibold text-gray-800">
                  Currently Working On
                </h3>
                <div className="flex space-x-6 justify-center">
                  <SiMongodb className="text-3xl text-[#4DB33D] hover:text-[#3A7B35] transition duration-300" />{" "}
                  {/* MongoDB color */}
                  <FaReact className="text-3xl text-[#61DAFB] hover:text-[#4fa3c4] transition duration-300" />{" "}
                  {/* React color */}
                  <FaNodeJs className="text-3xl text-[#8CC84B] hover:text-[#6e8e3e] transition duration-300" />{" "}
                  {/* Node.js color */}
                  <FaServer className="text-3xl text-[#000000] hover:text-[#4f4f4f] transition duration-300" />{" "}
                  {/* Express.js color */}
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end order-1">
            <img
              src={pic}
              className="rounded-full w-64 h-64 md:w-80 md:h-80 border-4 border-gray-300 shadow-lg"
              alt="profile"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="https://drive.google.com/file/d/1TQoPGAwOgpX9OVbi40XAt92VaxgW06mT/view?usp=drive_link" // Updated link
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 text-white text-lg font-bold rounded-full hover:bg-blue-600 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
      <hr className="my-8 border-gray-300" />
    </>
  );
}

export default Home;
