import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header id="/" className="">
      <nav className=" flex p-[1.5vw] sm:p-5 justify-center">
        {/* logo start */}
        <section className="self-center">
          <Link href={"#"}>
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
        <ol className="list-none flex gap-5 items-center md:hidden lg:hidden text-[#041D5B] ">
          <li>
            <Link href={"#"}>Article</Link>
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
  );
};

export default Navbar;
