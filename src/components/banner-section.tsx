import Image from "next/image";

import cn from "@/helpers/utils";

import banner from "../data/banner.json";
import Button2 from "./button-2";

const BannerSection = ({ bclass }: { bclass?: string }) => {
  return (
    <div
      className={cn(
        "relative mx-auto my-16 h-40 w-[calc(100vw-10rem)] lg:w-full md:h-32",
        bclass,
      )}
    >
      <div className="absolute top-0 z-50 mx-auto flex h-40 w-[calc(100vw-10rem)] bg-gradient-to-r from-[rgba(245,233,211,0.9)] to-[rgba(245,233,211,0.5)] p-[clamp(12px,1.5vw,48px)] text-[#455EC2] lg:w-full lg:p-5 md:h-32">
        <div className="ml-auto flex flex-col justify-center lg:mx-auto">
          <p className="text-[clamp(12px,4vw,33.8px)] font-semibold">
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
