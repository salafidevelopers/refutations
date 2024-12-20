import { audioList } from "../../data/audio-data";
import RecommendedAside from "../aside";
import AudioCard from "./audio-card";
import Pagination from "./audio-pagination";

const AudioList: React.FC = () => {
  return (
    // Container for the audio list component
    <div className="mx-10 my-5">
      <div className="flex">
        <div>
          {/* Container for the audio cards */}
          <div className="flex flex-wrap gap-7">
            {audioList.map((audio, index) => (
              <AudioCard
                key={index}
                title={audio.title}
                desc={audio.desc}
                body={audio.body}
                author={audio.author}
                date={audio.date}
              />
            ))}
          </div>

          {/* Pagination Start */}
          <div>
            <Pagination />
          </div>
        </div>
        {/* Container for the recommended aside component */}
        <div>
          <RecommendedAside />
        </div>
      </div>
    </div>
  );
};
export default AudioList;
