import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="max-w-screen relative flex h-[85vh] items-center justify-center lg:h-[30vh]">
      <Image
        src="/images/Rectangle 3085.png"
        alt="Hero image"
        // layout="responsive"
        // width={1920}
        // height={1080}
        fill
        className=""
      />

      <p className="absolute mx-auto flex w-fit flex-col items-center rounded-2xl bg-white/5 p-5 text-2xl leading-[46px] text-white backdrop-blur-xl lg:text-sm md:text-xs md:leading-3 md:backdrop-blur-sm">
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
