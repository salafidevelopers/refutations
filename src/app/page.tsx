


import Aside from "@/components/aside";
import BannerSection from "@/components/banner-section";
import FeatureSection from "@/components/feature-section";
import HeroSection from "@/components/hero-section";
import RecentPosts from "@/components/recent-posts";

export default function Home() {
  return (
    <div className="max-w-screen relative">
      <HeroSection />
      <FeatureSection />
      <BannerSection />
      <div className="mx-auto mt-20 flex w-fit xl:flex-col lg:mb-[10vw] lg:w-[80vw] md:w-screen">
        <RecentPosts />
        <Aside />
      </div>
    </div>
  );
}
