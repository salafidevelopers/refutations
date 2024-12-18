"use client";

import VideoHero from "@/components/VideoHero";
import RecentPosts from "@/components/recent-posts";
import Aside from "@/components/aside";
import YouTubeCarousel from "@/components/YouTubeCarousel";

export default function Videos() {
    const youtubeVideoIds = [
        'VIDEO_ID_1',
        'VIDEO_ID_2',
        'VIDEO_ID_3',
        'VIDEO_ID_4',
      ];
    return (
        <main>
            <VideoHero 
                title="Salafiyyah: Its reality & characterists"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                videoUrl="https://www.youtube.com/embed/your-video-id"
            />
            <div className="mx-auto mt-20 flex w-fit xl:flex-col lg:mb-[10vw] lg:w-[80vw] md:w-screen">
                {/* justify-between 2xl:justify-normal */}
                {/* Recently posted section start */}
                <RecentPosts />
                {/* Recently posted section end */}
                {/* aside start */}
                <Aside />
                {/* aside end */}
            </div>
            <div className="min-h-screen p-4">
                <YouTubeCarousel videos={youtubeVideoIds} />
            </div>
      </main>
    )
}