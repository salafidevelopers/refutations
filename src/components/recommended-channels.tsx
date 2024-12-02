import Image from "next/image";

const RecommendedChannels = () => {
  return (
    <div>
      <p className="text-[#292C59] mb-10 text-xl font-semibold">
        <span className="bg-[#292C59] text-white py-1 px-2">Recommended</span>{" "}
        Channels
      </p>
      {/* Recommended Channels start */}
      <section className="flex flex-col gap-8 mb-16">
        <div className="flex gap-6">
          <div className="relative min-w-20 h-20">
            <Image src="/image (1).png" alt="logo" fill className="" />
          </div>
          <div>
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Pristine Methodology</p>
              <p className="text-xs font-normal mb-1">
                <span className="text-xs font-light ">
                  Nigerian Salafi Channel
                </span>
                <br />
                www.pristinemethodology.com
              </p>
              <div className="flex gap-1">
                <div className="relative w-5 h-5">
                  <Image
                    src="/Vector (1).svg"
                    alt="logo"
                    fill
                    className="bg-[#229CF4] p-1"
                  />
                </div>
                <div className="relative w-5 h-5">
                  <Image
                    src="/Vector (2).svg"
                    alt="logo"
                    fill
                    className="border border-[#C4C4C4] p-1 rounded-s rounded-e"
                  />
                </div>
                <div className="relative w-5 h-5">
                  <Image
                    src="/Vector (3).svg"
                    alt="logo"
                    fill
                    className="border border-[#C4C4C4] p-1 rounded-s rounded-e"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="relative min-w-20 h-20">
            <Image src="/image (2).png" alt="logo" fill className="" />
          </div>
          <div>
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Arrisalah Publications</p>
              <p className="text-xs font-normal mb-1">
                <span className="text-xs font-light ">
                  Nigerian Salafi Channel
                </span>
                <br />
                www.pristinemethodology.com
              </p>
              <div className="flex gap-1">
                <div className="relative w-5 h-5">
                  <Image
                    src="/Vector (1).svg"
                    alt="logo"
                    fill
                    className="bg-[#229CF4] p-1"
                  />
                </div>
                <div className="relative w-5 h-5">
                  <Image
                    src="/Vector (2).svg"
                    alt="logo"
                    fill
                    className="border border-[#C4C4C4] p-1 rounded-s rounded-e"
                  />
                </div>
                <div className="relative w-5 h-5">
                  <Image
                    src="/Vector (3).svg"
                    alt="logo"
                    fill
                    className="border border-[#C4C4C4] p-1 rounded-s rounded-e"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="relative min-w-20 h-20">
            <Image src="/image (1).png" alt="logo" fill className="" />
          </div>
          <div>
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Khawaarij.com</p>
              <p className="text-xs font-normal mb-1">
                <span className="text-xs font-light ">
                  Nigerian Salafi Channel
                </span>
                <br />
                www.pristinemethodology.com
              </p>
              <div className="flex gap-1">
                <div className="relative w-5 h-5">
                  <Image
                    src="/Vector (1).svg"
                    alt="logo"
                    fill
                    className="bg-[#229CF4] p-1"
                  />
                </div>
                <div className="relative w-5 h-5">
                  <Image
                    src="/Vector (2).svg"
                    alt="logo"
                    fill
                    className="border border-[#C4C4C4] p-1 rounded-s rounded-e"
                  />
                </div>
                <div className="relative w-5 h-5">
                  <Image
                    src="/Vector (3).svg"
                    alt="logo"
                    fill
                    className="border border-[#C4C4C4] p-1 rounded-s rounded-e"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="relative min-w-20 h-20">
            <Image src="/image (2).png" alt="logo" fill className="" />
          </div>
          <div>
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Abuiyaad.com</p>
              <p className="text-xs font-normal mb-1">
                <span className="text-xs font-light ">
                  Nigerian Salafi Channel
                </span>
                <br />
                www.pristinemethodology.com
              </p>
              <div className="flex gap-1">
                <div className="relative w-5 h-5">
                  <Image
                    src="/Vector (1).svg"
                    alt="logo"
                    fill
                    className="bg-[#229CF4] p-1"
                  />
                </div>
                <div className="relative w-5 h-5">
                  <Image
                    src="/Vector (2).svg"
                    alt="logo"
                    fill
                    className="border border-[#C4C4C4] p-1 rounded-s rounded-e"
                  />
                </div>
                <div className="relative w-5 h-5">
                  <Image
                    src="/Vector (3).svg"
                    alt="logo"
                    fill
                    className="border border-[#C4C4C4] p-1 rounded-s rounded-e"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Recommended Channels end */}
    </div>
  );
};

export default RecommendedChannels;
