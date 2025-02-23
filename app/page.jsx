import Hero from "@/components/Hero";
import Links from "@/components/Links";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="flex flex-col items-center min-h-screen relative overflow-hidden bg-[#171717]">
      <Hero />
      <Links />
      <Footer />
    </main>
  );
};

export default Home;
