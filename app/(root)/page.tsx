import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div>
      <div>
      <Navbar />
      </div>
      <div>
        <div className="flex bg-slate-900 min-h-screen flex-col items-center justify-between p-24">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;
