import cx from "classnames";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

interface IFooter {
  links: Array<{
    title: string;
    list: Array<{ id: string; title: string; link: string }>;
  }>;
}
function Footer({ links }: IFooter) {
  function renderIcon(id: string) {
    switch (id) {
      case "linkedin":
        return <Linkedin size={16} />;
        break;
      case "github":
        return <Github size={16} />;
        break;
      case "email":
        return <Mail size={16} />;
        break;
    }
  }
  return (
    <footer className="w-full mx-auto max-w-md md:max-w-5xl">
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
            {links.map((nav, index) => (
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
                      {nav.title}
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
                        {renderIcon(l.id)}
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
