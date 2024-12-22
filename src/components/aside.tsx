import ImportantRead from "./important-read";
import RecommendedChannels from "./recommended-channels";
import SearchWithTags from "./search-with-tags";

const RecommendedAside = () => {
  return (
    <aside className="flex origin-top scale-90 flex-col md:mb-[10vw] md:px-[4vw]">
      <RecommendedChannels />
      <ImportantRead />
      <SearchWithTags />
    </aside>
  );
};

export default RecommendedAside;
