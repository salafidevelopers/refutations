import Link from "next/link";

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
    <article className="rounded-lg bg-[#C4C4C447] px-8 py-10">
      <p className="mb-4 text-xl">{body}</p>
      <p className="mb-4 mt-8 space-x-2 text-[clamp(0.75rem,0.7188rem+0.1563vw,0.875rem)] font-medium text-[#4C4C4C]">
        By <span className="font-semibold text-[#4D5077]">{author}</span>
        <span>|</span>
        <span>{date}</span>
      </p>
      <Link href={"/"}>Read more</Link>
    </article>
  );
};

export default FeaturedLessons;
