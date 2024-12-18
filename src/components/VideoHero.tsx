import React from "react";

type HeroProps = {
  title: string;
  description: string;
  videoUrl: string;
  imageAlt?: string;
};

const VideoHero: React.FC<HeroProps> = ({ title, description, videoUrl, imageAlt = "YouTube video" }) => {
  return (
    <section className=" bg-[#CBCFD930]  w-full px-6 py-12 ">
      <div className="max-w-7xl sm:w-full mx-auto flex items-center justify-between sm:px-2 sm:flex-col gap-8 py-8">
        {/* Left Section */}
        <div className="flex-1 text-left">
          <h1 className="mb-4 text-5xl font-bold text-black sm:text-4xl">
            {title}
          </h1>
          <p className="mb-6 text-xl text-gray-800 lg:text-xl">{description}</p>
        </div>

        {/* Right Section (YouTube Video) */}
        <div className="flex-1 flex justify-center  items-center rounded-3xl">
          <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg aspect-video">
            <iframe
              src={videoUrl}
              title={imageAlt}
              className="w-full h-full rounded-3xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
