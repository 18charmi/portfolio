import Button from "@/components/Button";
import cx from "classnames";
import { CheckCircle } from "lucide-react";
import { useRef } from "react";

interface ITechStack {
  list: Array<{ category: string; list: string[] }>;
}
export default function TechStack({ list }: ITechStack) {
  const ref = useRef(null);
  const scroll = (scrollNext: boolean) => {
    if (ref.current) {
      let container: HTMLDivElement = ref.current;
      let scrollOffset = container.scrollLeft;
      let width = container.offsetWidth;

      if (scrollNext) {
        if (container.scrollLeft >= width * (list.length - 1)) {
          scrollOffset = 0;
        } else {
          scrollOffset += width;
        }
      } else {
        if (container.scrollLeft === 0) {
          scrollOffset = width * list.length;
        } else scrollOffset += -width;
      }

      container.scrollLeft = scrollOffset;
    }
  };
  return (
    <div
      className={cx(
        "pt-24 mx-auto w-4/5 h-[450px] relative rounded-md text-slate-300 top-2"
      )}
    >
      <div className="-z-10 relative border-gradient-animation h-full before:animate-gradientBorder after:animate-gradientBorder after:blur-md ">
        <div className="h-full w-full bg-background rounded-md flex flex-col ">
          <h1 className="text-center pt-4 text-slate-200 text-xl font-bold">
            Tech Stack{" "}
          </h1>
          <div
            className="flex flex-row overflow-y-hidden overflow-x-scroll no-scrollbar w-full h-full  snap-x snap-mandatory scroll-smooth"
            ref={ref}
          >
            {list.map((d) => {
              return (
                <div
                  key={`stack-${d.category}`}
                  className="flex-1 min-w-full p-5 md:p-10 font-medium flex-shrink-0 snap-center"
                >
                  {d.category}
                  <hr />
                  {d.list.map((t) => (
                    <p key={t} className="py-2">
                      <span>
                        <CheckCircle className="inline-block mr-2" size={16} />
                      </span>
                      <span className="text-base">{t}</span>
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-between absolute bottom-0 p-8 w-full">
        <Button onClick={() => scroll(false)}>Prev</Button>
        <Button onClick={() => scroll(true)}>Next</Button>
      </div>
    </div>
  );
}
