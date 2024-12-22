import { audioList } from "../../data/audio-data";
import AudioCard from "./audio-card";

const AudioList: React.FC = () => {
  return (
    <div className="my-5">
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
      <div></div>
    </div>
  );
};
export default AudioList;
