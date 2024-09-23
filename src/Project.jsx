import React, { useState } from "react";
import Spotify from "../public/csarwebsite.png";
import Stopwatch from "../public/Stopwatch.png";
import BookStore from "../public/BookStore.png";
import Game from "../public/Game.png";
import Lending from "../public/mandi.png";
import Weather from "../public/Weather.png";

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
      // link: "https://vanshtastic.netlify.app/",
      description:
        "Vanshtastic, a shopping website, where I developed reusable and maintainable cross-platform code.",
    },
    {
      id: 2,
      logo: Lending,
      name: "MANDI.COM",
      description:
        "A Smart Blood Banking System using React, Node.js, and MongoDB enables efficient blood donation management by allowing user registration, blood type search, and real-time inventory tracking. It streamlines the process for donors and medical institutions with a user-friendly interface.",
    },
    {
      id: 3,
      logo: BookStore,
      name: "BookStore Website",
      description:
        "A weather app built with HTML, CSS, and JavaScript. It provides current weather information based on the user's location and features a clean, responsive design. This project showcases skills in web development and API integration.",
    },
    {
      id: 4,
      logo: Game,
      name: "Tic-tac-toe Game",
      description:
        "A classic Tic-Tac-Toe game developed using HTML, CSS, and JavaScript. It features a simple, interactive interface where players can take turns marking Xs and Os. This project demonstrates skills in game logic implementation and user interface design.",
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
