import Aside from "@/components/aside";
import BannerSection from "@/components/banner-section";
import FeatureSection from "@/components/feature-section";
import HeroSection from "@/components/hero-section";
import RecentPosts from "@/components/recent-posts";

export default function Home() {
  return (
    <div className=" max-w-screen relative">
      {/* Hero section start */}
      <HeroSection />
      {/* Hero section end */}
      {/* Featured section start */}
      <FeatureSection />
      {/* Featured section end */}
      {/* Banner start */}
      <BannerSection />
      {/* Banner end */}
      <div className="flex xl:flex-col w-fit mt-20 lg:w-[80vw] md:w-screen mx-auto lg:mb-[10vw]">
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
