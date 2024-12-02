import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative max-w-screen h-[85vh] lg:h-[30vh]  flex justify-center items-center">
      <Image
        src="/Rectangle 3085.png"
        alt="Hero image"
        // layout="responsive"
        // width={1920}
        // height={1080}
        fill
        className=""
      />

      <p className="absolute flex flex-col items-center w-fit rounded-2xl text-white bg-white/5 p-5 mx-auto backdrop-blur-xl md:backdrop-blur-sm text-2xl lg:text-sm md:text-xs md:leading-3 leading-[46px]">
        From Mu’aadh Ibn Jabal, from the Prophet (sallallaahu ’alayhi wa sallam)
        who said, “This <br /> knowledge will be carried by the trustworthy ones
        of every generation. They will remove from it the <br /> distortions of
        the transgressors and the false <br /> attributions of the fabricators
        and the false explanations of the ignorant.”
        <br />
        <br />
        <span className="text-[#041D5B]">
          Saheeh: Related by Ibnul-Wazeer al-Yamaanee in ar-Rawdhun-Naas
          (1/21-23)
        </span>
      </p>
    </section>
  );
};

export default HeroSection;
