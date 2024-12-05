import Image from "next/image";

import cn from "@/helpers/utils";

const Card = ({
  path,
  children,
  className,
  img,
}: {
  path: string;
  children: React.ReactNode;
  className: string;
  img: string;
}) => {
  return (
    <section className={cn("max-w-[25%]", className)}>
      <Image
        src={path}
        alt="card image"
        // layout="responsive"
        width={500}
        height={500}
        className={cn("w-full", img)}
      />

      {children}
    </section>
  );
};

export default Card;
