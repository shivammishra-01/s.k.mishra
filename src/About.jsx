import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-8 my-20"
      style={{ backgroundColor: "#f7f7f7" }} // Light background color for contrast
    >
      <h1 className="text-4xl font-bold mb-12 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
        Discover More About Me
      </h1>

      <div className="mb-12 text-center">
        <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            "Hi, I’m Shivam Kumar Mishra, currently in my final year of Computer
            Science and Engineering at Centurion University, Odisha. Over the
            past two years, I've delved deeply into front-end development,
            mastering HTML5, CSS, JavaScript, and frameworks like Bootstrap and
            Material Design. Additionally, I have hands-on experience with
            Node.js, React, and MongoDB as part of the MERN Stack.{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">Education</h2>
          <div className="border-t border-gray-300 pt-4">
            <h3 className="text-xl font-semibold text-blue-700">
              B.Tech in Computer Science and Engineering
            </h3>
            <p className="text-gray-600">
              Centurion University of Technology Management (2021 - 2025)
            </p>
            <p className="text-gray-500">Expected Graduation: May 2025</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            Achievements
          </h2>
          <div className="border-t border-gray-300 pt-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Accenture UK - Developer and Technology Job Simulation
              </h3>
              <p className="text-gray-600">Credential ID: dnRATS3Qus4uBFR2t</p>
              <p className="text-gray-500">Issued Feb 2024</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Lyft - Back-End Engineering Job Simulation
              </h3>
              <p className="text-gray-600">Credential ID: 375GfA4dJgYfozs4Z</p>
              <p className="text-gray-500">Issued Feb 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Mission Statement Section */}
      {/* <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">Mission Statement</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          My mission is to leverage my skills and creativity to deliver innovative web development solutions that exceed client expectations and make a positive impact on the digital landscape. I am dedicated to continuous learning and growth, always seeking new challenges and opportunities to expand my expertise.
        </p>
      </div> */}
    </div>
  );
}

export default About;
