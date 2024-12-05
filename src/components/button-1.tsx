import Link from "next/link";

const Button = () => {
  return (
    <Link
      href={"/"}
      className="py-4 px-12 text-white bg-[#292C59] rounded-xl w-fit"
    >
      Read More &gt;{" "}
    </Link>
  );
};

export default Button;
