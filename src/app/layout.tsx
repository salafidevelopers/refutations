import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Rudood Box",
  description: "Refutation website",
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-[#F8FAFF] `}>
        
        <header id="/" className="">
          <nav className=" flex p-5 justify-center">
            {/* logo start */}
            <section className="self-center">
              <Link href={"#"}>
                <span className="text-2xl text-white bg-[#041D5B] pr-1">
                  Rudood
                </span>
                <span className="text-xl font-semibold text-[#041D5B]">
                  Box
                </span>
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
              className="mx-auto w-80 h-fit text-black border border-[#041D5B] [border-radius:7px] px-2 py-4 lg:block md:hidden"
            />
            {/* searchbox end */}
            {/* nav links start */}
            <ol className="list-none flex gap-5 items-center lg:block md:hidden text-[#041D5B] ">
            <li>
                <Link href={"#"}>Articles</Link>
              </li>
              <li>
                <Link href={"#"}>Ebooks</Link>
              </li>
              <li>
                <Link href={"#"}>Audios</Link>
              </li>
              <li>
                <Link href={"#"}>Videos</Link>
              </li>
              <li>
                <Link href={"#"}>About us</Link>
              </li>
              <li>
                {" "}
                <button className="bg-darkblue-900 rounded-xl px-5 py-2 text-white">
                  Contact us
                </button>
              </li>
            </ol>
            {/* nav link end */}
          </nav>
          {/* sidebar start */}
          {/* <div className="flex">
            <input
              type="checkbox"
              name="navbar1"
              id="navbar1"
              className="peer/navbar1 hidden"
            />

            <label htmlFor="navbar1" className="hidden sm:block md:block">
              +
            </label>
            <div className=" fixed hidden top-0 w-[50%] h-screen bg-red-800 peer-checked/navbar1:block "></div>
            <div className=" fixed hidden top-0 left-[50%] w-[50%] h-screen bg-black opacity-50 peer-checked/navbar1:block "></div>
          </div> */}
          {/* sidebar end */}
        </header>


        <main>{children}</main>


        <footer className=" grid grid-cols-4 gap-x-5 gap-y-5 sm:grid-cols-1 px-36 mb-16 py-7 sm:px-5 sm:py-5 text-[15px] items-start">
          
          <section className="">
            {/* logo start */}
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
            {/* logo end */}
            {/* phrase start */}
            <p className="mt-8 text-[#555555]">
              Your Trusted Platform for Authentic Islamic Posts
            </p>
            {/* phrase end */}
          </section>
          {/* categories start */}
          <section className=" text-[#555555]">
            <ol className="list-none flex flex-col gap-5">
              <li className="font-bold text-[#041D5B]">Categories</li>
              <li>
                <Link href={"#"}>Aqeedah</Link>{" "}
              </li>
              <li>
                <Link href={"#"}>Manhaj</Link>
              </li>
              <li>
                <Link href={"#"}> Biography</Link>
              </li>
              <li>
                <Link href={"#"}>Tarbiyah</Link>{" "}
              </li>
              <li>
                <Link href={"#"}>Refutations</Link>
              </li>
            </ol>
          </section>
          {/* categories end */}
          {/* Quick links start */}
          <section className=" text-[#555555]">
            <ol className="list-none flex flex-col gap-5">
              <li className="font-bold text-[#041D5B]">Quick Links</li>
              <li>
                <Link href={"#"}>FAQ</Link>
              </li>
              <li>
                <Link href={"#"}>Terms & conditons</Link>
              </li>
              <li>
                <Link href={"#"}>support</Link>
              </li>
              <li>
                <Link href={"#"}>Privacy Policy</Link>
              </li>
            </ol>
          </section>
          {/* Quick links end */}
          {/* prompt start */}
          <section className="">
            <p className="font-bold text-[#041D5B] mb-5">
              Subscribe for newsletter
            </p>
            {/* email start */}
            <section className="flex mb-11">
              <input
                type="email"
                name=""
                id=""
                placeholder="Your Email"
                className="border border-[#041D5B]  rounded-l-[6px] placeholder:relative placeholder:left-2"
              />
              <input
                type="button"
                value="Subscribe"
                className="bg-darkblue-950 text-white px-10 py-4 rounded-r-[6px]"
              />
            </section>
            {/* email end */}
            {/* socialmedia links start */}
            <section>
              <div className="text-[#041D5B] font-bold mb-7">Follow On:</div>

              <ol className="list-none flex gap-5">
                <li className="">
                  <Image
                    src="/Frame 3597.svg"
                    alt=" Twitter icon"
                    width={24}
                    height={24}
                    className="inline"
                  />
                </li>
                <li className="">
                  <Image
                    src="/Frame 3542.svg"
                    alt="Facebook icon"
                    width={24}
                    height={24}
                    className="inline"
                  />
                </li>
                <li className="">
                  <Image
                    src="/Frame 3541.svg"
                    alt="Pininterest icon"
                    width={24}
                    height={24}
                    className="inline"
                  />
                </li>
                <li className="">
                  <Image
                    src="/Frame 3540.svg"
                    alt="Instagram icon"
                    width={24}
                    height={24}
                    className="inline"
                  />
                </li>
              </ol>
            </section>
            {/* socialmedia links end */}
          </section>
          {/* prompt end */}
        </footer>
        
        <footer className="flex mb-7 bg-[#F8FAFF]">
          <p className="w-fit mx-auto text-xs text-[#555555] ">
            Designed By Pryma Studio
          </p>
        </footer>
      </body>
    </html>
  );
}
