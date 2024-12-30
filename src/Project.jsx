import React, { useState } from "react";
import Spotify from "../public/csarwebsite.png";
import Stopwatch from "../public/Stopwatch.png";
import BookStore from "../public/BookStore.png";
import Game from "../public/Game.png";
import Lending from "../public/mandi.png";
import Weather from "../public/Weather.png";
import mithila from "../public/mithila.png";

function Project() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const cardItem = [
    {
      id: 1,
      logo: Spotify,
      name: "CSaR Website",
      link: "https://csarcutm.infinityfreeapp.com/",
      description:
        "CSaR website has completed this website is for our college csar clubs it is a multipage website. it very helpful and will replace the manual attendance taker work. other works and store data for all.",
    },
    {
      id: 2,
      logo: Lending,
      name: "MANDI.COM",
      link: "https://mandi-app.vercel.app/",
      description:
        "Mandi is an online platform enabling farmers to buy and sell agricultural products, ensuring better market access and price transparency. It connects farmers directly with buyers, built with React.js for the frontend and Spring Boot for the backend.",
    },
    {
      id: 3,
      logo: mithila,
      name: " Mithilacolors",
      link: "https://mithilacolors.vercel.app/",
      description:
        " MithilaColors, a web platform dedicated to celebrating the rich cultural heritage of Mithila through its iconic Madhubani paintings.",
    },
    {
      id: 4,
      logo: BookStore,
      name: "BookStore Website",
      description:
        "The BookStore website is a responsive React.js application designed for browsing and purchasing books online. It features a clean UI, search functionality, and a user-friendly experience for seamless book selection and checkout.",
    },
    {
      id: 5,
      logo: Stopwatch,
      name: "Stopwatch",
      link: "https://stopwatch-three-murex-57.vercel.app/",
      description:
        "A simple stopwatch built with HTML, CSS, and JavaScript. It includes start, stop, and reset functionality, and features a clean, user-friendly design. This project demonstrates skills in front-end development and JavaScript programming.",
    },
    {
      id: 6,
      logo: Weather,
      name: "Weather Website",
      description:
        "A weather app built with HTML, CSS, and JavaScript. It provides current weather information based on the user's location and features a clean, responsive design. This project showcases skills in web development and API integration.",
    },
  ];

  return (
    <div
      name="Project"
      className="max-w-screen-2xl container mx-auto px-4 md:px-8 lg:px-16 my-12"
    >
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Live Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cardItem.map(({ id, logo, name, link, description }) => (
          <div
            key={id}
            className={`border-2 border-gray-200 rounded-lg shadow-lg transition-transform duration-300 overflow-hidden bg-white ${
              expanded[id] ? "transform scale-105" : ""
            }`}
          >
            <div className="relative cursor-pointer">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={logo}
                  className="w-full h-48 object-cover"
                  alt={name}
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-gray-900 to-transparent text-white text-lg font-semibold text-center">
                  {name}
                </div>
              </a>
            </div>
            <div className="p-4">
              <button
                onClick={() => toggleExpand(id)}
                className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                {expanded[id] ? "Show Less" : "Show More"}
              </button>
              {expanded[id] && (
                <p className="mt-4 text-gray-700 text-sm">{description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
