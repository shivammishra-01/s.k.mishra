import React from "react";
import Udemy from "../public/certification.png";
import accenture from "../public/accenture.png";
import codetantra from "../public/codetantra.png";
import Deliote from "../public/deliote.png";
import lyft from "../public/lyft.png";

function Certification() {
  const cardItem = [
    {
      id: 1,
      logo: Udemy,
      name: "Udemy",
      link: "https://drive.google.com/file/d/12n1WPU10c8n27h471gUVcjyRQUmi5x5V/view?usp=drive_link",
    },

    {
      id: 2,
      logo: accenture,
      name: "accenture",
      link: "https://drive.google.com/file/d/1-kh1F353o9f7Evud8H-VPWFFjQPyai8c/view?usp=drive_link",
    },

    {
      id: 3,
      logo: codetantra,
      name: "codetantra",
      link: "https://drive.google.com/file/d/15HnagJJttaqPka4nBEgIR1c4saKS1B8c/view?usp=drive_link",
    },

    {
      id: 4,
      logo: Deliote,
      name: "Deloitte",
      link: "https://drive.google.com/file/d/1j2TnHWJgFbeZAW9pRY_U5B5rOnOZaJ8C/view?usp=drive_link",
    },
    {
      id: 5,
      logo: lyft,
      name: "lyft",
      link: "https://drive.google.com/file/d/1REgCtA65DiYjmMwVqe1Rn6LuXwezP0rv/view?usp=drive_link",
    },
  ];

  return (
    <div
      name="Certification"
      className="max-w-screen-2xl container mx-auto px-6 md:px-12 my-20"
    >
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900">
        Certification
      </h1>
      <p className="text-center text-lg mb-12 text-gray-600">
        Over the past 2 years, I have earned certifications in cutting-edge
        technologies that have enhanced my understanding of web development.
        These certifications demonstrate my dedication to continuous learning
        and expertise in building responsive and dynamic web applications
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cardItem.map(({ id, logo, name, link }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center border-2 rounded-xl bg-gray-50 shadow-md p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={logo}
              alt={name}
              className="w-full h-40 object-cover mb-4 border-2 border-gray-300 bg-white"
            />
            <div className="text-lg font-semibold text-gray-800">{name}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Certification;
