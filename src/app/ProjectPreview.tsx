import cx from "classnames";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProjectPreview({
  project,
  onClose,
}: {
  project: { name: string; description: string; image: string; link: string };
  onClose: (v: boolean) => void;
}) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div
      className={cx(
        "z-10 transition-all ease-in-out duration-500 bg-gray-100 flex flex-col items-center w-4/5 h-fit mx-auto  absolute inset-0 border border-black rounded text-gray-800",
        { "scale-0": !loaded },
        { "scale-1": loaded }
      )}
    >
      <div className="w-full h-fit flex justify-between border-b border p-4">
        <span className="font-bold text-xl">{project.name}</span>

        <X
          onClick={() => onClose(false)}
          size={14}
          className="m-2 text-gray-900 cursor-pointer"
        />
      </div>
      <div className="w-4/5 h-[450px] mx-auto overflow-scroll no-scrollbar py-4">
        {/* Image */}
        <div className="flex justify-end">
          <Image
            src={project.image}
            alt={project.name}
            height={200}
            width={200}
            className="rounded-md"
          />  
        </div>
        {/* description */}
        <div className="font-bold">PROJECT DESCRIPTION: </div>
        <pre className="mb-4">{project.description}</pre>

        <a
          href={project.link}
          target="_blank"
          className="text-blue-800 font-semibold"
        >
          PREVIEW LINK
        </a>
      </div>
    </div>
  );
}
