import Image from "next/image";
import Link from "next/link";

import cn from "@/helpers/utils";

const Card = ({
  path,
  children,
  className,
  img,
  link,
  lclass,
}: {
  path: string;
  children: React.ReactNode;
  className: string;
  img: string;
  link: string;
  lclass?: string;
}) => {
  return (
    <section className={cn("max-w-[25%]", className)}>
      <Link
        href={new URL(link, "http://localhost:3000").toString()}
        className={cn("", lclass)}
      >
        <Image
          src={path}
          alt="card image"
          // layout="responsive"
          width={500}
          height={500}
          className={cn("w-full", img)}
        />
      </Link>

      {children}
    </section>
  );
};

export default Card;
