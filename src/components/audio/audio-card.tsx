import React from "react";

import Image from "next/image";

import { TfiMicrophone } from "react-icons/tfi";

interface AudioProps {
  title: string;
  desc: string;
  body: string;
  author: string;
  date: string;
}

const AudioCard: React.FC<AudioProps> = ({
  title,
  desc,
  body,
  author,
  date,
}) => {
  return (
    <div>
      <div className="w-[401px] rounded border border-gray-300 p-3 shadow-lg">
        {/* Image  */}
        <div className="relative h-[200px] rounded">
          <Image
            src="/svg/Listimage1.svg"
            alt="box icon"
            fill
            className="rounded object-cover"
          />
        </div>

        <div className="my-3 flex items-center justify-between">
          <div className="w-14 rounded bg-gray-300 text-center">
            <h1 className="p-[2px] text-[14px] font-semibold text-[#121f41]">
              Audio
            </h1>
          </div>
          <div className="mr-1 flex items-center gap-1">
            <Image
              src="/svg/profile.svg"
              alt=""
              height={200}
              width={200}
              className="h-[15px] w-[20px]"
            />
            <p className="text-xs font-medium text-gray-400">40 Episodes</p>
          </div>
        </div>

        <div className="pt-1">
          <h2 className="mb-4 text-xl font-bold leading-6">{title}</h2>
          <p className="text-xs leading-5">{desc}</p>
        </div>

        <div className="my-5 border-b-[1px] border-gray-300"></div>

        <div className="flex justify-between">
          <div className="flex gap-1">
            <TfiMicrophone className="text-xl font-bold text-gray-400" />
            <p className="text-xs font-medium text-gray-400">{author}</p>
          </div>

          <div className="flex gap-2">
            <Image
              src="/svg/DateIcon.svg"
              alt=""
              height={200}
              width={200}
              className="h-[15px] w-[20px]"
            />
            <p className="text-xs font-medium text-gray-400">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AudioCard;
