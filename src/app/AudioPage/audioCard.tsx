import React from 'react'
import Image from 'next/image';
import { TfiMicrophone } from "react-icons/tfi";

interface AudioProps {
    title: string;
    desc: string;
    body: string;
    author: string;
    date: string;
  }
  

const AudioCard: React.FC<AudioProps> =({title, desc, body, author, date})=> {
  return (
    <div>
    <div className="w-[401px] border border-gray-300 p-3 rounded shadow-lg">
        {/* Image  */}
        <div className="relative h-[200px] rounded">
        <Image
                src="/Listimage1.svg"
                alt="box icon"
                fill
                className="object-cover rounded"
                />
        </div>

        <div className="flex my-3 items-center justify-between">
            <div className="bg-gray-300 w-14  rounded text-center"><h1 className="text-[#121f41] p-[2px] font-semibold text-[14px]">Audio</h1></div>
            <div className="flex gap-1 items-center mr-1">
            <Image src="/profile.svg" alt="" height={200} width={200} className="w-[20px] h-[15px] "/>
            <p className="text-xs text-gray-400 font-medium">40 Episodes</p>
            </div>
        </div>

        <div className="pt-1">
          <h2 className="font-bold text-xl leading-6 mb-4 ">{title}</h2>
          <p className="text-xs leading-5">{desc}</p>
        </div>

        <div className="border-gray-300 border-b-[1px] my-5 "></div>

        <div className="flex justify-between">
          <div className="flex gap-1">
          <TfiMicrophone className=" text-gray-400 font-bold text-xl" />
          <p className="text-xs text-gray-400 font-medium">{author}</p>
          </div>

        <div className="flex gap-2">
            <Image src="/DateIcon.svg" alt="" height={200} width={200} className="w-[20px] h-[15px] "/>
            <p className="text-xs text-gray-400 font-medium">{date}</p>
            </div>
        </div>
      </div>
    </div>
  )
}
export default AudioCard;
