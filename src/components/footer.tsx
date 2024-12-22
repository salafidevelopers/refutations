import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F2F8F7]">
      <div className="grid grid-cols-4 items-start gap-x-5 gap-y-5 px-[5vw] py-7 text-[15px] xl:grid-cols-3 xl:gap-y-10 md:grid-cols-1 sm:px-5 sm:py-5">
        <section className="">
          {/* logo start */}
          <span className="bg-[#041D5B] pr-1 text-2xl text-white">Rudood</span>
          <span className="text-xl font-semibold text-[#041D5B]">Box</span>
          <Image
            src="/svg/Vector.svg"
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
        <section className="text-[#555555]">
          <ol className="flex list-none flex-col gap-5">
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
        <section className="text-[#555555]">
          <ol className="flex list-none flex-col gap-5">
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
        <section className="flex flex-col sm:justify-self-center">
          <p className="mb-5 font-bold text-[#041D5B]">
            Subscribe for newsletter
          </p>
          {/* email start */}
          <section className="mb-11 flex">
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className="rounded-l-[6px] border border-[#041D5B] placeholder:relative placeholder:left-2"
            />
            <input
              type="button"
              value="Subscribe"
              className="rounded-r-[6px] bg-darkblue-950 px-10 py-4 text-white"
            />
          </section>
          {/* email end */}
          {/* socialmedia links start */}
          <section>
            <p className="mb-7 font-bold text-[#041D5B]">Follow On:</p>

            <ol className="flex list-none gap-5">
              <li className="">
                <Image
                  src="/svg/Frame 3597.svg"
                  alt=" Twitter icon"
                  width={24}
                  height={24}
                  className="inline"
                />
              </li>
              <li className="">
                <Image
                  src="/svg/Frame 3542.svg"
                  alt="Facebook icon"
                  width={24}
                  height={24}
                  className="inline"
                />
              </li>
              <li className="">
                <Image
                  src="/svg/Frame 3541.svg"
                  alt="Pininterest icon"
                  width={24}
                  height={24}
                  className="inline"
                />
              </li>
              <li className="">
                <Image
                  src="/svg/Frame 3540.svg"
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
      </div>
      <div className="mb-7 flex">
        <p className="mx-auto w-fit text-xs text-[#555555]">
          Designed By Pryma Studio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
