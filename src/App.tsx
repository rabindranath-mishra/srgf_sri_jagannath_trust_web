import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Events } from "./sections/Events";
import { Gallery } from "./sections/Gallery";
import { Donate } from "./sections/Donate";
import { Leadership } from "./sections/Leadership";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Top Announcement Bar */}
      <div className="bg-maroon text-ivory py-2 px-4 text-center text-xs md:text-sm font-medium z-[60] fixed top-0 w-full">
        Founded by the Odia community, welcoming all residents of Shriram Greenfield, Bengaluru.
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Donate />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
