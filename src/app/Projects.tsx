import { useState } from "react";
import cx from "classnames";
import Image from "next/image";
import ProjectPreview from "./ProjectPreview";

export type TProject = {
  name: string;
  intro: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
};
interface IProjects {
  list: Array<TProject>;
}
export default function Projects({ list }: IProjects) {
  const [activeIndex, updateActiveIndex] = useState<number | undefined>(
    undefined
  );

  return (
    <div className="mt-24 py-24 text-slate-300 relative">
      <div className="px-4 md:px-0 relative">
        <h3 className="w-full py-4 text-center font-bold border-y-2 my-10 text-lg">
          Projects
        </h3>

        <div className="flex flex-row flex-wrap justify-around px-6">
          {list.map((d, i) => (
            <a
              target="_blank"
              href={d.link}
              className={cx(
                "flex flex-col items-start px-8 py-6 my-8 bg-gray-500 text-slate-100 cursor-pointer bg-opacity-75 rounded-md w-[300px]",
                "hover:scale-[1.15] transition-all ease-in-out"
              )}
              key={`project-${d.name}`}
            >
              <Image
                src={d.image}
                alt={d.name}
                height={200}
                width={250}
                priority={false}
                className="rounded-md"
              />
              <div className="w-full text-sm pt-4">
                <p className="text-base uppercase font-semibold ">{d.name}</p>
                <p className="text-gray-400 relative">
                  {d.intro.slice(0, 60)}
                  {d.intro.length > 60 ? "..." : ""}
                  <span
                    className=" text-purple-300 absolute right-1 bottom-0"
                    onClick={(e) => {
                      e.preventDefault();
                      updateActiveIndex(i);
                    }}
                  >
                    read more
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap flex-row gap-2 py-2 justify-start">
                {d.tech.map((tag, i) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md text-xs bg-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
      {typeof activeIndex !== "undefined" ? (
        <div className="absolute inset-0 flex justify-center items-center h-full w-full">
          <ProjectPreview
            project={list[activeIndex]}
            onClose={() => updateActiveIndex(undefined)}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
