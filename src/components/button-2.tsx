import Link from "next/link";

const Button2 = () => {
  return (
    <Link
      href={"/"}
      className="py-3 px-[2vw] lg:px-5 sm:p-1 lg:hidden mx-auto text-white text-[clamp(10px,0.5vw,33.8px)] w-[clamp(50px,11vw,176px)] bg-[#455EC2] flex rounded-s rounded-e justify-center self-center"
    >
      Read Now
    </Link>
  );
};

export default Button2;
