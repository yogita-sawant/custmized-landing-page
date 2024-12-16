import React from "react";

export default function Footer() {
  const socialLinks = [
    { name: "Twitter", icon: "fab fa-twitter", link: "https://twitter.com" },
    {
      name: "Facebook",
      icon: "fab fa-facebook-square",
      link: "https://facebook.com",
    },
    { name: "Dribbble", icon: "fab fa-dribbble", link: "https://dribbble.com" },
    { name: "GitHub", icon: "fab fa-github", link: "https://github.com" },
  ];

  const usefulLinks = [
    { name: "About Us", link: "https://www.creative-tim.com/presentation" },
    { name: "Blog", link: "https://blog.creative-tim.com" },
    { name: "Github", link: "https://www.github.com/creativetimofficial" },
  ];

  const otherResources = [
    { name: "Terms & Conditions", link: "https://creative-tim.com/terms" },
    { name: "Privacy Policy", link: "https://creative-tim.com/privacy" },
    { name: "Contact Us", link: "https://creative-tim.com/contact-us" },
  ];

  return (
    <footer className="relative bg-gray-light-300 pt-8 pb-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-light-700">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  className="bg-white-light text-primary shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-light-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  {usefulLinks.map((item) => (
                    <li key={item.name}>
                      <a
                        className="text-gray-light-700 hover:text-gray-light-900 font-semibold block pb-2 text-sm"
                        href={item.link}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-light-600 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  {otherResources.map((item) => (
                    <li key={item.name}>
                      <a
                        className="text-gray-light-700 hover:text-gray-light-900 font-semibold block pb-2 text-sm"
                        href={item.link}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-light-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}
              <a
                href="https://www.creative-tim.com"
                className="text-gray-light-600 hover:text-gray-light-900"
              >
                by Tagfi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
