import React from "react";
import projectData from "../data/project-data.json";

export default function ProjectFeatures() {
  const features1 = projectData.features[0];
  const features2 = projectData.features[1];
  const features3 = projectData.features[2];

  return (
    <div className="flex flex-wrap">
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
              <i className={features1.icon}></i>
            </div>
            <h6 className="text-xl font-semibold">{features1.title}</h6>
            <p className="mt-2 mb-4 text-gray-600">{features1.details}</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
              <i className={features2.icon}></i>
            </div>
            <h6 className="text-xl font-semibold">{features2.title}</h6>
            <p className="mt-2 mb-4 text-gray-600">{features2.details}</p>
          </div>
        </div>
      </div>

      <div className="pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
              <i className={features3.icon}></i>
            </div>
            <h6 className="text-xl font-semibold">{features3.title}</h6>
            <p className="mt-2 mb-4 text-gray-600">{features3.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
