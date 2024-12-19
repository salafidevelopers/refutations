import { audioList } from "../../data/audio-data";
import RecommendedAside from "../aside";
import AudioCard from "./audio-card";

const AudioList: React.FC = () => {
  return (
    <div className="mx-10 my-5">
      <div className="flex">
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
        <div>
          <RecommendedAside />
        </div>
      </div>

      {/* Pagination Start */}
      <div></div>
    </div>
  );
};
export default AudioList;
