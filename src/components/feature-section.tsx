import Card from "@/components/card";

import lessons from "../data/featured-lessons.json";
import data from "../data/new-features.json";
import Button from "./button-1";
import FeaturedLessons from "./featured-lessons";

const FeatureSection = () => {
  return (
    <section className="pt-[10vw] pb-1 flex flex-col mx-auto w-fit ">
      <p className="mb-11 font-semibold text-xl self-start">
        <span className="text-white bg-[#292C59] py-1 pr-1 mr-1">Featured</span>
        This Month{" "}
      </p>
      <section className="flex md:flex-col gap-[10vw] lg:gap-[5vw] md:gap-[20vw] 2xl:w-[calc(100vw-10rem)]  md:w-[calc(100vw-3rem)] self-center">
        <Card
          path="/b79f853c1978dd3ad3c8794eb62ee306.jpg"
          className="max-w-[800px] xl:max-w-[1.5fr] h-fit rounded-3xl md:rounded-s md:rounded-e flex flex-col p-[3vw] border-2 border-black"
          img="rounded-3xl md:rounded-s md:rounded-e"
        >
          <p className="text-[#4C4C4C] font-medium text-[clamp(0.75rem,0.7188rem+0.1563vw,0.875rem)] mt-8 mb-4">
            By{" "}
            <span className="text-[#4D5077] font-semibold ">
              {data.author}{" "}
            </span>
            l<span> {data.date}</span>
          </p>
          <p className="text-[#232536] font-semibold text-[clamp(1rem,0.8125rem+0.9375vw,1.75rem)] mb-[clamp(2rem,1.7031rem+1.4844vw,3.1875rem)]">
            {data.title}
          </p>
          <p className="text-[#6D6E76] text-[clamp(0.75rem,0.6875rem+0.3125vw,1rem)]">
            {data.body}
          </p>
          <br />
          <Button />
        </Card>

        {/* clamp(30rem,44.9vw,44.9rem) */}

        <section className="max-w-[480px] xl:max-w-[1fr] flex flex-col gap-3 h-fit ">
          {lessons.map((lessons) => (
            <FeaturedLessons
              key={lessons.id}
              body={lessons.body}
              date={lessons.date}
              author={lessons.author}
            />
          ))}
        </section>
      </section>
    </section>
  );
};

export default FeatureSection;
