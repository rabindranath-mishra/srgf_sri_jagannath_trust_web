import { ChevronRight, Heart } from "lucide-react";
import { TRUST_NAME, TAGLINE } from "../data/content";
import jagannathImg from "../assets/jagannath-temple.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image without full-screen overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={jagannathImg}
          alt="Puri Jagannath Temple"
          className="w-full h-full object-cover"
        />
        {/* Subtle vignette/scrim for text and navbar legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-black/10 md:hidden" />
        
        {/* Subtle pattern overlay - reduced opacity */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/mandala.png')] grayscale" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl bg-ivory/80 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-saffron/20 border border-saffron/30 text-saffron-dark font-bold text-xs uppercase tracking-wider mb-6">
            {TAGLINE}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-maroon drop-shadow-sm">
            {TRUST_NAME}
          </h1>
          <p className="text-xl md:text-2xl text-slate-dark leading-relaxed mb-10 font-medium">
            A cultural and community platform in Shriram Greenfield, Bengaluru, 
            inspired by the values of Lord Jagannath and dedicated to preserving 
            Odia heritage while bringing together all residents.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="#events"
              className="px-8 py-4 bg-maroon text-ivory font-bold rounded-xl flex items-center shadow-xl hover:bg-vermilion transition-all transform hover:-translate-y-1"
            >
              View Events
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#donate"
              className="px-8 py-4 bg-white/60 backdrop-blur-md border border-slate-dark/10 text-slate-dark font-bold rounded-xl flex items-center hover:bg-white/80 transition-all transform hover:-translate-y-1 shadow-md"
            >
              Support the Trust
              <Heart className="ml-2 w-5 h-5 text-maroon" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-dark/10 pt-8">
            <div className="flex flex-col">
              <span className="text-maroon font-bold text-xl md:text-2xl">Inclusive</span>
              <span className="text-slate-dark/70 text-xs md:text-sm">For all residents</span>
            </div>
            <div className="flex flex-col">
              <span className="text-maroon font-bold text-xl md:text-2xl">Culture</span>
              <span className="text-slate-dark/70 text-xs md:text-sm">Preserving heritage</span>
            </div>
            <div className="flex flex-col">
              <span className="text-maroon font-bold text-xl md:text-2xl">Seva</span>
              <span className="text-slate-dark/70 text-xs md:text-sm">Dedicated service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
        <div className="w-1 h-10 rounded-full bg-gradient-to-b from-amber to-transparent animate-bounce" />
      </div>
    </section>
  );
};
