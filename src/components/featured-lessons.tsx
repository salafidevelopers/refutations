const FeaturedLessons = ({
  body,
  date,
  author,
}: {
  body: string;
  date: string;
  author: string;
}) => {
  return (
    <>
      <div className="bg-[#C4C4C447] py-10 px-8">
        <p>{body}</p>
        <p>
          {author} <span> {date}</span>{" "}
        </p>
      </div>
    </>
  );
};

export default FeaturedLessons;
