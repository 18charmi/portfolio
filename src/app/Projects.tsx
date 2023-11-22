import { useState } from "react";
import cx from "classnames";
import Image from "next/image";
import ProjectPreview from "./ProjectPreview";

export type TProject = {
  name: string;
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
    <div className="mt-24 py-24 w-screen text-slate-300 relative">
      <div className="px-4 md:px-16 relative">
        <h3 className="w-full py-4 text-center font-bold border-y-2 my-10 text-lg">
          Projects
        </h3>

        <div className="flex flex-row flex-wrap gap-12 justify-around py-8">
          {list.map((d, i) => (
            <div
              className={cx(
                "flex justify-center items-center flex-col px-8 py-6 bg-gray-500 text-slate-100 font-semibold cursor-pointer bg-opacity-75 rounded-md",
                "hover:scale-[1.25] transition-all ease-in-out"
              )}
              key={`project-${d.name}`}
              onClick={() => updateActiveIndex(i)}
            >
              <Image
                src={d.image}
                alt={d.name}
                height={200}
                width={200}
                priority={false}
                className="rounded-md"
              />
              <p className="uppercase pt-4">{d.name}</p>
            </div>
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
