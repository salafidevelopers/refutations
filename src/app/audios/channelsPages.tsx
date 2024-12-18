import React from "react";

import Image from "next/image";

import { FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TiSocialFacebook } from "react-icons/ti";

import { channelList, readList } from "../../data/audio-data";

export default function Channels() {
  return (
    <div>
      <div className="flex w-[300px]">
        {" "}
        <p className="bg-[#121f41] text-white">Recommended </p>
        <span>&nbsp;Channels</span>
      </div>
      {channelList.map((channel, index) => (
        <div className="mt-7 flex items-center gap-3" key={index}>
          <div>
            <Image
              src={channel.img}
              alt="pristine"
              height={100}
              width={100}
              className="h-[50px] w-[50px]"
            />
          </div>

          <div className="leading-[18px]">
            <div className="text-[15px] font-bold">{channel.name}</div>
            <p className="text-[12px] text-gray-400">{channel.desc}</p>
            <div className="text-[11px]">{channel.link}</div>
            <div className="mt-1 flex gap-3">
              <TiSocialFacebook className="rounded bg-[#229CF4] text-lg text-white" />
              <FaXTwitter className="rounded border p-[2px] text-[20px] text-[#575757]" />
              <PiInstagramLogoFill className="rounded border p-[2px] text-[20px] text-[#575757]" />
            </div>
          </div>
        </div>
      ))}

      <div className="mt-16">
        <h1 className="mb-7 text-[18px] font-bold">Important Reads</h1>

        {/* imortant read list start */}
        {readList.map((read, index) => (
          <div
            key={index}
            className="mb-4 flex w-56 justify-between border-b border-dashed font-bold"
          >
            <p>{read.name}</p>
            <p>09</p>
          </div>
        ))}
      </div>

      {/* Search with tag start */}
      <div className="mt-20">
        <h1 className="text-xl font-bold">Search With Tags</h1>

        <div className="mt-8 flex gap-3 text-xs">
          <p className="rounded border px-[15px] py-[5px]">Manhaj</p>
          <p className="rounded border px-[15px] py-[5px]">Lifestyle</p>
          <p className="rounded border px-[15px] py-[5px]">Fashion</p>
        </div>

        <div className="mt-3 flex gap-3 text-xs">
          <p className="rounded border bg-[#041D5B] px-[15px] py-[5px] text-white">
            Technology
          </p>
          <p className="rounded border px-[15px] py-[5px]">Business</p>
          <p className="rounded border px-[15px] py-[5px]">Design</p>
        </div>

        <div className="mt-3 flex gap-3 text-xs">
          <p className="rounded border px-[15px] py-[5px]">Health</p>
          <p className="rounded border px-[15px] py-[5px]">Food</p>
          <p className="rounded border px-[15px] py-[5px]">Art</p>
        </div>
      </div>
    </div>
  );
}
