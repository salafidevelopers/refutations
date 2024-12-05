import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer
        id="feature"
        className=" grid grid-cols-4 gap-x-5 gap-y-5 xl:gap-y-10 xl:grid-cols-3 md:grid-cols-1 px-[5vw] mb-16 py-7 sm:px-5 sm:py-5 text-[15px] items-start"
      >
        <section className="">
          {/* logo start */}
          <span className="text-2xl text-white bg-[#041D5B] pr-1">Rudood</span>
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
        <section className="sm:justify-self-center flex flex-col">
          <p className="font-bold text-[#041D5B] mb-5">
            Subscribe for newsletter
          </p>
          {/* email start */}
          <section className="flex mb-11 ">
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className="border border-[#041D5B]  rounded-l-[6px] placeholder:relative placeholder:left-2 "
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
            <p className="text-[#041D5B] font-bold mb-7">Follow On:</p>

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
    </div>
  );
};

export default Footer;
