import cx from "classnames";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import useComponentVisible from "@/hoc/useComponentVisible";

export default function ProjectPreview({
  project,
  onClose,
}: {
  project: { name: string; description: string; image: string; link: string };
  onClose: () => void;
}) {
  const { ref, isComponentVisible } = useComponentVisible(true);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!isComponentVisible) onClose();
  }, [isComponentVisible]);

  return (
    <div
      ref={ref}
      className={cx(
        "max-w-[350px] max-h-[500px] bg-gray-100 z-10 transition-all ease-in-out duration-500 border border-black rounded text-gray-800",
        { "scale-0": !loaded },
        { "scale-1": loaded }
      )}
    >
      <div className="w-full h-fit flex justify-between border-b border p-4">
        <span className="font-bold text-xl">{project.name}</span>

        <X
          onClick={() => onClose()}
          size={14}
          className="m-2 text-gray-900 cursor-pointer"
        />
      </div>
      <div className="w-full h-[450px] mx-auto  p-4 relative">
        {/* Image */}
        <div className="flex justify-center mb-4">
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
        <pre className="whitespace-pre-wrap h-[175px] overflow-scroll no-scrollbar">{project.description}</pre>

        <a
          href={project.link}
          target="_blank"
          className="text-blue-800 font-semibold absolute bottom-8"
        >
          PREVIEW LINK
        </a>
      </div>
    </div>
  );
}
