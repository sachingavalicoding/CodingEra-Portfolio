import DemoSection from "./DemoSection";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen mt-20">
        <HeroSection />
        <DemoSection />
      </div>
    </>
  );
};

export default Home;
