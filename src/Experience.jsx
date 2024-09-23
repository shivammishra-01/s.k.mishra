import React from "react";
import html from "../public/html.png";
import css from "../public/css.jpg";
import javascript from "../public/javascript.png";
import Bootstrap from "../public/boot.png";
import Nodejs from "../public/nodejs.png";
import reactjs from "../public/reactjs.png";
import mongoDB from "../public/mongodb.jpg";
import express from "../public/express.png";

function Experience() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: Bootstrap, name: "Bootstrap" },
    { id: 5, logo: Nodejs, name: "Node.js" },
    { id: 6, logo: reactjs, name: "ReactJS" },
    { id: 7, logo: mongoDB, name: "MongoDB" },
    { id: 8, logo: express, name: "Express JS" },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-6 md:px-12 my-20"
    >
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900">
        Skills & Technologies
      </h1>
      <p className="text-center text-lg mb-12 text-gray-600">
        Over the past 2 years, I've honed my skills in front-end development, 
        working extensively with a variety of technologies to build responsive and dynamic web applications.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center border-2 rounded-xl bg-gray-50 shadow-md p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={logo}
              alt={name}
              className="w-20 h-20 object-cover rounded-full mb-4 border-2 border-gray-300 bg-white p-2"
            />
            <div className="text-lg font-semibold text-gray-800">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
