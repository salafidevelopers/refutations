"use client";

import { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header id="/">
      <nav className=" flex p-[1.5vw] sm:p-5 justify-center max-w-screen">
        {/* logo start */}
        <section className="self-center">
          <Link href={"#"} className="peer p-3">
            <span className="text-2xl text-white bg-[#041D5B] pr-1">
              Rudood
            </span>
            <span className="text-xl font-semibold text-[#041D5B]">Box</span>
            <Image
              src="/Vector.svg"
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
          className="mx-auto w-[clamp(0px,20vw,320px )] h-fit text-black border border-[#041D5B] [border-radius:7px] px-2 py-4 lg:hidden md:hidden"
        />
        {/* searchbox end */}
        {/* nav links start */}
        {/* sidebar start */}
        <div
          className={`fixed ${isOpen ? "flex translate-x-0 " : "opacity-0 -translate-x-full"} flex-col w-[70vw] h-svh py-10 bg-neutral-50 z-[1000] top-0 left-0 shadow-slate-950/100 shadow-2xl transform transition-all duration-5000`}
        >
          <button
            onClick={toggleSidebar}
            className="text-black p-4 active:text-[#041D5B]"
          >
            ✖
          </button>
          <ol className="list-none flex flex-col gap-5 items-center  text-[#041D5B] z-[2000]">
            <li className="">
              <Link href={"#"} className=" p-5">
                Article
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className=" p-3">
                Ebooks
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className="p-3">
                Audios
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className="p-3">
                Videos
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className="p-3">
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
          className="size-6 hidden lg:block lg:ml-auto lg:text-[#041D5B]"
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
        <ol className="list-none flex gap-5 items-center md:hidden lg:hidden text-[#041D5B] ">
          <li className="inline-flex relative items-start justify-center">
            <Link href={"#"} className="peer p-3">
              Article
            </Link>
            <div className="hidden peer-hover:block absolute z-30 bg-white p-3  hover:block mt-12 shadow-slate-200 shadow-sm">
              <p>Refutations</p>
              <p>Explanations</p>
              <p>Tarbiyyah</p>
            </div>
          </li>
          <li className="inline-flex relative items-start justify-center">
            <Link href={"#"} className="peer p-3">
              Ebooks
            </Link>
            <div className="hidden peer-hover:block absolute z-30 bg-white p-3  hover:block mt-12 shadow-slate-200 shadow-sm">
              <p>Refutations</p>
              <p>Explanations</p>
              <p>Tarbiyyah</p>
            </div>
          </li>
          <li className="inline-flex relative items-start justify-center">
            <Link href={"#"} className="peer p-3">
              Audios
            </Link>
            <div className="hidden peer-hover:block absolute z-30 bg-white p-3  hover:block mt-12 shadow-slate-200 shadow-sm">
              <p>Refutations</p>
              <p>Explanations</p>
              <p>Tarbiyyah</p>
            </div>
          </li>
          <li className="inline-flex relative items-start justify-center">
            <Link href={"#"} className="peer p-3">
              Videos
            </Link>
            <div className="hidden peer-hover:block absolute z-30 bg-white p-3  hover:block mt-12 shadow-slate-200 shadow-sm">
              <p>Refutations</p>
              <p>Explanations</p>
              <p>Tarbiyyah</p>
            </div>
          </li>
          <li className="inline-flex relative items-start justify-center">
            <Link href={"#"} className="peer p-3">
              About us
            </Link>
            <div className="hidden peer-hover:block absolute z-30 bg-white p-3  hover:block mt-12 shadow-slate-200 shadow-sm">
              <p>Refutations</p>
              <p>Explanations</p>
              <p>Tarbiyyah</p>
            </div>
          </li>
          <li className="inline-flex relative items-start justify-center">
            {" "}
            <button className="bg-darkblue-900 rounded-xl px-5 py-2 text-white">
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
