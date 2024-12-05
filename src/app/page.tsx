import Aside from "@/components/aside";
import BannerSection from "@/components/banner-section";
import FeatureSection from "@/components/feature-section";
import HeroSection from "@/components/hero-section";
import RecentPosts from "@/components/recent-posts";

export default function Home() {
  return (
    <div className="max-w-screen relative">
      {/* Hero section start */}
      <HeroSection />
      {/* Hero section end */}
      {/* Featured section start */}
      <FeatureSection />
      {/* Featured section end */}
      {/* Banner start */}
      <BannerSection />
      {/* Banner end */}
      <div className="mx-auto mt-20 flex w-fit xl:flex-col lg:mb-[10vw] lg:w-[80vw] md:w-screen">
        {/* justify-between 2xl:justify-normal */}
        {/* Recently posted section start */}
        <RecentPosts />
        {/* Recently posted section end */}
        {/* aside start */}
        <Aside />
        {/* aside end */}
      </div>
    </div>
  );
}
