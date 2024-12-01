import Link from "next/link";

import Card from "@/components/card";

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
          <p className="text-[#4C4C4C] font-medium text-sm mt-8 mb-4">
            By{" "}
            <span className="text-[#4D5077] font-semibold ">
              Abu Anwar Al-Asalafy{" "}
            </span>
            l<span> May 23, 2022</span>
          </p>
          <p className="text-[#232536] font-semibold text-2xl mb-12">
            Are Street Protests, Demonstrations and Boycotting of Goods
            Legitimate Means of Response to Oppression?
          </p>
          <p className="text-[#6D6E76]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <br />
          <Link
            href={"/"}
            className="py-4 px-12 text-white bg-[#292C59] rounded-xl w-fit"
          >
            Read More &gt;{" "}
          </Link>
        </Card>

        {/* clamp(30rem,44.9vw,44.9rem) */}

        <section className="max-w-[480px] xl:max-w-[1fr] flex flex-col gap-3 h-fit self-center">
          <div className="bg-[#C4C4C447] py-10 px-8">
            <p>
              I took a loan from a friend in dollars, is it allowed to repay the
              loan with the equivalent amount in another currency? Imam Ibn Baz
            </p>
            <p>Abu Muhsinah As-Salafy Aug 23, 2021 </p>
          </div>
          <div className="bg-[#C4C4C447] py-10 px-8">
            <p>
              I took a loan from a friend in dollars, is it allowed to repay the
              loan with the equivalent amount in another currency? Imam Ibn Baz
            </p>
            <p>Abu Muhsinah As-Salafy Aug 23, 2021 </p>
          </div>
          <div className="bg-[#C4C4C447] py-10 px-8">
            <p>
              Understanding the Muslim Dress Code: Modesty for Men and the Hijāb
              for Women (Islam 4.5 and 4.6)
            </p>
            <p>Abu Muhsinah As-Salafy Aug 23, 2021 </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default FeatureSection;
