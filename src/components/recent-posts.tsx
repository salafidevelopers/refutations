import Image from "next/image";

import Badge from "@/components/badge";
import Card from "@/components/card";

import posts from "../data/recent-posts.json";

const RecentPosts = () => {
  return (
    <section className="mx-[4.5vw] mb-16 flex w-fit flex-col lg:mx-auto md:mx-0">
      <p className="mb-8 text-xl font-semibold md:px-[4vw]">
        Recently posted ({posts.length})
      </p>
      <section className="grid w-[62vw] grid-cols-2 gap-[5vw] md:w-screen md:grid-cols-1 md:justify-items-center">
        {posts.map((post) => (
          <Card
            path={post.img}
            className="flex h-fit max-w-[30.9vw] flex-col rounded-3xl rounded-e rounded-s border border-[#E8E8EA] bg-white p-4 md:max-w-[80%]"
            img="rounded-s rounded-e"
            key={post.id}
          >
            <div className="mb-4 mt-6 flex">
              <div>
                <Badge className="rounded-e rounded-s bg-slate-100 px-2 py-1 text-[clamp(0.75rem,0.7188rem+0.1563vw,0.875rem)] text-[#041D5B]">
                  {post.badge}
                </Badge>
              </div>
              <div className="ml-auto flex gap-2">
                <div className="relative h-[12px] w-[12px] self-center">
                  <Image
                    src="/images/clock-icon.png"
                    alt="clock image"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="self-center text-[12px] text-[#777777]">
                  {post.duration}
                </p>
              </div>
            </div>

            <p className="text-[clamp(1rem,0.875rem+0.625vw,1.5rem)] font-semibold">
              {post.title}
            </p>

            <div className="mt-5 flex justify-between text-[clamp(0.75rem,0.6875rem+0.3125vw,1rem)] text-[#97989F]">
              <p>{post.author}</p>
              <p>{post.date}</p>
            </div>
          </Card>
        ))}

        {/* clamp(30rem,44.9vw,44.9rem) */}
      </section>
    </section>
  );
};

export default RecentPosts;
