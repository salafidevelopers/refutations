import Image from "next/image";
import Link from "next/link";

import Posts from "@/data/recent-posts.json";

import {
  Pagination,
  PaginationContent, // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import Badge from "@/components/badge";
import Card from "@/components/card";

function RecentArticles() {
  return (
    <>
      <section className="mx-auto flex w-fit flex-col md:mb-16">
        <p className="mb-7 ml-5 self-start text-xl font-semibold">
          <span className="mr-1 bg-black py-1 pr-1 text-white">Recently</span>
          Posted ({Posts.length})
        </p>

        <section className="grid w-[62vw] grid-cols-2 gap-5 md:w-fit md:grid-cols-1 md:justify-center md:justify-items-center">
          {Posts.map((post) => (
            <Card
              path={post.img}
              key={post.id}
              className="flex h-fit max-w-[30.9vw] flex-col rounded-3xl rounded-e rounded-s p-4 md:max-w-[80%]"
              img="rounded-s rounded-e h-[15vw] md:h-auto"
              link="/articles/article-details"
              lclass="order-1"
            >
              <div className="order-2 mb-4 mt-6 flex">
                <Badge className="rounded-e rounded-s bg-slate-100 px-2 py-1 text-[clamp(0.75rem,0.7188rem+0.1563vw,0.875rem)] text-[#041D5B]">
                  {post.badge}
                </Badge>
              </div>
              <Link href="/articles/article-details" className="order-3">
                <p className="text-[clamp(1rem,0.875rem+0.625vw,1.5rem)] font-semibold">
                  {post.title}
                </p>
              </Link>

              <div className="order-4 my-5 flex text-[12px] text-[#97989F] xl:flex-col md:gap-1">
                <p>{post.author}</p>
                <span className="mx-2 xl:hidden">|</span>
                <div className="flex gap-2">
                  {" "}
                  <div className="relative h-[12px] w-[12px] self-center">
                    <Image
                      src="/svg/calender-img.svg"
                      alt="calender icon image"
                      fill
                      className="object-contain"
                    />
                  </div>
                  {post.date}
                </div>
                <span className="mx-2 xl:hidden">|</span>
                <div className="flex gap-2">
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

              <div className="order-5">{post.body}</div>
            </Card>
          ))}

          {/* clamp(30rem,44.9vw,44.9rem) */}
        </section>
        <Pagination className="my-20">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className="checked:bg-[#041D5B] checked:text-white active:bg-[#041D5B] active:text-white"
                href="#"
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className="checked:bg-[#041D5B] checked:text-white active:bg-[#041D5B] active:text-white"
                href="#"
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className="checked:bg-[#041D5B] checked:text-white active:bg-[#041D5B] active:text-white"
                href="#"
              >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className="checked:bg-[#041D5B] checked:text-white active:bg-[#041D5B] active:text-white"
                href="#"
              >
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className="checked:bg-[#041D5B] checked:text-white active:bg-[#041D5B] active:text-white"
                href="#"
              >
                5
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </>
  );
}

export default RecentArticles;
