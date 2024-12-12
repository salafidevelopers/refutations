import Image from "next/image";
import { BiLinkAlt } from "react-icons/bi";
import { ImLinkedin } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import AudioList from "./audioList";
import Channels from "./channelsPages";

export default function Audios() {
    return (
    <div className=" w-full">
      {/* Audio Header Image start */}
        <div className="bg-cover bg-center bg-no-repeat w-full h-[450px]" style={{ backgroundImage: `url('/mosque2.webp')` }}>
      <div className="bg-gray-400/5 backdrop-filter backdrop-blur-lg shadow-lg rounded w-fit ml-10 p-5">
        <h1 className="text-[#041D5B] font-extralight mt-7">
          LATEST ARTICLE
        </h1>
        <p className="text-[#FFFFFF] text-[30px] font-serif leading-9 mt-1">What is Salafism? Read <br />about the most <br /> important aspects of <br /> Salafiyyah.</p>
        <p className="text-[#041D5B] font-extralight text-xs my-5">Abu kawthar &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; .May 7,2024(10 mins Read)</p>
        <div className="text-[#041D5B] font-bold text-sm mt-20">Share this post</div>

        {/* Links Icons */}
        <div className="flex gap-[6px] my-3"> 
          <BiLinkAlt className="text-white bg-[#041D5B] rounded-full h-6 w-6 p-1 font-bold"  />
          <div className=" bg-[#041D5B] rounded-full h-6 w-6  items-center text-center p-[4px]"><ImLinkedin className="text-white text-center" /></div>
          <FaXTwitter className="text-white bg-[#041D5B] rounded-full h-6 w-6 p-1 font-bold" />
          <IoLogoFacebook className="text-white bg-[#041D5B] rounded-full h-6 w-6 p-1 font-bold" />
        </div>
        <div className="bg-white h-[1px] w-[190px]"></div>
      </div>
        </div>
      {/* Audio Header Image ends */}

        {/* Audio Lists start */}
        <div className="my-8 mx-7">
          <h1 className="font-bold text-[#041D5B] text-xl">Audios</h1>
          <div className="flex gap-4 border-gray-300 border-b-2 w-fit mt-4 mb-7">
            <p>&nbsp;&nbsp;All</p>
            <p>Popular</p>
            <p>Tracks</p>
            <p>Playlist &nbsp;&nbsp;&nbsp;</p>
          </div>

          <div className="flex ">
          <AudioList/>
          <Channels/>
          </div>
          
        </div>
        {/* Audio Lists end */}

  </div>
);
  }
  