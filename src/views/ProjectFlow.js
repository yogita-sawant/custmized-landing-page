import React from "react";
import projectData from "./../data/project-data.json";

export default function ProjectFlow() {
  const content = projectData.userFlow;

  return (
    <>
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-white-light fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt={content.imageAlt}
              className="max-w-full rounded-lg shadow-lg"
              src={content.imageSrc}
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-pink-dark-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-dark-300">
                <i className={`fas ${content.icon} text-xl`}></i>
              </div>
              <h3 className="text-3xl font-semibold">{content.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-light-600">
                {content.description}
              </p>
              <ul className="list-none mt-6">
                {content.steps.map((step, index) => (
                  <li key={index} className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-dark-200 mr-3">
                          <i className={`fas ${step.icon}`}></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-light-600">{step.text}</h4>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
