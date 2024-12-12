import React from 'react'
import Image from 'next/image'
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { channelList, readList} from "./audioData";

export default function Channels() {
  return (
    <div>
        <div className='flex w-[300px] '> <p className='bg-[#121f41] text-white'>Recommended </p><span>&nbsp;Channels</span></div>
        {channelList.map((channel, index) => (
            <div className='flex gap-3 mt-7 items-center' key={index} >
            <div>
            <Image src={channel.img} alt='pristine' height={100} width={100} className='h-[50px] w-[50px]'/>
            </div>
  
            <div className='leading-[18px]'>
              <div className='font-bold text-[15px]'>{channel.name}</div>
              <p className='text-gray-400 text-[12px]'>{channel.desc}</p>
              <div className='text-[11px]'>{channel.link}</div>
              <div className='flex gap-3 mt-1'>
                <TiSocialFacebook  className='bg-[#229CF4] text-white text-lg rounded'/>
                <FaXTwitter className='border p-[2px] text-[20px] text-[#575757] rounded '/>
                <PiInstagramLogoFill className='border p-[2px] text-[20px] text-[#575757] rounded'/>
              </div>
            </div> 
          </div>
        ))}
      
        <div className='mt-16'>
          <h1 className='mb-7 font-bold text-[18px]'>Important Reads</h1>

          {/* imortant read list start */}
        {readList.map((read ,index) =>(
          <div key={index} className='flex  w-56  justify-between border-dashed border-b mb-4 font-bold'>
            <p>{read.name}</p>
            <p>09</p>
          </div>
        ))}
        </div>

      {/* Search with tag start */}
        <div className='mt-20'>
          <h1 className='text-xl font-bold'>Search With Tags</h1>

          <div className='flex gap-3 text-xs mt-8'>
            <p className='border py-[5px] px-[15px] rounded'>Manhaj</p>
            <p className='border py-[5px] px-[15px] rounded'>Lifestyle</p>
            <p className='border py-[5px] px-[15px] rounded'>Fashion</p>
          </div>

          <div className='flex gap-3 mt-3 text-xs'>
            <p className='border py-[5px] px-[15px] rounded bg-[#041D5B] text-white'>Technology</p>
            <p className='border py-[5px] px-[15px] rounded'>Business</p>
            <p className='border py-[5px] px-[15px] rounded'>Design</p>
          </div>

          <div className='flex gap-3 mt-3 text-xs'>
            <p className='border py-[5px] px-[15px] rounded'>Health</p>
            <p className='border py-[5px] px-[15px] rounded'>Food</p>
            <p className='border py-[5px] px-[15px] rounded'>Art</p>
          </div>
        </div>
    </div>
  )
}
