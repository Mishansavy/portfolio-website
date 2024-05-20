import { About } from "./Components/About";
import { Experience } from "./Components/Experience";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { Technologies } from "./Components/Technologies";
export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Header />
        <Hero />
        <About />
        <Technologies />
        <Experience />
      </div>
    </div>
  );
}
