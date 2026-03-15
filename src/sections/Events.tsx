import { SectionHeader } from "../components/SectionHeader";
import { EVENTS } from "../data/content";
import { MapPin, ArrowRight } from "lucide-react";

export const Events = () => {
  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Upcoming Events" 
          subtitle="Celebrate, connect, and serve with us."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS.map((event, index) => (
            <div 
              key={index} 
              className="bg-ivory/50 rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group hover:shadow-xl transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-maroon/10 to-saffron/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl text-maroon font-bold text-sm shadow-sm">
                  {event.date}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-maroon mb-4 group-hover:text-vermilion transition-colors">
                  {event.title}
                </h3>
                <p className="text-slate-dark/70 mb-8 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="mt-auto space-y-4">
                  <div className="flex items-center text-sm text-slate-dark/60 font-medium">
                    <MapPin className="w-4 h-4 mr-2 text-maroon/40" />
                    Shriram Greenfield, Bengaluru
                  </div>
                  <button className="w-full flex items-center justify-center px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-maroon hover:bg-maroon hover:text-white transition-all group/btn shadow-sm">
                    Register Now
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-dark/60 italic mb-6">
            Stay tuned for our regular monthly Satsangs and community gatherings.
          </p>
          <a 
            href="#contact" 
            className="text-maroon font-bold border-b-2 border-saffron hover:text-vermilion transition-colors inline-flex items-center"
          >
            Get notified of new events
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
