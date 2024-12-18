import React, { useRef } from 'react';

interface VideoCarouselProps {
  videos: string[];
}

const YouTubeCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth; 
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Heading */}
      <div className="flex flex-col items-start mb-4 px-2">
        <h2 className="text-xl font-bold text-blue-700">New Videos</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar overflow-hidden"
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[100%] sm:w-[100%] lg:w-[300px] h-[500px] rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video}`}
                title={`YouTube Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className='flex justify-end gap-4 mt-10 px-4'>
            <button
            onClick={scrollLeft}
            className=" transform -translate-y-1/2 bg-transparent ring-1 ring-[#041D5B] text-[#041D5B] p-2 rounded-full"
            >
            &#8592;
            </button>
            <button
            onClick={scrollRight}
            className="transform -translate-y-1/2 bg-transparent ring-1 ring-[#041D5B] text-[#041D5B] p-2 rounded-full"
            >
            &#8594;
            </button>
        </div>
      </div>
    </div>
  );
};

export default YouTubeCarousel;
