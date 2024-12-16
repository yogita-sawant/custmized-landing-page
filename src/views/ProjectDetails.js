import React from "react";
import projectData from "./../data/project-data.json";

export default function ProjectDetails() {
  const sectionTitle = projectData.projectDetails.title;
  const projectDescription1 = projectData.projectDetails.description1;
  const projectDescription2 = projectData.projectDetails.description2;
  const cardTitle = "Top Notch Services";
  const cardDescription =
    "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.";
  const imageUrl = projectData.projectDetails.sectionImg;

  return (
    <>
      <div className="flex flex-wrap items-center mt-32">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
            <i className="fas fa-user-friends text-xl"></i>
          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            {sectionTitle}
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            {projectDescription1}
          </p>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            {projectDescription2}
          </p>
        </div>

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
            <img
              alt="..."
              src={imageUrl}
              className="w-full align-middle rounded-t-lg"
            />
            <blockquote className="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block"
                style={{
                  height: "95px",
                  top: "-94px",
                }}
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="text-pink-600 fill-current"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">{cardTitle}</h4>
              <p className="text-md font-light mt-2 text-white">
                {cardDescription}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
}
