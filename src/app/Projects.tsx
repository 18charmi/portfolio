import { useState } from "react";
import cx from "classnames";
import Image from "next/image";
import ProjectPreview from "./ProjectPreview";

const PROJECT_DETAILS = [
  {
    name: "Simwa",
    description: `
SIMWA : Surgical Instruments Merchandising Web Application
- Easy to use: Web application for Inventory Management & Billing.
- Allows user to enter their clients, suppliers, products.
- Keeps track for existing product.
- Maintains record for client and suppliers payments.
- Allows PDF invoice generation`,
    link: "https://youtu.be/ctAPJoRyyMw",
    image: "/proj-1.png",
  },
  {
    name: "Responsive Site Design",
    description: `
A Responsive Website Clone using TailwindCss.
- Implemented Smooth Animations
- Responsive Mobile view`,
    link: "https://responsive-design-clone.netlify.app/",
    image: "/proj-2.png",
  },
  {
    name: "Invoice Generator",
    description: `
A simple invoice generator web application created in Nextjs.
- Allows user to generate the invoice by easy selection.
- Invoice generation automates the calculation according to selections.
(reducing human error in calculation)
- The generate Invoice can be easily downloaded in .pdf format
- Listing of clients, products are statically defined for demo purpose.`,
    link: "https://invoice-generator-example.netlify.app/",
    image: "/proj-3.png",
  },
];
export default function Projects() {
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
          {PROJECT_DETAILS.map((d, i) => (
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
            project={PROJECT_DETAILS[activeIndex]}
            onClose={() => updateActiveIndex(undefined)}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
