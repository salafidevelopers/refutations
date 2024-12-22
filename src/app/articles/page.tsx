"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import posts from "@/data/featured-articles.json";
import Pposts from "@/data/popular-post.json";

import Aside from "@/components/aside";
import Badge from "@/components/badge";
import BannerSection from "@/components/banner-section";
import Card from "@/components/card";
import HeroSection from "@/components/hero-section";
import RecentArticles from "@/components/recent-articles";

import "@/app/globals.css";

export default function Home() {
  const [visiblePosts, setVisiblePosts] = useState(posts.slice(0, 2));
  const [index, setIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 2) % posts.length);
        setVisiblePosts(posts.slice(index, index + 2));
        setFadeClass("fade-in");
        setTimeout(() => {
          setFadeClass("");
        }, 1000); // Duration of the fade-in animation
      }, 1000); // Duration of the fade-out animation
    }, 5000); // Change cards every 5 seconds

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="flex flex-col">
      <HeroSection path={"/"} heroclass="bg-[#F1F5FF] md:flex-col">
        <div className="mx-auto flex origin-top scale-75 gap-20 pt-20 md:scale-100 md:flex-col">
          <div>
            <p className="mb-5 self-start text-xl font-semibold md:ml-5">
              <span className="mr-1 bg-black py-1 pr-1 text-white">
                Featured
              </span>
              This Month
            </p>
            <section
              className={`grid w-[62vw] grid-cols-2 gap-5 md:w-screen md:grid-cols-1 md:justify-items-center ${fadeClass}`}
            >
              {visiblePosts.map((post) => (
                <Card
                  path={post.img}
                  className="flex h-fit max-w-[30.9vw] flex-col rounded-3xl rounded-e rounded-s p-4 md:max-w-[80%]"
                  img="rounded-s rounded-e order-3"
                  key={post.id}
                >
                  <div className="order-1 mb-4 mt-6 flex">
                    <div>
                      <Badge className="rounded-e rounded-s bg-slate-100 px-2 py-1 text-[clamp(0.75rem,0.7188rem+0.1563vw,0.875rem)] text-[#041D5B]">
                        {post.badge}
                      </Badge>
                    </div>
                  </div>

                  <p className="order-2 mb-5 text-[clamp(1rem,0.875rem+0.625vw,1.5rem)] font-semibold">
                    {post.title}
                  </p>

                  <div className="order-3 mt-5 flex justify-between text-[12px] text-[#97989F] md:flex-col md:gap-1">
                    <p>{post.author}</p>
                    <span className="md:hidden">|</span>
                    <div className="flex gap-2">
                      {" "}
                      <div className="relative h-[12px] w-[12px] self-center">
                        <Image
                          src="/svg/calender-img.svg"
                          alt="clock image"
                          fill
                          className="object-contain"
                        />
                      </div>
                      {post.date}
                    </div>
                    <span className="md:hidden">|</span>
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
                </Card>
              ))}
            </section>
          </div>
          <div className="flex flex-col">
            <p className="mb-11 self-start text-xl font-semibold md:ml-5">
              <span className="mr-1 bg-black py-1 pr-1 text-white">
                Popular
              </span>
              Posts
            </p>
            <section className="flex flex-col md:px-10">
              {Pposts.map((post) => (
                <div key={post.id} className="mt-5 self-start">
                  <Badge className="bg-[#DFF1F0]"> {post.Badge}</Badge>
                  <div className="mt-5">{post.Title}</div>
                  <div className="order-3 mt-5 flex justify-between text-[12px] text-[#97989F]">
                    <p>{post.author}</p>|
                    <div className="flex gap-2">
                      {" "}
                      <div className="relative h-[12px] w-[12px] self-center">
                        <Image
                          src="/svg/calender-img.svg"
                          alt="calender image"
                          fill
                          className="object-contain"
                        />
                      </div>
                      {post.date}
                    </div>
                    |
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
                  <div className="my-5">{post.body}</div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </HeroSection>
      <div className="mx-auto mt-20 flex w-fit gap-16 xl:flex-col lg:mb-[10vw] lg:w-[80vw] lg:scale-100 md:w-screen">
        <RecentArticles />
        <Aside />
      </div>
      <BannerSection bclass="my-0" />
    </div>
  );
}
