import Image from "next/image";

import Badge from "@/components/badge";
import Card from "@/components/card";

const RecentPosts = () => {
  return (
    <section className=" mb-16 flex flex-col w-fit lg:mx-auto mx-[4.5vw]  md:mx-0">
      <p className="mb-8 md:px-[4vw] font-semibold text-xl">
        Recently posted ({10})
      </p>
      <section className="grid grid-cols-2 md:grid-cols-1 gap-[5vw] w-[62vw] md:w-screen md:justify-items-center  ">
        <Card
          path="/Rectangle 38.png"
          className="max-w-[30.9vw] md:max-w-[80%] h-fit rounded-3xl flex flex-col p-4 bg-white rounded-s rounded-e border border-[#E8E8EA]"
          img="rounded-s rounded-e"
        >
          <div className="flex mt-6 mb-4">
            <div>
              <Badge className="bg-slate-100 py-1 px-2 rounded-s rounded-e text-[#041D5B]">
                Audios
              </Badge>
            </div>
            <div className="flex ml-auto gap-2">
              <div className="relative w-[12px] h-[12px] self-center">
                <Image
                  src="/Group 3349.png"
                  alt="clock image"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="self-center text-[#777777]">3 Min. To Read</p>
            </div>
          </div>

          <p className="font-semibold text-2xl">
            The Scale of the Musaafiqah in light of Kitaab & Sunnah
          </p>

          <div className="flex justify-between text-[#97989F] mt-5">
            <p>Abu Anwar</p>
            <p>August 20, 2022</p>
          </div>
        </Card>
        <Card
          path="/Rectangle 38 (1).png"
          className="max-w-[30.9vw] md:max-w-[80%] h-fit rounded-3xl flex flex-col p-4 bg-white rounded-s rounded-e border border-[#E8E8EA]"
          img="rounded-s rounded-e"
        >
          <div className="flex mt-6 mb-4">
            <div>
              <Badge className="bg-slate-100 py-1 px-2 rounded-s rounded-e text-[#041D5B]">
                Audios
              </Badge>
            </div>
            <div className="flex ml-auto gap-2">
              <div className="relative w-[12px] h-[12px] self-center">
                <Image
                  src="/Group 3349.png"
                  alt="clock image"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="self-center text-[#777777]">3 Min. To Read</p>
            </div>
          </div>

          <p className="font-semibold text-2xl">
            The Scale of the Musaafiqah in light of Kitaab & Sunnah
          </p>

          <div className="flex justify-between text-[#97989F] mt-5">
            <p>Abu Kawthar</p>
            <p>August 20, 2022</p>
          </div>
        </Card>
        <Card
          path="/Rectangle 38.png"
          className="max-w-[30.9vw] md:max-w-[80%] h-fit rounded-3xl flex flex-col p-4 bg-white rounded-s rounded-e border border-[#E8E8EA]"
          img="rounded-s rounded-e"
        >
          <div className="flex mt-6 mb-4">
            <div>
              <Badge className="bg-slate-100 py-1 px-2 rounded-s rounded-e text-[#041D5B]">
                Audios
              </Badge>
            </div>
            <div className="flex ml-auto gap-2">
              <div className="relative w-[12px] h-[12px] self-center">
                <Image
                  src="/Group 3349.png"
                  alt="clock image"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="self-center text-[#777777]">3 Min. To Read</p>
            </div>
          </div>

          <p className="font-semibold text-2xl">
            The Scale of the Musaafiqah in light of Kitaab & Sunnah
          </p>

          <div className="flex justify-between text-[#97989F] mt-5">
            <p>Abu Anwar</p>
            <p>August 20, 2022</p>
          </div>
        </Card>
        <Card
          path="/Rectangle 38 (1).png"
          className="max-w-[30.9vw] md:max-w-[80%] h-fit rounded-3xl flex flex-col p-4 bg-white rounded-s rounded-e border border-[#E8E8EA]"
          img="rounded-s rounded-e"
        >
          <div className="flex mt-6 mb-4">
            <div>
              <Badge className="bg-slate-100 py-1 px-2 rounded-s rounded-e text-[#041D5B]">
                Audios
              </Badge>
            </div>
            <div className="flex ml-auto gap-2">
              <div className="relative w-[12px] h-[12px] self-center">
                <Image
                  src="/Group 3349.png"
                  alt="clock image"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="self-center text-[#777777]">3 Min. To Read</p>
            </div>
          </div>

          <p className="font-semibold text-2xl">
            The Scale of the Musaafiqah in light of Kitaab & Sunnah
          </p>

          <div className="flex justify-between text-[#97989F] mt-5">
            <p>Abu Kawthar</p>
            <p>August 20, 2022</p>
          </div>
        </Card>
        <Card
          path="/Rectangle 38.png"
          className="max-w-[30.9vw] md:max-w-[80%] h-fit rounded-3xl flex flex-col p-4 bg-white rounded-s rounded-e border border-[#E8E8EA]"
          img="rounded-s rounded-e"
        >
          <div className="flex mt-6 mb-4">
            <div>
              <Badge className="bg-slate-100 py-1 px-2 rounded-s rounded-e text-[#041D5B]">
                Audios
              </Badge>
            </div>
            <div className="flex ml-auto gap-2">
              <div className="relative w-[12px] h-[12px] self-center">
                <Image
                  src="/Group 3349.png"
                  alt="clock image"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="self-center text-[#777777]">3 Min. To Read</p>
            </div>
          </div>

          <p className="font-semibold text-2xl">
            The Scale of the Musaafiqah in light of Kitaab & Sunnah
          </p>

          <div className="flex justify-between text-[#97989F] mt-5">
            <p>Abu Anwar</p>
            <p>August 20, 2022</p>
          </div>
        </Card>
        <Card
          path="/Rectangle 38 (1).png"
          className="max-w-[30.9vw] md:max-w-[80%] h-fit rounded-3xl flex flex-col p-4 bg-white rounded-s rounded-e border border-[#E8E8EA]"
          img="rounded-s rounded-e"
        >
          <div className="flex mt-6 mb-4">
            <div>
              <Badge className="bg-slate-100 py-1 px-2 rounded-s rounded-e text-[#041D5B]">
                Audios
              </Badge>
            </div>
            <div className="flex ml-auto gap-2">
              <div className="relative w-[12px] h-[12px] self-center">
                <Image
                  src="/Group 3349.png"
                  alt="clock image"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="self-center text-[#777777]">3 Min. To Read</p>
            </div>
          </div>

          <p className="font-semibold text-2xl">
            The Scale of the Musaafiqah in light of Kitaab & Sunnah
          </p>

          <div className="flex justify-between text-[#97989F] mt-5">
            <p>Abu Kawthar</p>
            <p>August 20, 2022</p>
          </div>
        </Card>
        <Card
          path="/Rectangle 38.png"
          className="max-w-[30.9vw] md:max-w-[80%] h-fit rounded-3xl flex flex-col p-4 bg-white rounded-s rounded-e border border-[#E8E8EA]"
          img="rounded-s rounded-e"
        >
          <div className="flex mt-6 mb-4">
            <div>
              <Badge className="bg-slate-100 py-1 px-2 rounded-s rounded-e text-[#041D5B]">
                Audios
              </Badge>
            </div>
            <div className="flex ml-auto gap-2">
              <div className="relative w-[12px] h-[12px] self-center">
                <Image
                  src="/Group 3349.png"
                  alt="clock image"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="self-center text-[#777777]">3 Min. To Read</p>
            </div>
          </div>

          <p className="font-semibold text-2xl">
            The Scale of the Musaafiqah in light of Kitaab & Sunnah
          </p>

          <div className="flex justify-between text-[#97989F] mt-5">
            <p>Abu Anwar</p>
            <p>August 20, 2022</p>
          </div>
        </Card>
        <Card
          path="/Rectangle 38 (1).png"
          className="max-w-[30.9vw] md:max-w-[80%] h-fit rounded-3xl flex flex-col p-4 bg-white rounded-s rounded-e border border-[#E8E8EA]"
          img="rounded-s rounded-e"
        >
          <div className="flex mt-6 mb-4">
            <div>
              <Badge className="bg-slate-100 py-1 px-2 rounded-s rounded-e text-[#041D5B]">
                Audios
              </Badge>
            </div>
            <div className="flex ml-auto gap-2">
              <div className="relative w-[12px] h-[12px] self-center">
                <Image
                  src="/Group 3349.png"
                  alt="clock image"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="self-center text-[#777777]">3 Min. To Read</p>
            </div>
          </div>

          <p className="font-semibold text-2xl">
            The Scale of the Musaafiqah in light of Kitaab & Sunnah
          </p>

          <div className="flex justify-between text-[#97989F] mt-5">
            <p>Abu Kawthar</p>
            <p>August 20, 2022</p>
          </div>
        </Card>

        {/* clamp(30rem,44.9vw,44.9rem) */}
      </section>
    </section>
  );
};

export default RecentPosts;
