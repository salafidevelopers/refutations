import Card from "@/components/card";

import lessons from "../data/featured-lessons.json";
import data from "../data/new-features.json";
import Button from "./button-1";
import FeaturedLessons from "./featured-lessons";

const FeatureSection = () => {
  return (
    <section className="mx-auto flex w-fit max-w-7xl flex-col pb-1 pt-10">
      <p className="mb-11 self-start text-xl font-semibold">
        <span className="mr-1 bg-[#292C59] py-1 pr-1 text-white">Featured</span>
        This Month{" "}
      </p>
      <section className="flex gap-16 self-center 2xl:w-[calc(100vw-10rem)] lg:gap-10 md:w-[calc(100vw-3rem)] md:flex-col md:gap-[20vw]">
        <Card
          path="/images/featured-section-image.jpg"
          className="flex h-fit max-w-[800px] flex-col rounded-3xl border-2 border-black p-5 xl:max-w-[1.5fr] md:rounded-e md:rounded-s"
          img="rounded-3xl md:rounded-s md:rounded-e"
        >
          <p className="mb-4 mt-8 text-[clamp(0.75rem,0.7188rem+0.1563vw,0.875rem)] font-medium text-[#4C4C4C]">
            By{" "}
            <span className="font-semibold text-[#4D5077]">{data.author}</span>|{" "}
            <span> {data.date}</span>
          </p>
          <p className="mb-5 text-[clamp(1rem,0.8125rem+0.9375vw,1.45rem)] font-semibold text-[#232536]">
            {data.title}
          </p>
          <p className="mb-4 text-[clamp(0.75rem,0.6875rem+0.3125vw,1rem)] text-[#6D6E76]">
            {data.body}
          </p>
          <br />
          <Button />
        </Card>

        <section className="flex h-fit max-w-[480px] flex-col gap-3 xl:max-w-[1fr]">
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
