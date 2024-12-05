import Image from "next/image";

import cn from "@/helpers/utils";

cn;

const Card = ({
  path,
  children,
  className,
  img,
  ...props
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
        layout="responsive"
        width={1920}
        height={1080}
        className={cn("", img)}
        // objectFit="cover"
      />

      {children}
    </section>
  );
};

export default Card;
