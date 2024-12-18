const ImportantRead = () => {
  return (
    <section className="mb-16 flex flex-col">
      <p className="mb-[1.5vw] font-semibold sm:mb-[8vw]">Important Reads</p>
      <div className="mr-10 flex flex-col gap-4">
        <div className="flex justify-between border-b border-dashed border-[#D1E7E5]">
          <p>Aqeedah</p>
          <p>09</p>
        </div>
        <div className="flex justify-between border-b border-dashed border-[#D1E7E5]">
          <p>Manhaj</p>
          <p>05</p>
        </div>
        <div className="flex justify-between border-b border-dashed border-[#D1E7E5]">
          <p>Tarbiyyah</p>
          <p>09</p>
        </div>
        <div className="flex justify-between border-b border-dashed border-[#D1E7E5]">
          <p>Tafseer</p>
          <p>10</p>
        </div>
        <div className="flex justify-between border-b border-dashed border-[#D1E7E5]">
          <p>Mus’afiqah</p>
          <p>07</p>
        </div>
      </div>
    </section>
  );
};

export default ImportantRead;
