import Image from "next/image";
import Link from "next/link";

import Articles from "@/data/articles.json";
import posts from "@/data/recent-articles.json";

import Card from "@/components/card";
import HeroSection from "@/components/hero-section";

function ArticeDetails() {
  return (
    <section>
      <HeroSection
        path={"/images/article-details-hero.png"}
        heroclass="h-[50vh] md:h-[30vh]"
      >
        {" "}
      </HeroSection>
      <section className="mx-auto my-20 w-[80vw]">
        <div className="flex items-center gap-2">
          <div className="relative h-[46px] w-[46px] self-center">
            <Image
              src="/svg/article-author-logo.svg"
              alt="clock image"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <div className="font-bold text-[#760808]">{Articles.author}</div>
            <div className="text-xs text-[#6D6E76]">{Articles.postDate}</div>
          </div>
        </div>
        <div className="my-10 border border-[#C4D1D1] px-10 py-20">
          <div className="mb-5 text-3xl font-extrabold text-[#041D5B]">
            {Articles.title}
          </div>
          <div className="mb-3">{Articles.contentIntro}</div>
          <div>{Articles.contentBody}</div>
          <div className="mt-3">{Articles.contentEnd}</div>
        </div>
      </section>
      <section className="mx-auto mb-16 flex w-fit flex-col lg:mx-auto md:mx-0">
        <p className="mb-8 text-xl font-semibold md:px-[4vw]">Related Posts</p>
        <section className="grid w-[80vw] grid-cols-2 justify-items-center gap-10 md:w-screen md:grid-cols-1">
          {posts.slice(0, 4).map((post) => (
            <Card
              path={post.img}
              className="flex h-fit max-w-full flex-col rounded-3xl rounded-e rounded-s border border-[#E8E8EA] bg-white p-4 md:max-w-[80%]"
              img="rounded-s rounded-e h-[15vw] md:h-auto order-1"
              key={post.id}
              link="/articles/article-details"
            >
              <Link href="/articles/article-details" className="order-2">
                <p className="mt-5 text-[clamp(1rem,0.875rem+0.625vw,1.5rem)] font-semibold">
                  {post.title}
                </p>
              </Link>

              <div className="order-3 mt-5 flex justify-between text-[clamp(0.75rem,0.6875rem+0.3125vw,1rem)] text-[#97989F]">
                <p>{post.author}</p>
                <p>{post.date}</p>
              </div>
            </Card>
          ))}

          {/* clamp(30rem,44.9vw,44.9rem) */}
        </section>
      </section>
    </section>
  );
}

export default ArticeDetails;
