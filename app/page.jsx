import BackgroundLight from "@/components/BackgroundLight";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import Links from "@/components/Links";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="flex flex-col items-center min-h-screen relative overflow-hidden bg-[#171717]">
      <div className="absolute inset-0">
        <BackgroundLight />
        <AnimatedBackground />
      </div>
      <Hero />
      <Links />
      <Footer />
    </main>
  );
};

export default Home;
