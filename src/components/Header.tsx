"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import cx from "classnames";
import Button from "./Button";
import { Code2 } from "lucide-react";

interface IHeader {
  links: Array<{ title: string; link: string; id: string }>;
  cta: { title: string; id: string };
}

function Header({ links, cta }: IHeader) {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 80) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const scrolltoHash = (element_id: string) => {
    const element = document.getElementById(element_id);
    if (element)
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
  };
  return (
    <header className="px-6 py-5 fixed w-screen z-50 max-w-md md:max-w-5xl mx-auto left-1/2 -translate-x-1/2">
      <div
        className={cx(
          "flex justify-between items-center mx-auto my-0 relative before:w-full before:absolute before:-bottom-6 before:bg-gradient-to-r from-transparent via-slate-600 to-transparent before:h-[1px]",
          {
            "before:opacity-0": animateHeader,
          },
          "trasition-all ease-in-out duration-700"
        )}
        id="header-inner"
      >
        <Link
          href={"/"}
          className={cx(
            "flex items-center relative",
            {
              "opacity-0 -translate-x-3": animateHeader,
            },
            "trasition ease-in-out duration-500 "
          )}
          id="header-brand"
        >
          <span
            className="text-white text-base font-bold"
            id="header-brand-name"
          >
            <Code2 size={40} />
          </span>
        </Link>

        <nav className="hidden lg:block rounded-full grad-up backdrop-blur-md ">
          <ul
            className={cx(
              "border border-gray-500 rounded-[inherit] text-white flex items-center p-1 relative overflow-hidden h-12",
              { "w-[388px]": animateHeader },
              { "w-[250px]": !animateHeader },
              "trasition ease-in-out duration-500 "
            )}
          >
            {links.map((d, i) => (
              <li
                key={`navSection ${i}`}
                className={cx(
                  "mr-1 rounded-full hover:bg-gray-500",
                  "transition-colors ease-in-out duration-300"
                )}
              >
                <Link
                  href={d.link}
                  className="flex items-center py-2 px-5 text-text-color text-sm cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrolltoHash(d.id);
                  }}
                >
                  {d.title}
                </Link>
              </li>
            ))}
            <li className={"flex justify-center items-center "}>
              <div
                className="h-[20px] w-[1px] bg-gray-500 mr-4"
                id="header-nav-divider"
              ></div>
              <Button
                className={cx(
                  "!rounded-full bg-gradient-to-r from-background-light to-gradient-yellow  text-background w-max"
                )}
                onClick={() => scrolltoHash(cta.id)}
              >
                {cta.title}
              </Button>
            </li>
          </ul>
        </nav>

        <Button
          className={cx(
            "border border-gray-400 rounded bg-gradient-to-r from-background-light  to-gradient-yellow  bg-clip-text text-transparent hover:text-white hover:bg-clip-padding",
            { "opacity-0 translate-x-5": animateHeader },
            "transition ease-in-out duration-500 "
          )}
          onClick={() => scrolltoHash(cta.id)}
        >
          {cta.title}
        </Button>
      </div>
    </header>
  );
}
export default Header;
