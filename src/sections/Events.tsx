import { SectionHeader } from "../components/SectionHeader";
import { EVENTS } from "../data/content";
import { ArrowRight } from "lucide-react";

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
              <div className="bg-gradient-to-br from-maroon/10 to-saffron/10 relative overflow-hidden flex items-center justify-center py-8">
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                <h3 className="relative z-10 text-2xl font-bold text-maroon px-6 text-center">
                  {event.title}
                </h3>
              </div>
              
              <div className="p-8 pt-10 flex-1 flex flex-col">
                <p className="text-green font-semibold mb-6 leading-relaxed">
                  {event.description}
                </p>
                
                {event.itinerary && (
                  <div className="mb-8 space-y-2">
                    {event.itinerary.map((day, dayIndex) => (
                      <div key={dayIndex} className="text-green/80 text-sm">
                        {day}
                      </div>
                    ))}
                  </div>
                )}
                
                {!event.itinerary && (
                  <div className="mt-auto">
                    <button className="w-full flex items-center justify-center px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-maroon hover:bg-maroon hover:text-white transition-all group/btn shadow-sm">
                      Register Now
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-dark/60 italic">
            Stay tuned for updates.
          </p>
        </div>
      </div>
    </section>
  );
};
