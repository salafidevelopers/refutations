import { BiLinkAlt } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { IoLogoFacebook } from "react-icons/io5";

import AudioList from "../../components/audio/audio-list";

import Channels from "./channelsPages";

export default function Audios() {
  return (
    <div className="w-full">
      {/* Audio Header Image start */}
      <div
        className="h-[450px] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/mosque2.webp')` }}
      >
        <div className="ml-10 w-fit rounded bg-gray-400/5 p-5 shadow-lg backdrop-blur-lg backdrop-filter">
          <h1 className="mt-7 font-extralight text-[#041D5B]">
            LATEST ARTICLE
          </h1>
          <p className="mt-1 font-serif text-[30px] leading-9 text-[#FFFFFF]">
            What is Salafism? Read <br />
            about the most <br /> important aspects of <br /> Salafiyyah.
          </p>
          <p className="my-5 text-xs font-extralight text-[#041D5B]">
            Abu kawthar &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; .May 7,2024(10 mins Read)
          </p>
          <div className="mt-20 text-sm font-bold text-[#041D5B]">
            Share this post
          </div>

          {/* Links Icons */}
          <div className="my-3 flex gap-[6px]">
            <BiLinkAlt className="h-6 w-6 rounded-full bg-[#041D5B] p-1 font-bold text-white" />
            <div className="h-6 w-6 items-center rounded-full bg-[#041D5B] p-[4px] text-center">
              <ImLinkedin className="text-center text-white" />
            </div>
            <FaXTwitter className="h-6 w-6 rounded-full bg-[#041D5B] p-1 font-bold text-white" />
            <IoLogoFacebook className="h-6 w-6 rounded-full bg-[#041D5B] p-1 font-bold text-white" />
          </div>
          <div className="h-[1px] w-[190px] bg-white"></div>
        </div>
      </div>
      {/* Audio Header Image ends */}

      {/* Audio Lists start */}
      <div className="maxw-7xl mx-7 my-8">
        <h1 className="text-xl font-bold text-[#041D5B]">Audios</h1>
        <div className="mb-7 mt-4 flex w-fit gap-4 border-b-2 border-gray-300">
          <p>&nbsp;&nbsp;All</p>
          <p>Popular</p>
          <p>Tracks</p>
          <p>Playlist &nbsp;&nbsp;&nbsp;</p>
        </div>

        <aside className="flex">
          <AudioList />
          <Channels />
        </aside>
      </div>
    </div>
  );
}
