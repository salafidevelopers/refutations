import Image from "next/image";
import Link from "next/link";

const BannerSection = () => {
  return (
    <div className="w-[calc(100vw-10rem)] lg:w-full h-40 md:h-32 mx-auto my-16 relative">
      <div className="flex text-[#455EC2] p-[clamp(12px,1.5vw,48px)] lg:p-5  bg-gradient-to-r from-[rgba(245,233,211,0.9)] to-[rgba(245,233,211,0.5)]   w-[calc(100vw-10rem)] lg:w-full  h-40 md:h-32 mx-auto absolute top-0 z-50">
        <div className="flex flex-col justify-center ml-auto lg:mx-auto">
          <p className=" text-[clamp(12px,4vw,33.8px)] font-semibold">
            The Rafidah 20th Century Thinkers
          </p>
          <p className="text-[clamp(12px,1.5vw,33.8px)]">
            Hasan Al-Banna, Sayyid Qutb, Abu A'la Mawdudi Khomeini, Khameni, The
            Rafidah and the revolution
          </p>
        </div>
        <Link
          href={"/"}
          className="py-3 px-[2vw] lg:px-5 sm:p-1 lg:hidden mx-auto text-white text-[clamp(10px,0.5vw,33.8px)] w-[clamp(50px,11vw,176px)] bg-[#455EC2] flex rounded-s rounded-e justify-center self-center"
        >
          Read Now
        </Link>
      </div>
      <Image
        src="/4de8df7949cd466ab88a19c619a13a1f.jpg"
        alt="Hero image"
        // width={300}
        // height={150}
        fill
        className="object-cover"
      />
    </div>
  );
};

export default BannerSection;
