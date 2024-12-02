const ImportantRead = () => {
  return (
    <section className="flex flex-col mb-16">
      <p className="sm:mb-[8vw] mb-[1.5vw] font-semibold ">Important Reads</p>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between border-b border-[#D1E7E5] border-dashed">
          <p>Aqeedah</p>
          <p>09</p>
        </div>
        <div className="flex justify-between border-b border-[#D1E7E5] border-dashed">
          <p>Manhaj</p>
          <p>05</p>
        </div>
        <div className="flex justify-between border-b border-[#D1E7E5] border-dashed">
          <p>Tarbiyyah</p>
          <p>09</p>
        </div>
        <div className="flex justify-between border-b border-[#D1E7E5] border-dashed">
          <p>Tafseer</p>
          <p>10</p>
        </div>
        <div className="flex justify-between border-b border-[#D1E7E5] border-dashed">
          <p>Mus’afiqah</p>
          <p>07</p>
        </div>
      </div>
    </section>
  );
};

export default ImportantRead;
