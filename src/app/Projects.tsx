import { useState } from "react";
import cx from "classnames";
import Image from "next/image";

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
    name: "Simwa1",
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
    name: "Simwa2",
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
];
export default function Projects() {
  const [activeIndex, updateActiveIndex] = useState(0);
  return (
    <div className="mt-24 py-24 w-screen text-slate-300">
      <div className="px-4 md:px-16">
        <h3 className="w-full py-4 text-center font-bold border-y-2 my-10 text-lg">
          Projects
        </h3>

        <div className="flex flex-row flex-wrap gap-10 justify-around py-8">
          {PROJECT_DETAILS.map((d, i) => (
            <div
              className={cx(
                "flex justify-center items-center flex-col px-8 py-8 bg-purple-300 text-gray-800 font-semibold cursor-pointer bg-opacity-75 rounded-md",
                "hover:scale-[1.25] transition-all ease-in-out"
              )}
              key={`project-${d.name}`}
            >
              <Image src={d.image} alt={d.name} height={200} width={200} />
              <p className="uppercase">{d.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
