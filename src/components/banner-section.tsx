import Image from "next/image";

import banner from "../data/banner.json";
import Button2 from "./button-2";

const BannerSection = () => {
  return (
    <div className="w-[calc(100vw-10rem)] lg:w-full h-40 md:h-32 mx-auto my-16 relative">
      <div className="flex text-[#455EC2] p-[clamp(12px,1.5vw,48px)] lg:p-5  bg-gradient-to-r from-[rgba(245,233,211,0.9)] to-[rgba(245,233,211,0.5)]   w-[calc(100vw-10rem)] lg:w-full  h-40 md:h-32 mx-auto absolute top-0 z-50">
        <div className="flex flex-col justify-center ml-auto lg:mx-auto">
          <p className=" text-[clamp(12px,4vw,33.8px)] font-semibold">
            {banner.title}
          </p>
          <p className="text-[clamp(12px,1.5vw,33.8px)]">{banner.desc}</p>
        </div>
        <Button2 />
      </div>
      <Image src={banner.img} alt="Hero image" fill className="object-cover" />
    </div>
  );
};

export default BannerSection;
