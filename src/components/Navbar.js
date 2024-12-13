import React from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const transparent = true;
  const logoText = "TagFi";
  const logoLink =
    "https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation";

  // const navLinks = [
  //   { href: "#home", text: "Home", icon: "fas fa-home" },
  //   { href: "#about", text: "About", icon: "fas fa-user" },
  //   { href: "#services", text: "Services", icon: "fas fa-cogs" },
  // ];

  const socialLinks = [
    { href: "https://facebook.com", icon: "fab fa-facebook", name: "Share" },
    { href: "https://twitter.com", icon: "fab fa-twitter", name: "Tweet" },
    { href: "https://github.com", icon: "fab fa-github", name: "Star" },
  ];

  const buttons = [
    {
      text: "Sign Up",
      icon: "fas fa-user-plus",
      href: "#signup",
      style: "bg-secondary text-white active:bg-secondary-dark",
    },
  ];

  return (
    <nav
      className={`${
        transparent
          ? "top-0 absolute z-50 w-full"
          : "relative bg-white shadow-lg"
      } flex flex-wrap items-center justify-between px-2 py-3`}
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={`${
              transparent ? "text-white" : "text-gray-800"
            } text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase`}
            href={logoLink}
          >
            {logoText}
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={`${
                transparent ? "text-white" : "text-gray-800"
              } fas fa-bars`}
            />
          </button>
        </div>

        <div
          className={`${
            navbarOpen ? "block rounded shadow-lg" : "hidden"
          } lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none`}
          id="navbar"
        >
          {/* <ul className="flex flex-col lg:flex-row list-none mr-auto">
            {navLinks.map((link, index) => (
              <li key={index} className="flex items-center">
                <a
                  className={`${
                    transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600"
                  } px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold`}
                  href={link.href}
                >
                  {link.icon && (
                    <i
                      className={`${
                        transparent
                          ? "lg:text-gray-300 text-gray-500"
                          : "text-gray-500"
                      } ${link.icon} text-lg leading-lg mr-2`}
                    />
                  )}
                  {link.text}
                </a>
              </li>
            ))}
          </ul> */}

          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {socialLinks.map((social, index) => (
              <li key={index} className="flex items-center">
                <a
                  className={`${
                    transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600"
                  } px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold`}
                  href={social.href}
                >
                  <i
                    className={`${
                      transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500"
                    } ${social.icon} text-lg leading-lg`}
                  />
                  <span className="lg:hidden inline-block ml-2">
                    {social.name}
                  </span>
                </a>
              </li>
            ))}

            {buttons.map((button, index) => (
              <li key={index} className="flex items-center">
                <a
                  className={`${
                    transparent ? "text-gray-800 bg-gray-100" : button.style
                  } text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3`}
                  href={button.href}
                >
                  <i className={button.icon}></i> {button.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
