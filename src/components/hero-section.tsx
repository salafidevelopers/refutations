// import Image from "next/image";
import cn from "@/helpers/utils";

const HeroSection = ({
  // path,
  children,
  heroclass,
}: {
  path: string;
  children: React.ReactNode;
  heroclass?: string;
}) => {
  return (
    <section
      className={cn(
        "max-w-screen relative flex items-center justify-center",
        heroclass,
      )}
    >
      {/* <Image src={path} alt="Hero image" fill className="" /> */}

      {children}
    </section>
  );
};

export default HeroSection;
