import ImportantRead from "./important-read";
import RecommendedChannels from "./recommended-channels";
import SearchWithTags from "./search-with-tags";

const Aside = () => {
  return (
    <div className="flex flex-col md:px-[4vw] md:mb-[10vw]">
      <RecommendedChannels />
      <ImportantRead />
      <SearchWithTags />
    </div>
  );
};

export default Aside;
