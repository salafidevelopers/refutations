const SearchWithTags = () => {
  return (
    <section>
      <p className="sm:mb-[8vw] mb-[1.5vw] font-semibold">Search With Tags</p>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <p className="text-[#666666] border border-[#666666] py-2 px-5 rounded-s rounded-e">
            Manhaj
          </p>
          <p className="text-[#666666] border border-[#666666] py-2 px-5 rounded-s rounded-e">
            lifestyle
          </p>
          <p className="text-[#666666] border border-[#666666] py-2 px-5 rounded-s rounded-e">
            fashion
          </p>
        </div>
        <div className="flex gap-3">
          <p className="text-white border border-[#666666] py-2 px-5 rounded-s rounded-e bg-[#041D5B] ">
            Technology
          </p>
          <p className="text-[#666666] border border-[#666666] py-2 px-5 rounded-s rounded-e">
            Business
          </p>
          <p className="text-[#666666] border border-[#666666] py-2 px-5 rounded-s rounded-e">
            Design
          </p>
        </div>
        <div className="flex gap-3">
          <p className="text-[#666666] border border-[#666666] py-2 px-5 rounded-s rounded-e">
            Health
          </p>
          <p className="text-[#666666] border border-[#666666] py-2 px-5 rounded-s rounded-e">
            Food
          </p>
          <p className="text-[#666666] border border-[#666666] py-2 px-5 rounded-s rounded-e">
            Art
          </p>
        </div>
      </div>
    </section>
  );
};

export default SearchWithTags;
