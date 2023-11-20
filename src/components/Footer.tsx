import cx from "classnames";
import { Github, Linkedin, Mail } from "lucide-react";

import Link from "next/link";
const NAV_LINKS = [
  {
    title: "Connect ",
    list: [
      {
        title: "LinkedIn",
        icon: <Linkedin size={16} />,
        link: "https://www.linkedin.com/in/charmi-vyas-806444172",
      },
      {
        title: "Github",
        icon: <Github size={16} />,
        link: "https://github.com/18charmi",
      },
      {
        title: "Email",
        icon: <Mail size={16} />,
        link: "mailto:12charmi@gmail.com",
      },
    ],
  },
];
function Footer() {
  return (
    <footer className="w-full max-w-md md:max-w-4xl mx-auto">
      <div id="footer-top" className="flex">
        <div
          id="footer-container"
          className={cx(
            "w-full py-14 px-8 sm:px-10",
            "flex flex-row justify-between relative",
            "before:w-full before:absolute before:top-0 before:left-0 before:bg-gradient-to-r from-transparent via-slate-600 to-transparent before:h-[1px]",
            "after:w-full after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-r from-transparent via-slate-600 to-transparent after:h-[1px]"
          )}
        >
          <div
            id="footer-nav"
            className="flex flex-1 flex-wrap flex-col md:flex-row md:justify-end gap-8 text-sm"
          >
            {NAV_LINKS.map((nav, index) => (
              <div
                key={`navGroup-${index}`}
                id="footer-nav-group"
                className="min-w-[100px]"
              >
                <ul className="flex justify-end items-center">
                  <li>
                    <span
                      id="header-brand-name"
                      className=" mr-2 font-medium text-dark-200 text-sm md:text-base flex flex-1 items-center h-max"
                    >
                      Connect via
                    </span>
                  </li>
                  {nav.list.map((l, i) => (
                    <li
                      key={`nav-footer-link-${index}-${i}`}
                      className="ml-2 border-gray-600 border rounded-full p-2 hover:bg-slate-400 transition-colors duration-100"
                    >
                      <Link
                        href={l.link}
                        target="_blank"
                        className=" "
                        title={l.title}
                      >
                        {l.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
