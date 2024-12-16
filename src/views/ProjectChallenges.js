import React from "react";
import projectData from "../data/project-data.json";

export default function ProjectChallenges() {
  const content = projectData.challenges;

  return (
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">{content.title}</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-light-600">
              {content.subtitle}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          {content.challengesList.map((member, index) => (
            <div
              key={index}
              className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
            >
              <div className="px-6">
                <img
                  alt={member.title}
                  src={member.imgSrc}
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">{member.title}</h5>
                  <p className="mt-1 text-sm text-gray-light-500 uppercase font-semibold">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
