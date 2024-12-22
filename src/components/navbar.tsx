"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header id="/">
      <nav className="max-w-screen flex justify-center p-[1.5vw] sm:p-5">
        {/* logo start */}
        <section className="self-center">
          <Link href={"/"} className="peer p-3">
            <span className="bg-[#041D5B] pr-1 text-2xl text-white">
              Rudood
            </span>
            <span className="text-xl font-semibold text-[#041D5B]">Box</span>
            <Image
              src="/svg/Vector.svg"
              alt="box icon"
              width={8}
              height={8}
              className="inline"
            />
          </Link>
        </section>
        {/* logo end*/}
        {/* searchbox start */}
        <input
          type="text"
          name=""
          id=""
          placeholder="Search..."
          className="w-[clamp(0px,20vw,320px )] mx-auto h-fit border border-[#041D5B] px-2 py-4 text-black [border-radius:7px] lg:hidden md:hidden"
        />
        {/* searchbox end */}
        {/* nav links start */}
        {/* sidebar start */}
        <div
          className={`fixed ${isOpen ? "flex translate-x-0" : "-translate-x-full opacity-0"} duration-5000 left-0 top-0 z-[1000] h-svh w-[70vw] transform flex-col bg-neutral-50 py-10 shadow-2xl shadow-slate-950/100 transition-all`}
        >
          <button
            onClick={toggleSidebar}
            className="p-4 text-black active:text-[#041D5B]"
          >
            ✖
          </button>
          <ol className="z-[2000] flex list-none flex-col items-center gap-5 text-[#041D5B]">
            <li className="">
              <Link href={"/articles"} className="p-5">
                Article
              </Link>
            </li>
            <li className="">
              <Link href={"/ebooks"} className="p-3">
                Ebooks
              </Link>
            </li>
            <li className="">
              <Link href={"/audios"} className="p-3">
                Audios
              </Link>
            </li>
            <li className="">
              <Link href={"/videos"} className="p-3">
                Videos
              </Link>
            </li>
            <li className="">
              <Link href={"/about us"} className="p-3">
                About us
              </Link>
            </li>
          </ol>
        </div>
        {/* sidebar end */}

        {/* toggle start */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="hidden size-6 lg:ml-auto lg:block lg:text-[#041D5B]"
          onClick={toggleSidebar}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
        {/* toggle end */}

        {/* navbar start */}
        <ol className="flex list-none items-center gap-5 text-[#041D5B] lg:hidden md:hidden">
          <li className="relative inline-flex items-start justify-center">
            <Link href={"/articles"} className="peer p-3">
              Article
            </Link>
          </li>
          <li className="relative inline-flex items-start justify-center">
            <Link href={"/ebooks"} className="peer p-3">
              Ebooks
            </Link>
          </li>
          <li className="relative inline-flex items-start justify-center">
            <Link href={"/audios"} className="peer flex items-center p-3">
              Audios
              <span className="ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </Link>

            <div className="absolute z-30 mt-12 hidden bg-white p-1 shadow-sm shadow-slate-200 hover:block peer-hover:block">
              <p className="p-2 hover:bg-[#041D5B] hover:text-white">
                Refutations
              </p>
              <p className="p-2 hover:bg-[#041D5B] hover:text-white">
                Explanations
              </p>
              <p className="p-2 hover:bg-[#041D5B] hover:text-white">
                Tarbiyyah
              </p>
            </div>
          </li>
          <li className="relative inline-flex items-start justify-center">
            <Link href={"/videos"} className="peer p-3">
              Videos
            </Link>
          </li>

          <li className="relative inline-flex items-start justify-center">
            <Link href={"/about-us"} className="peer p-3">
              About us
            </Link>
          </li>
          <li className="relative inline-flex items-start justify-center">
            {" "}
            <button className="rounded-xl bg-darkblue-900 px-5 py-2 text-white">
              Contact us
            </button>
          </li>
        </ol>
        {/* navbar end */}

        {/* nav link end */}
      </nav>
    </header>
  );
};

export default Navbar;
